import { useNavigate } from "react-router-dom";

import { CustomInput, InputIcon } from "../components/CustomInput";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";

import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

const Report = () => {
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
            Laporan Penjualan
          </p>

          <div className="flex flex-row items-center mt-10 gap-12 w-full">
            <div className="flex w-4/12 items-center gap-2">
              <p className="text-[16px] text-color3 font-medium w-28">
                Dari tanggal :
              </p>
              <CustomInput
                id="input-date"
                type="date"
                className="bg-white w-48 shadow-[0px_0px_4px_0px_rgba(120,120,120,0.5)] px-4 py-0 text-[14px] rounded-xl h-8 "
              />
            </div>
            <div className="flex w-6/12 items-center gap-4">
              <p className="text-[16px] text-color3 font-medium">
                Hingga tanggal :
              </p>
              <CustomInput
                id="input-date"
                type="date"
                className="bg-white w-48 shadow-[0px_0px_4px_0px_rgba(120,120,120,0.5)] px-4 py-0 text-[14px] rounded-xl h-8 "
              />
            </div>
          </div>

          <div className="overflow-auto mt-12">
            <table className="table w-full ">
              <thead className="">
                <tr>
                  <th className="bg-orangeComponent text-color1 text-[14px] w-1/12 text-center">
                    Tanggal
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] w-2/12">
                    Nama
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] w-2/12 text-center">
                    Invoice
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] w-2/12">
                    No.Telepon
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] w-1/12 text-center">
                    Total Belanja
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] text-center">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="border-x-2 border-[rgba(159,159,159,0.2)] text-[14px]">
                <tr>
                  <td className="text-center">20/02/2023</td>
                  <td>Rahma Aprillia Sari</td>
                  <td className="text-center text-[14px]">
                    INV/2023-02-20/MPL/001
                  </td>
                  <td>089534568976</td>
                  <td className="text-center">Rp 150000</td>
                  <td className="flex justify-center gap-5">Selesai</td>
                </tr>

                <tr>
                  <td className="text-center">21/02/2023</td>
                  <td>M Agung Cahya D</td>
                  <td className="text-center text-[14px]">
                    INV/2023-02-21/MPL/002
                  </td>
                  <td>089767765455</td>
                  <td className="text-center">Rp 300000</td>
                  <td className="flex justify-center gap-5">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Report;
