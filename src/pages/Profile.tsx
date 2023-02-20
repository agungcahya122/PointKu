import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";

import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import avatar from "../assets/avataricon.webp";
import CustomButton from "../components/CustomButton";

function Profile() {
  return (
    <Layout>
      <div className="flex flex-row">
        <SideNav />
        <div className="flex flex-col w-full">
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
            <img src={avatar} alt="avatar" className="w-40" />
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
              <CustomButton
                className="bg-orangeComponent h-10 w-40 text-white tracking-[0.2rem] rounded-lg"
                label="Edit Profil"
              />
              <CustomButton
                className="bg-color3 h-10 w-40 text-white tracking-[0.2rem] rounded-lg"
                label="Hapus akun"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
