import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import { CustomInput, InputIcon } from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import withReactContent from "sweetalert2-react-content";

import Logo from "../assets/addProduct.svg";
import axios from "axios";
import Swal from "../utils/Swal";
import stateImage from "../assets/nik-IvREkzD580Q-unsplash.webp";
import { productData } from "../utils/types/DataTypes";

const MySwal = withReactContent(Swal);

const AddProduct = () => {
  const navigate = useNavigate();
  const [cookie, removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;
  const [dataProduct, setDataProduct] = useState<productData[]>([]);
  const [addProduct, setAddProduct] = useState<productData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [objSubmit, setObjSubmit] = useState<productData>({});
  const [upc, setUpc] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [product_name, setProductName] = useState<string>("");
  const [stock, setStock] = useState<number>(0);
  const [minimum_stock, setMinimumStock] = useState<number>(0);
  const [buying_price, setBuyingPrice] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [product_image, setProductImage] = useState<any>(stateImage);
  const [supplier, setSupplier] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(false);
    const formData = new FormData();

    const body = {
      upc,
      category,
      product_name,
      stock,
      minimum_stock,
      buying_price,
      price,
      product_image,
      supplier,
    };

    axios
      .post(
        "https://virtserver.swaggerhub.com/CAPSTONE-Group1/sirloinPOSAPI/1.0.0/products",
        body,
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
            "Content-Type": "multipart/form-data",
          },
          params: {},
        }
      )
      .then((res) => {
        const { message } = res.data;
        setDataProduct((prevDatas) => [...prevDatas, body]);
        localStorage.setItem("dataProduct", JSON.stringify(dataProduct));

        MySwal.fire({
          title: "Berhasil Menambahkan Data Product",
          text: message,
          showCancelButton: false,
        });
        navigate("/listProduct");
      })
      .catch((err) => {
        const { message } = err.response.data;

        MySwal.fire({
          title: "Gagal Menambahkan Data Product",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  function handleChangeCategory(e: any) {
    setCategory(e.target.value);
  }

  const handleChangeImage = (
    value: string | File,
    key: keyof typeof objSubmit
  ) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <Layout>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <SideNav />
        </div>
        <div className="flex col-span-9 pl-0 pr-20 pt-16">
          <div className=" w-8/12 px-0 pt-20">
            <div className="w-72 shadow-[2px_4px_10px_0px_rgba(36,36,36,0.4)] rounded-3xl overflow-hidden">
              <img src={product_image} alt="logo.svg" className="" />
            </div>

            <CustomInput
              id="input-file"
              type="file"
              className="file-input file-input-bordered file-input-md h-10 w-72 max-w-xs mt-10"
              onChange={(e) => {
                if (!e.currentTarget.files) {
                  return;
                }
                setProductImage(URL.createObjectURL(e.currentTarget.files[0]));
                handleChangeImage(e.currentTarget.files[0], "product_image");
              }}
            />

            <p className="mt-10 text-[18px] text-color3 font-semibold">
              Kode Barcode
            </p>
            <InputIcon
              id="input-barcode"
              placeholder="masukkan kode barcode anda"
              className="input input-bordered border-2 w-72 mt-1"
              onChange={(e) => setUpc(e.target.value)}
            />
          </div>

          <div className="pl-5 w-full">
            <p className="text-[40px] text-[rgb(30,29,29)] font-bold tracking-wider pt-10">
              Tambah Produk
            </p>
            <p className="mt-5 text-[18px] text-color3 font-medium">
              Nama Produk
            </p>
            <InputIcon
              id="input-barcode"
              type="text"
              placeholder="Contoh: Indomie Goreng"
              className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
              onChange={(e) => setProductName(e.target.value)}
            />
            <p className="mt-5 text-[18px] text-color3 font-medium">
              Kategori Produk
            </p>
            <select
              defaultValue={"DEFAULT"}
              name="option"
              id="input-kategori"
              className="select select-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1 font-normal text-color3"
              onChange={(e) => handleChangeCategory(e.target.value)}
            >
              <option value="DEFALUT" disabled>
                Pilih Salah Satu
              </option>
              <option value="makanan">Makanan</option>
              <option value="minuman">Minuman</option>
              <option value="bahan_makanan">Bahan Makanan</option>
              <option value="kebersihan">Kebersihan</option>
            </select>

            <div className="grid grid-cols-2 mt-5 gap-8">
              <div className="w-11/12">
                <p>Stok</p>
                <InputIcon
                  id="input-barcode"
                  placeholder="Contoh: 8"
                  type="number"
                  className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
                  onChange={(e) => setStock(parseInt(e.target.value))}
                />
              </div>
              <div className="w-11/12">
                <p>Minimum Stock</p>
                <InputIcon
                  id="input-barcode"
                  placeholder="Contoh: 4"
                  type="number"
                  className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
                  onChange={(e) => setMinimumStock(parseInt(e.target.value))}
                />
              </div>
              <div className="w-11/12">
                <p>Harga Jual</p>
                <InputIcon
                  id="input-barcode"
                  placeholder="Contoh: 3000"
                  type="number"
                  className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
                  onChange={(e) => setPrice(parseInt(e.target.value))}
                />
              </div>
              <div className="w-11/12">
                <p>Harga Beli</p>
                <InputIcon
                  id="input-barcode"
                  placeholder="Contoh: 2500"
                  type="number"
                  className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
                  onChange={(e) => setBuyingPrice(parseInt(e.target.value))}
                />
              </div>
            </div>
            <p className="mt-5 text-[18px] text-color3 font-medium">
              Pemasok Produk
            </p>
            <InputIcon
              id="input-pemasok"
              type="text"
              placeholder="Contoh: Toko Indofood Grosir"
              className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
              onChange={(e) => setSupplier(e.target.value)}
            />

            <CustomButton
              id="btn-edit"
              label="Kembali"
              className="w-8/12 lg:w-3/12 py-3 lg:ml-1 ml-0 rounded-lg mx-auto mt-8 disabled:bg-slate-500 disabled:cursor-not-allowed text-white font-semibold text-[16px] bg-[rgba(50,50,50,1)] hover:bg-color3 font-poppins"
              onClick={() => navigate("/listProduct")}
            />

            <CustomButton
              id="btn-edit"
              label="Tambah Produk"
              className="w-11/12 lg:w-5/12 py-3 lg:ml-8 ml-0 rounded-lg mx-auto mt-8 disabled:bg-slate-500 disabled:cursor-not-allowed text-white font-semibold text-[16px] bg-orangeComponent hover:bg-orange-600 font-poppins"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;
