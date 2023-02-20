import { useNavigate } from "react-router-dom";

import { InputIcon } from "../components/CustomInput";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";

import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

const ListProduct = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <SideNav />
        </div>
        <div className="col-span-9 px-10 pt-16">
          {/* <div className="flex justify-center ml-auto items-center cursor-pointer w-12 h-12 rounded-xl border-2 bg-white shadow-sm border-[rgba(159,159,159,0.5)]">
            <MdOutlineShoppingCart className="w-6 h-6 text-color3" />
          </div> */}
          <p className="text-[36px] text-color3 font-semibold tracking-widest mt-8">
            Daftar Produk
          </p>

          <div className="flex flex-row justify-center items-center mt-10 ">
            <div className="flex bg-[#F8F5F5] rounded-full w-[20rem] py-2 px-4 gap-2">
              <InputIcon
                id="input-search"
                type="search"
                placeholder="Mencari Produk . . . . . ."
                className="input input-border w-full max-w-full h-8 px-3 rounded-full placeholder-color3 bg-[#F8F5F5] text-color3 text-[16px] tracking-wider font-medium"
              />
              <MdSearch className="w-8 h-8 text-color3" />
            </div>
            <div
              className="py-2 mt-0 px-4 bg-orangeComponent h-10 text-[16px] font-medium text-color1 rounded-xl text-center ml-auto hover:cursor-pointer"
              onClick={() => navigate("/addProduct")}
            >
              Tambah Produk
            </div>
          </div>

          <div className="overflow-auto mt-12">
            <table className="table w-full ">
              <thead className="">
                <tr>
                  <th className="bg-orangeComponent text-color1 text-[14px] w-1/12 text-center">
                    No
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] w-2/12">
                    Nama Product
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] w-3/12 text-center">
                    Kategori
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] w-2/12">
                    Harga Jual
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] w-1/12 text-center">
                    Stock
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] text-center">
                    Pilihan
                  </th>
                </tr>
              </thead>
              <tbody className="border-x-2 border-[rgba(159,159,159,0.2)]">
                <tr>
                  <td className="text-center">1</td>
                  <td>Indomie Goreng</td>
                  <td className="text-center">Makanan</td>
                  <td>Rp 3000</td>
                  <td className="text-center">20</td>
                  <td className="flex justify-center gap-5">
                    <div className="flex flex-row items-center justify-center gap-1 text-[#DA5C53] hover:cursor-pointer">
                      <IoTrashOutline className="w-5 h-5" />
                      <p className="text-[14px] pt-1">Hapus</p>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-1 text-[#306D75] hover:cursor-pointer">
                      <FiEdit
                        className="w-5 h-5"
                        onClick={() => navigate("/editProduct")}
                      />
                      <p
                        className="text-[14px] pt-1"
                        onClick={() => navigate("/editProduct")}
                      >
                        Edit
                      </p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="text-center">2</td>
                  <td>Beras 10 kg</td>
                  <td className="text-center">Bahan Makanan</td>
                  <td>Rp 50000</td>
                  <td className="text-center">10</td>
                  <td className="flex justify-center gap-5">
                    <div className="flex flex-row items-center justify-center gap-1 text-[#DA5C53] hover:cursor-pointer">
                      <IoTrashOutline className="w-5 h-5" />
                      <p className="text-[14px] pt-1">Hapus</p>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-1 text-[#306D75] hover:cursor-pointer">
                      <FiEdit
                        className="w-5 h-5"
                        onClick={() => navigate("/editProduct")}
                      />
                      <p
                        className="text-[14px] pt-1"
                        onClick={() => navigate("/editProduct")}
                      >
                        Edit
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ListProduct;
