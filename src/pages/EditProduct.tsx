import { useNavigate } from "react-router-dom";

import { InputIcon } from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";

import Logo from "../assets/addProduct.svg";

const EditProduk = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <SideNav />
        </div>
        <div className="flex col-span-9 pl-16 pr-10 pt-16">
          <div className=" w-8/12 px-8 pt-8">
            <div className="w-72 shadow-[2px_4px_10px_0px_rgba(36,36,36,0.4)] rounded-3xl overflow-hidden">
              <img src={Logo} alt="logo.svg" className="" />
            </div>

            <input
              type="file"
              className="file-input file-input-bordered file-input-md h-10 w-72 max-w-xs mt-10"
            />

            <p className="mt-10 text-[18px] text-color3 font-semibold">
              Kode Barcode
            </p>
            <InputIcon
              id="input-barcode"
              placeholder="masukkan kode barcode anda"
              className="input input-bordered border-2 w-72 mt-1"
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
              placeholder="Contoh: Indomie Goreng"
              className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
            />
            <p className="mt-5 text-[18px] text-color3 font-medium">
              Kategori Produk
            </p>
            <select
              defaultValue={"DEFAULT"}
              name="option"
              id="input-kategori"
              className="select select-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1 font-normal text-color3"
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
                />
              </div>
              <div className="w-11/12">
                <p>Minimum Stock</p>
                <InputIcon
                  id="input-barcode"
                  placeholder="Contoh: 4"
                  type="number"
                  className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
                />
              </div>
              <div className="w-11/12">
                <p>Harga Jual</p>
                <InputIcon
                  id="input-barcode"
                  placeholder="Contoh: 3000"
                  type="number"
                  className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
                />
              </div>
              <div className="w-11/12">
                <p>Harga Beli</p>
                <InputIcon
                  id="input-barcode"
                  placeholder="Contoh: 2500"
                  type="number"
                  className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
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
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditProduk;
