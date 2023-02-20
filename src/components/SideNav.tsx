import React from "react";
import {
  FaHome,
  FaBoxOpen,
  FaPeopleArrows,
  FaBookReader,
  FaShareSquare,
} from "react-icons/fa";
import salesLogo from "../assets/sales.webp";
import avatarIcon from "../assets/avatarIcon.webp";

export default function SideNav() {
  return (
    <>
      <div className="min-h-screen w-[20rem] bg-BgSidebar shadow-xl  md:flex lg:flex">
        <div className="flex flex-col ">
          <div className="flex flex-row justify-center mt-10">
            <img src={salesLogo} className="w-2/12 mt-5" />
            <h2 className="mt-8 text-4xl font-extrabold font-poppins text-orangeComponent tracking-widest ml-2">
              POINTKU
            </h2>
          </div>
          <ul className="mt-20 flex flex-col justify-center w-full">
            <li className="ml-5">
              <button className="text-2xl text-orangeComponent font-poppins font-semibold ml-3 hover:bg-orangeComponent py-2 p-4 w-[80%] hover:text-white flex flex-row hover:rounded-xl">
                <FaHome className="w-[1.8rem] h-[1.8rem]" />{" "}
                <p className="ml-4">Beranda</p>
              </button>
            </li>
            <li className="mt-4 ml-5">
              <button className="text-2xl text-orangeComponent font-poppins font-semibold ml-3 hover:bg-orangeComponent py-2 p-4 w-[80%] hover:text-white flex flex-row hover:rounded-xl">
                <FaBoxOpen className="w-[1.8rem] h-[1.8rem]" />
                <p className="ml-4">Produk</p>
              </button>
            </li>
            <li className="mt-4 ml-5">
              <button className="text-2xl text-orangeComponent font-poppins font-semibold ml-3 hover:bg-orangeComponent py-2 p-4 w-[80%] hover:text-white flex flex-row hover:rounded-xl">
                <FaPeopleArrows className="w-[1.8rem] h-[1.8rem]" />
                <p className="ml-4">Member</p>
              </button>
            </li>
            <li className="mt-4 ml-5">
              <button className="text-2xl text-orangeComponent font-poppins font-semibold ml-3 hover:bg-orangeComponent py-2 p-4 w-[80%] hover:text-white flex flex-row hover:rounded-xl">
                <FaBookReader className="w-[1.8rem] h-[1.8rem]" />
                <p className="ml-4">Laporan</p>
              </button>
            </li>
            <li className="mt-4 ml-5">
              <button className="text-2xl text-orangeComponent font-poppins font-semibold ml-3 hover:bg-orangeComponent py-2 p-4 w-[80%] hover:text-white flex flex-row hover:rounded-xl">
                <FaShareSquare className="w-[1.8rem] h-[1.8rem]" />
                <p className="ml-4">Keluar</p>
              </button>
            </li>
          </ul>
          <div className="flex justify-center items-end min-h-screen  pb-10">
            <div className="flex flex-col  items-center">
              <img src={avatarIcon} className="w-3/12" />
              <h1 className="text-xl font-poppins font-semibold text-black mt-3">
                Aldo Barrado
              </h1>
              <p className="text-md font-poppins font-semibold text-grey">
                Tenant
              </p>
              <button className="px-6 py-2 bg-gray-200 text-black font-normal rounded-xl mt-3 hover:bg-black hover:text-white">
                Buka Profil
              </button>
              <p className="mt-5 font-poppins font-semibold text-lg">
                @2023 Pointku App
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
