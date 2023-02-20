import { FaArrowCircleLeft, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CustomInput } from "../components/CustomInput";
import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";

import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import avatarIcon from "../assets/avatarIcon.webp";
import CustomButton from "../components/CustomButton";

function Profile() {
  return (
    <Layout>
      <div className="flex flex-row">
        <div className="flex w-[20%] min-h-screen">
          <SideNav />
        </div>
        <div className="flex w-[80%] min-h-screen">
          <div className="flex flex-col w-full overflow-hidden">
            <div className="flex flex-row h-[8rem] mt-10">
              <div className="flex-1 ">
                <h1 className="text-2xl font-poppins text-black font-bold mt-7 ml-6 tracking-[0.2rem]">
                  Selamat Datang, Aldo
                </h1>
                <p className=" text-gray-400 text-sm tracking-[0.2rem] ml-6">
                  Temukan, yang kamu butuhkan
                </p>
              </div>
            </div>
            <div className="tracking-[0.2rem] font-bold flex flex-col items-center text-center">
              <img src={avatarIcon} alt="avatar" className="w-1/6" />
              <br />
              <h1 className="text-color3 text-2xl">Warung saya</h1>
              <br />
              <p className="text-color4">email</p>
              <br />
              <div className="flex">
                <TfiLocationPin className="w-7 h-7" />
                <p>alamat</p>
              </div>
              <br />
              <div className="flex">
                <IoCallOutline className="w-7 h-7" />
                <p>no</p>
              </div>
              <br />
              <div className="flex gap-12">
                <Link to="/editProfile">
                  <CustomButton
                    className="bg-orangeComponent h-10 w-40 text-white tracking-[0.2rem] rounded-lg"
                    label="Edit Profil"
                  />
                </Link>
                <CustomButton
                  className="bg-color3 h-10 w-40 text-white tracking-[0.2rem] rounded-lg"
                  label="Hapus akun"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function EditProfile() {
  return (
    <Layout>
      <div className="flex flex-row">
        <div className="flex w-[20%] min-h-screen">
          <SideNav />
        </div>
        <div className="flex w-[80%] min-h-screen">
          <div className="flex flex-col w-full overflow-hidden ">
            <div className="flex flex-row h-[8rem] mt-10 ">
              <div className="flex w-[40%] ">
                <Link to="/profile">
                  <CustomButton
                    id="btn-kembaliProfil"
                    icon={<FaArrowCircleLeft className="mr-5 mt-1" />}
                    label="Kembali"
                    className="text-2xl text-orangeComponent font-poppins font-semibold ml-20 mt-10 py-2 p-4   flex flex-row hover:rounded-xl "
                  />
                </Link>
              </div>
              <div className="flex w-[40%] ">
                <div className="form-control ">
                  <div className="input-group mt-10 ml-10">
                    <button className="px-4 py-3 bg-slate-200 hover:bg-slate-300 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                    <CustomInput
                      id="input-pencarian"
                      type="text"
                      placeholder="Pencarian..."
                      className="input bg-slate-200  placeholder-black w-[17rem]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-[20%] justify-start items-center">
                <FaShoppingCart className="text-black w-[3.5rem] h-[3.5rem] border-1 border-slate-300 p-3 rounded-md border-2" />
              </div>
            </div>
            <div className=" flex flex-col ml-10 w-full">
              <h1 className="text-4xl font-bold font-poppins mt-20 ">
                Edit Profile Tenant
              </h1>
              <div className="flex flex-row">
                <div className="flex-1 flex-col ">
                  <div className="form-control w-full mt-16">
                    <label className="label">
                      <span className="label-text text-lg text-black">
                        Nama Toko :
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
                    <label className="label mt-8">
                      <span className="label-text text-lg text-black    ">
                        Password :
                      </span>
                    </label>
                    <CustomInput
                      id="input-nama"
                      type="password"
                      placeholder="Type here"
                      className="input input-bordered w-10/12"
                    />
                  </div>
                  <CustomButton
                    id="btn-perbaruiTenant"
                    label="Perbarui Profil"
                    className="py-3 px-10 w-6/12 text-lg bg-orangeComponent text-white rounded-xl mt-10 hover:bg-orange-700"
                  />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const CartDrawer = () => {
  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export { Profile, EditProfile };
