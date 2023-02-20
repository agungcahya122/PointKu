import React from "react";
import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";

import { FaArrowCircleLeft, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CustomInput } from "../components/CustomInput";

function Profile() {
  return (
    <Layout>
      <div className="flex flex-row">
        <div className="flex w-[20%] min-h-screen">
          <SideNav />
        </div>
        <div className="flex w-[80%] min-h-screen">
          <ShowProfile />
        </div>
      </div>
    </Layout>
  );
}

function ShowProfile() {
  return (
    <>
      <div>a</div>
      <Link to="/editProfile">edit profile</Link>
    </>
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
                    <input
                      type="text"
                      placeholder="Pencarian..."
                      className="input bg-slate-200  placeholder-black w-[27rem]"
                    />
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="flex w-[20%] justify-start items-center">
                <FaShoppingCart className="text-black w-[4rem] h-[4rem] border-1 border-slate-300 p-3 rounded-md border-2" />
              </div>
            </div>
            <div className=" w-full">
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

export { Profile, ShowProfile, EditProfile };
