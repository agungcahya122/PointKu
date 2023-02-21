import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import { InputIcon } from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import { productData } from "../utils/types/DataTypes";
import withReactContent from "sweetalert2-react-content";

import Logo from "../assets/addProduct.svg";
import axios from "axios";
import Swal from "../utils/Swal";

const MySwal = withReactContent(Swal);

const EditProduk = () => {
  const navigate = useNavigate();
  const [cookie, removeCookie] = useCookies(["token"]);

  const checkToken = cookie.token;
  const [data, setData] = useState<productData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [editProduct, setEditProduct] = useState<productData>({});
  const { product_id } = useParams();
  console.log(product_id);
  const [upc, setUpc] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [product_name, setProductName] = useState<string>("");
  const [stock, setStock] = useState<number>();
  const [minimum_stock, setMinimumStock] = useState<number>();
  const [buying_price, setBuyingPrice] = useState<number>();
  const [price, setPrice] = useState<number>();
  const [product_image, setProductImage] = useState<string>("");
  const [supplier, setSupplier] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(
        `https://virtserver.swaggerhub.com/CAPSTONE-Group1/sirloinPOSAPI/1.0.0/products/${product_id}`,
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
          },
          params: {},
        }
      )
      .then((res) => {
        const {
          upc,
          category,
          product_name,
          stock,
          minimum_stock,
          buying_price,
          price,
          product_image,
          supplier,
        } = res.data.data;
        setUpc(upc);
        setCategory(category);
        setProductName(product_name);
        setStock(stock);
        setMinimumStock(minimum_stock);
        setBuyingPrice(buying_price);
        setPrice(price);
        setProductImage(product_image);
        setSupplier(supplier);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    let key: keyof typeof editProduct;
    for (key in editProduct) {
      formData.append(key, editProduct[key]);
    }

    axios
      .put(
        `https://virtserver.swaggerhub.com/CAPSTONE-Group1/sirloinPOSAPI/1.0.0/products/${product_id}`,
        formData,
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
        localStorage.setItem("update", JSON.stringify(res.data));
        setData(JSON.parse(localStorage.getItem("update") || ""));
        MySwal.fire({
          title: "Data Berhasil diupdate",
          text: message,
          showCancelButton: false,
        });
        setEditProduct({});
      })
      .catch((err) => {
        const { message } = err.response;

        MySwal.fire({
          title: "Data Gagal Diupdate",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (
    value: string | File,
    key: keyof typeof editProduct
  ) => {
    let temp = { ...editProduct };
    temp[key] = value;
    setEditProduct(temp);
  };

  return (
    <Layout>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <SideNav />
        </div>

        <div className="flex col-span-9 pl-16 pr-10 pt-16">
          <div className=" w-8/12 px-8 pt-8">
            <div className="w-72 shadow-[2px_4px_10px_0px_rgba(36,36,36,0.4)] rounded-3xl overflow-hidden">
              <img src={product_image} alt="logo.svg" className="" />
            </div>

            <input
              type="file"
              className="file-input file-input-bordered file-input-md h-10 w-72 max-w-xs mt-10"
              onChange={(e) => {
                if (!e.currentTarget.files) {
                  return;
                }
                setProductImage(URL.createObjectURL(e.currentTarget.files[0]));
                handleChange(e.currentTarget.files[0], "product_image");
              }}
            />

            <p className="mt-10 text-[18px] text-color3 font-semibold">
              Kode Barcode
            </p>
            <InputIcon
              id="input-barcode"
              defaultValue={upc}
              placeholder="masukkan kode barcode anda"
              className="input input-bordered border-2 w-72 mt-1"
              onChange={(e) => handleChange(e.target.value, "upc")}
            />
          </div>

          <div className="pl-5 w-full">
            <p className="text-[40px] text-[rgb(30,29,29)] font-bold tracking-wider">
              Edit Produk
            </p>
            <p className="mt-5 text-[18px] text-color3 font-medium">
              Nama Produk
            </p>
            <InputIcon
              id="input-barcode"
              type="text"
              defaultValue={product_name}
              placeholder="Contoh: Indomie Goreng"
              className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
              onChange={(e) => handleChange(e.target.value, "product_name")}
            />
            <p className="mt-5 text-[18px] text-color3 font-medium">
              Kategori Produk
            </p>
            <select
              defaultValue={category}
              name="option"
              id="input-kategori"
              className="select select-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1 font-normal text-color3"
              onChange={(e) => handleChange(e.target.value, "category")}
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
                  defaultValue={stock}
                  type="number"
                  className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
                  onChange={(e) => handleChange(e.target.value, "stock")}
                />
              </div>
              <div className="w-11/12">
                <p>Minimum Stock</p>
                <InputIcon
                  id="input-barcode"
                  defaultValue={minimum_stock}
                  placeholder="Contoh: 4"
                  type="number"
                  className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
                  onChange={(e) =>
                    handleChange(e.target.value, "minimum_stock")
                  }
                />
              </div>
              <div className="w-11/12">
                <p>Harga Jual</p>
                <InputIcon
                  id="input-barcode"
                  defaultValue={price}
                  placeholder="Contoh: 3000"
                  type="number"
                  className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
                  onChange={(e) => handleChange(e.target.value, "price")}
                />
              </div>
              <div className="w-11/12">
                <p>Harga Beli</p>
                <InputIcon
                  id="input-barcode"
                  defaultValue={buying_price}
                  placeholder="Contoh: 2500"
                  type="number"
                  className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
                  onChange={(e) => handleChange(e.target.value, "buying_price")}
                />
              </div>
            </div>
            <p className="mt-5 text-[18px] text-color3 font-medium">
              Pemasok Produk
            </p>
            <InputIcon
              id="input-pemasok"
              defaultValue={supplier}
              type="text"
              placeholder="Contoh: Toko Indofood Grosir"
              className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
              onChange={(e) => handleChange(e.target.value, "supplier")}
            />

            <CustomButton
              id="btn-edit"
              label="Kembali"
              className="w-8/12 lg:w-3/12 py-3 lg:ml-1 ml-0 rounded-lg mx-auto mt-8 disabled:bg-slate-500 disabled:cursor-not-allowed text-white font-semibold text-[16px] bg-[rgba(50,50,50,1)] hover:bg-color3 font-poppins"
              onClick={() => navigate("/listProduct")}
            />

            <CustomButton
              id="btn-edit"
              label="Edit Produk"
              className="w-11/12 lg:w-5/12 py-3 lg:ml-8 ml-0 rounded-lg mx-auto mt-8 disabled:bg-slate-500 disabled:cursor-not-allowed text-white font-semibold text-[16px] bg-orangeComponent hover:bg-orange-600 font-poppins"
              onClick={handleUpdate}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditProduk;
