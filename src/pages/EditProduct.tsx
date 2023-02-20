import Layout from "../components/Layout";
import SideNav from "../components/SideNav";

import Logo from "../assets/addProduct.svg";
import CustomInput from "../components/CustomInput";

const EditProduk = () => {
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
              className="file-input file-input-bordered file-input-sm w-72 max-w-xs mt-10"
            />

            <p className="mt-10 text-[18px] text-color3 font-semibold">
              Kode Barcode
            </p>
            <CustomInput
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
            <CustomInput
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
                <CustomInput
                  id="input-barcode"
                  placeholder="Contoh: 8"
                  type="number"
                  className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
                />
              </div>
              <div className="w-11/12">
                <p>Minimum Stock</p>
                <CustomInput
                  id="input-barcode"
                  placeholder="Contoh: 4"
                  type="number"
                  className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
                />
              </div>
              <div className="w-11/12">
                <p>Harga Jual</p>
                <CustomInput
                  id="input-barcode"
                  placeholder="Contoh: 3000"
                  type="number"
                  className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
                />
              </div>
              <div className="w-11/12">
                <p>Harga Beli</p>
                <CustomInput
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
            <CustomInput
              id="input-pemasok"
              type="text"
              placeholder="Contoh: Toko Indofood Grosir"
              className="input input-bordered border-2 border-[rgba(159,159,159,0.5)] w-full mt-1"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditProduk;
