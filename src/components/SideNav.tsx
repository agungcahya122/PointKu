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

export default function SideNav() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sticky top-0 right-0">
        <div className="lg:hidden drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="btn ">
              Buka
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu w-80 bg-white ">
              <div className="flex flex-col ">
                <div className="flex flex-row justify-center mt-10">
                  <img src={salesLogo} className="w-2/12 mt-5" />
                  <h2 className="mt-8 text-4xl font-extrabold font-poppins text-orangeComponent tracking-widest ml-2">
                    POINTKU
                  </h2>
                </div>
                <ul className="mt-20 flex flex-col justify-center w-full ml-10">
                  <li className="flex flex-row hover:bg-orangeComponent w-[70%] hover:py-2 rounded-xl items-center p-3 hover:cursor-pointer text-orangeComponent">
                    <FaHome className="w-[1.8rem] h-[1.8rem]" />
                    <a className="text-2xl  text-orangeComponent font-poppins font-semibold ml-5 hover:text-white">
                      Beranda
                    </a>
                  </li>
                  <li className="flex flex-row hover:bg-orangeComponent w-[70%] hover:py-2 rounded-xl items-center p-3 hover:cursor-pointer text-orangeComponent">
                    <FaBoxOpen className="w-[1.8rem] h-[1.8rem]" />
                    <Link
                      to={"/listProduct"}
                      className="text-2xl  text-orangeComponent font-poppins font-semibold ml-5 hover:text-white"
                    >
                      Produk
                    </Link>
                  </li>
                  <li className="flex flex-row hover:bg-orangeComponent w-[70%] hover:py-2 rounded-xl items-center p-3 hover:cursor-pointer text-orangeComponent">
                    <FaPeopleArrows className="w-[1.8rem] h-[1.8rem]" />
                    <a className="text-2xl  text-orangeComponent font-poppins font-semibold ml-5 hover:text-white">
                      Member
                    </a>
                  </li>
                  <li className="flex flex-row hover:bg-orangeComponent w-[70%] hover:py-2 rounded-xl items-center p-3 hover:cursor-pointer text-orangeComponent ">
                    <FaBookReader className="w-[1.8rem] h-[1.8rem]" />
                    <a className="text-2xl  text-orangeComponent font-poppins font-semibold ml-5 hover:text-white">
                      Laporan
                    </a>
                  </li>
                  <li className="flex flex-row hover:bg-orangeComponent w-[70%] hover:py-2 rounded-xl items-center p-3 hover:cursor-pointer text-orangeComponent">
                    <FaShareSquare className="w-[1.8rem] h-[1.8rem]" />
                    <a className="text-2xl  text-orangeComponent font-poppins font-semibold ml-5 hover:text-white">
                      Keluar
                    </a>
                  </li>
                </ul>
                <div className="flex justify-center items-end h-[30rem] pb-10">
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
            </ul>
          </div>
        </div>
      </div>

      <div className="min-h-screen w-[20rem] bg-BgSidebar shadow-xl hidden md:flex lg:flex">
        <div className="flex flex-col ">
          <div className="flex flex-row justify-center mt-10">
            <img src={salesLogo} className="w-2/12 mt-5" />
            <h2 className="mt-8 text-4xl font-extrabold font-poppins text-orangeComponent tracking-widest ml-2">
              POINTKU
            </h2>
          </div>
          <ul className="mt-20 flex flex-col justify-center w-full ml-10">
            <li className="flex flex-row hover:bg-orangeComponent w-[70%] hover:py-2 rounded-xl items-center p-3 hover:cursor-pointer text-orangeComponent">
              <FaHome className="w-[1.8rem] h-[1.8rem]" />
              <a className="text-2xl  text-orangeComponent font-poppins font-semibold ml-5 hover:text-white">
                Beranda
              </a>
            </li>
            <li className="flex flex-row hover:bg-orangeComponent w-[70%] hover:py-2 rounded-xl items-center p-3 hover:cursor-pointer text-orangeComponent">
              <FaBoxOpen className="w-[1.8rem] h-[1.8rem]" />
              <a className="text-2xl  text-orangeComponent font-poppins font-semibold ml-5 hover:text-white">
                Produk
              </a>
            </li>
            <li className="flex flex-row hover:bg-orangeComponent w-[70%] hover:py-2 rounded-xl items-center p-3 hover:cursor-pointer text-orangeComponent">
              <FaPeopleArrows className="w-[1.8rem] h-[1.8rem]" />
              <a className="text-2xl  text-orangeComponent font-poppins font-semibold ml-5 hover:text-white">
                Member
              </a>
            </li>
            <li className="flex flex-row hover:bg-orangeComponent w-[70%] hover:py-2 rounded-xl items-center p-3 hover:cursor-pointer text-orangeComponent">
              <FaBookReader className="w-[1.8rem] h-[1.8rem]" />
              <a className="text-2xl  text-orangeComponent font-poppins font-semibold ml-5 hover:text-white">
                Laporan
              </a>
            </li>
            <li className="flex flex-row hover:bg-orangeComponent w-[70%] hover:py-2 rounded-xl items-center p-3 hover:cursor-pointer text-orangeComponent">
              <FaShareSquare className="w-[1.8rem] h-[1.8rem]" />
              <a className="text-2xl  text-orangeComponent font-poppins font-semibold ml-5 hover:text-white">
                Keluar
              </a>
            </li>
          </ul>
          <div className="flex justify-center items-end h-[30rem] pb-10">
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
