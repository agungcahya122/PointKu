import React from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaHome,
  FaBoxOpen,
  FaPeopleArrows,
  FaBookReader,
  FaShareSquare,
} from "react-icons/fa";
import salesLogo from "../assets/sales.webp";
import avatarIcon from "../assets/avatarIcon.webp";
import CustomButton from "./CustomButton";

import Home from "../pages/Home";

export default function SideNav() {
  const navigate = useNavigate();

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
              <CustomButton
                id="btn-beranda"
                icon={<FaHome className="w-[1.8rem] h-[1.8rem] mr-5" />}
                label="Beranda"
                className="text-2xl text-orangeComponent font-poppins font-semibold ml-3 hover:bg-orangeComponent py-2 p-4 w-[80%] hover:text-white flex flex-row hover:rounded-xl"
              />
            </li>

            <li className="mt-4 ml-5">
              <CustomButton
                id="btn-produk"
                icon={<FaBoxOpen className="w-[1.8rem] h-[1.8rem] mr-5" />}
                label="Produk"
                className="text-2xl text-orangeComponent font-poppins font-semibold ml-3 hover:bg-orangeComponent py-2 p-4 w-[80%] hover:text-white flex flex-row hover:rounded-xl"
              />
            </li>
            <li className="mt-4 ml-5">
              <CustomButton
                id="btn-member"
                icon={<FaPeopleArrows className="w-[1.8rem] h-[1.8rem] mr-5" />}
                label="Member"
                className="text-2xl text-orangeComponent font-poppins font-semibold ml-3 hover:bg-orangeComponent py-2 p-4 w-[80%] hover:text-white flex flex-row hover:rounded-xl"
              />

            </li>
            <li className="mt-4 ml-5">
              <CustomButton
                id="btn-laporan"
                icon={<FaBookReader className="w-[1.8rem] h-[1.8rem] mr-5" />}
                label="Laporan"
                className="text-2xl text-orangeComponent font-poppins font-semibold ml-3 hover:bg-orangeComponent py-2 p-4 w-[80%] hover:text-white flex flex-row hover:rounded-xl"
              />

            </li>
            <li className="mt-4 ml-5">
              <CustomButton
                id="btn-keluar"
                icon={<FaShareSquare className="w-[1.8rem] h-[1.8rem] mr-5" />}
                label="Keluar"
                className="text-2xl text-orangeComponent font-poppins font-semibold ml-3 hover:bg-orangeComponent py-2 p-4 w-[80%] hover:text-white flex flex-row hover:rounded-xl"
              />
            </li>
          </ul>
          {true ? (
            <>
              <div className="flex justify-center items-end min-h-screen  pb-10">
                <div className="flex flex-col  items-center">
                  <img src={avatarIcon} className="w-3/12" />
                  <h1 className="text-xl font-poppins font-semibold text-black mt-3">
                    Aldo Barrado
                  </h1>
                  <p className="text-md font-poppins font-semibold text-grey">
                    Tenant
                  </p>
                  <Link to="/profile">
                    <CustomButton
                      id="btn-profil"
                      label="Buka Profil"
                      className="px-6 py-2 bg-gray-200 text-black font-normal rounded-xl mt-3 hover:bg-black hover:text-white"
                    />
                  </Link>
                  <p className="mt-5 font-poppins font-semibold text-lg">
                    @2023 Pointku App
                  </p>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
