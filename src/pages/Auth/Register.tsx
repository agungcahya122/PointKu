import React, { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import {
  InputIcon,
  TextArea,
} from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import logo from "../../assets/sales.webp";
import imagelogin from "../../assets/imag-logo.webp";

const Register = () => {
  return (
    <div className="flex flex-row w-full h-screen bg-white  justify-around">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="flex flex-row items-center">
          <img src={logo} alt="PointKu" className="w-20" />
          <h1 className="text-orangeComponent font-bold tracking-[0.2rem] text-[2rem]">
            POINTKU
          </h1>
        </div>
        <img
          src={imagelogin}
          alt="PointKu"
          className="w-[25rem] pt-4"
        />
        <h1 className="text-orangeComponent font-bold tracking-[0.3rem] text-[2rem]">
          Daftar
        </h1>
      </div>

      <div className="text-color1 w-1/2 flex flex-col justify-center items-center">
        <div className=" bg-orangeComponent flex flex-col  justify-center items-center  rounded-3xl w-[25rem] h-[30rem]  ">
          <form>
            <p>Nama Bisnis/Toko</p>
            <InputIcon
              id="input-toko"
              type="text"
              placeholder="Nama toko"
              className="w-[20rem] bg-white rounded-lg h-10 pl-3 text-color3"
            />
            <p className="pt-2">Email</p>
            <InputIcon
              id="input-email"
              type="email"
              placeholder="Email"
              className="w-[20rem] bg-white rounded-lg h-10 pl-3 text-color3"
            />
            <p className="pt-2">Password</p>
            <InputIcon
              id="input-Password"
              type="password"
              placeholder="Password"
              className="w-[20rem] bg-white rounded-lg h-10 pl-3 text-color3"
            />
            <p className="pt-2">No.Telepon</p>
            <InputIcon
              id="input-telepon"
              type="text"
              placeholder="081234566"
              className="w-[20rem] bg-white rounded-lg h-10 pl-3 text-color3"
            />
            <p className="pt-2">Alamat</p>
            <TextArea
              id="input-alamat"
              placeholder="Alamat"
              className="w-[20rem] bg-white rounded-lg h-20  pl-3 text-color3"
            />
          </form>
        </div>
        <br />
        <CustomButton
          id="btn-Daftar"
          label="Daftar"
          className="bg-orangeComponent w-[23rem] h-10 rounded-lg"
        />
        <br />
        <div className="flex gap-4 text-color3">
          <p>Sudah punya akun?</p>
          <p className="underline cursor-pointer">Masuk</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
