import { useNavigate } from "react-router-dom";

import { InputIcon } from "../components/CustomInput";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import CustomButton from "../components/CustomButton";
import { CustomInput } from "../components/CustomInput";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { FaArrowCircleLeft } from "react-icons/fa";

import { FaArrowCircleLeft, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CustomInput } from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
const ListMember = () => {
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
            List Member
          </p>

          <div className="flex flex-row justify-center items-center mt-10">
            <div className="flex bg-[#F8F5F5] rounded-full w-[20rem] py-2 px-4 gap-2">
              <InputIcon
                id="input-search"
                type="search"
                placeholder="Mencari Member . . . . . ."
                className="input input-border w-full max-w-full h-8 px-3 rounded-full placeholder-color3 bg-[#F8F5F5] text-color3 text-[16px] tracking-wider font-medium"
              />
              <MdSearch className="w-8 h-8 text-color3" />
            </div>
            <div
              className="py-2 mt-0 px-6 bg-orangeComponent h-10 text-[16px] font-medium text-color1 rounded-xl text-center ml-auto hover:cursor-pointer"
              onClick={() => navigate("/addMember")}
            >
              Tambah Member
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
                    Nama Member
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] w-2/12 text-center">
                    Alamat
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] w-2/12">
                    No. Telepon
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] w-1/12 text-center">
                    Email
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] text-center">
                    Pilihan
                  </th>
                </tr>
              </thead>

              <tbody className="border-x-2 border-[rgba(159,159,159,0.2)] text-[14px]">
                <tr>
                  <td className="text-center">1</td>
                  <td>Rahma Aprillia Sari</td>
                  <td className="text-center text-[14px]">
                    Jl.Ampel no.12, RT/RW 001/003, Sukun, Malang
                  </td>
                  <td>089534568976</td>
                  <td className="text-center">rahmaaprillia@gmail.com</td>
                  <td className="flex justify-center gap-5">
                    <div className="flex flex-row items-center justify-center gap-1 text-[#DA5C53] hover:cursor-pointer">
                      <IoTrashOutline className="w-5 h-5" />
                      <p className="text-[14px] pt-1">Hapus</p>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-1 text-[#306D75] hover:cursor-pointer ">
                      <FiEdit
                        className="w-5 h-5"
                        onClick={() => navigate("/editMember")}
                      />
                      <p
                        className="text-[14px] pt-1"
                        onClick={() => navigate("/editMember")}
                      >
                        Edit
                      </p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="text-center">2</td>
                  <td>M Agung Cahya D</td>
                  <td className="text-center text-[14px]">
                    Jl.Nusantara no.03, RT/RW 001/003, Garum, Blitar
                  </td>
                  <td>089678985678</td>
                  <td className="text-center">agungcahya@gmail.com</td>
                  <td className="flex justify-center gap-5">
                    <div className="flex flex-row items-center justify-center gap-1 text-[#DA5C53] hover:cursor-pointer">
                      <IoTrashOutline className="w-5 h-5" />
                      <p className="text-[14px] pt-1">Hapus</p>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-1 text-[#306D75] hover:cursor-pointer ">
                      <FiEdit
                        className="w-5 h-5"
                        onClick={() => navigate("/editMember")}
                      />
                      <p
                        className="text-[14px] pt-1"
                        onClick={() => navigate("/editMember")}
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

const AddMember = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-row">
          <div className="flex w-[20%] min-h-screen">
            <SideNav />
          </div>
          <div className="flex w-[80%] min-h-screen">
            <div className="flex flex-col w-full overflow-hidden ml-16 ">
              <div className="flex flex-row h-[8rem] mt-10 ">
                <div className="flex w-[40%] ">
                  <Link to="/listMember">
                    <CustomButton
                      id="btn-kembaliProfil"
                      icon={<FaArrowCircleLeft className="mr-5 mt-1" />}
                      label="Kembali"
                      className="text-2xl text-orangeComponent font-poppins font-semibold ml-20 mt-10 py-2 p-4 flex flex-row hover:rounded-xl"
                    />
                  </Link>
                </div>
              </div>
              <div className=" w-full">
                <h1 className="text-4xl font-bold font-poppins mt-20 ">
                  Tambah Member Baru
                </h1>
                <div className="flex flex-row">
                  <div className="flex-1 flex-col ">
                    <div className="form-control w-full mt-16">
                      <label className="label">
                        <span className="label-text text-lg text-black">
                          Nama Member :
                        </span>
                      </label>
                      <CustomInput
                        id="input-nama"
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-10/12 "
                      />
                      <label className="label mt-8">
                        <span className="label-text text-lg text-black">
                          Email :
                        </span>
                      </label>
                      <CustomInput
                        id="input-nama"
                        type="email"
                        placeholder="Type here"
                        className="input input-bordered w-10/12 "
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex-col ">
                    {" "}
                    <div className="form-control w-full mt-16">
                      <label className="label">
                        <span className="label-text text-lg text-black">
                          No. Telepon:
                        </span>
                      </label>
                      <CustomInput
                        id="input-nama"
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-10/12 "
                      />
                      <label className="label mt-8">
                        <span className="label-text text-lg text-black">
                          Alamat
                        </span>
                      </label>
                      <textarea
                        id="input-nama"
                        placeholder="Type here"
                        className="input input-bordered w-10/12 h-[11rem]"
                      ></textarea>
                    </div>
                    <CustomButton
                      id="btn-perbaruiTenant"
                      label="Tambah Member Baru"
                      className="py-3 px-10 w-6/12 text-lg bg-orangeComponent text-white rounded-xl mt-10 hover:bg-orange-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

const EditMember = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-row">
          <div className="flex w-[20%] min-h-screen">
            <SideNav />
          </div>
          <div className="flex w-[80%] min-h-screen">
            <div className="flex flex-col w-full overflow-hidden ml-16 ">
              <div className="flex flex-row h-[8rem] mt-10 ">
                <div className="flex w-[40%] ">
                  <Link to="/listMember">
                    <CustomButton
                      id="btn-kembaliProfil"
                      icon={<FaArrowCircleLeft className="mr-5 mt-1" />}
                      label="Kembali"
                      className="text-2xl text-orangeComponent font-poppins font-semibold ml-20 mt-10 py-2 p-4   flex flex-row hover:rounded-xl "
                    />
                  </Link>
                </div>
              </div>
              <div className=" w-full">
                <h1 className="text-4xl font-bold font-poppins mt-20 ">
                  Edit Member PointKu
                </h1>
                <div className="flex flex-row">
                  <div className="flex-1 flex-col ">
                    <div className="form-control w-full mt-16">
                      <label className="label">
                        <span className="label-text text-lg text-black">
                          Nama Member :
                        </span>
                      </label>
                      <CustomInput
                        id="input-nama"
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-10/12 "
                      />
                      <label className="label mt-8">
                        <span className="label-text text-lg text-black">
                          Email :
                        </span>
                      </label>
                      <CustomInput
                        id="input-nama"
                        type="email"
                        placeholder="Type here"
                        className="input input-bordered w-10/12 "
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex-col ">
                    {" "}
                    <div className="form-control w-full mt-16">
                      <label className="label">
                        <span className="label-text text-lg text-black">
                          No. Telepon:
                        </span>
                      </label>
                      <CustomInput
                        id="input-nama"
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-10/12 "
                      />
                      <label className="label mt-8">
                        <span className="label-text text-lg text-black">
                          Alamat
                        </span>
                      </label>
                      <textarea
                        id="input-nama"
                        placeholder="Type here"
                        className="input input-bordered w-10/12 h-[11rem]"
                      ></textarea>
                    </div>
                    <CustomButton
                      id="btn-perbaruiTenant"
                      label="Perbarui Data Member"
                      className="py-3 px-10 w-10/12 text-lg bg-orangeComponent text-white rounded-xl mt-10 hover:bg-orange-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export { ListMember, AddMember, EditMember };
