import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import { InputIcon, TextArea } from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import logo from "../../assets/sales.webp";
import imagelogin from "../../assets/imag-logo.webp";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "../../utils/Swal";

const MySwal = withReactContent(Swal);

const Register = () => {
  const [namaToko, setNamaToko] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [telepon, setTelepon] = useState<string>("0");
  const [alamat, setAlamat] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [dataUser, setDataUser] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (namaToko && email && password && telepon && alamat) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [namaToko, email, password, telepon, alamat]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    const body = {
      namaToko,
      email,
      password,
      telepon,
      alamat,
    };

    axios
      .post(
        "https://virtserver.swaggerhub.com/CAPSTONE-Group1/sirloinPOSAPI/1.0.0/register",
        body
      )
      .then((res) => {
        const { message } = res.data;
        localStorage.setItem("data", JSON.stringify(body));
        setDataUser(JSON.parse(localStorage.getItem("data") || ""));
        console.log(body);

        MySwal.fire({
          title: "Berhasil Mendaftar",
          text: message,
          showCancelButton: false,
        });

        navigate("/");
      })
      .catch((err) => {
        const { message } = err.response.data;
        MySwal.fire({
          title: "Gagal Mendaftar",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-row w-full h-screen bg-white  justify-around">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="flex flex-row items-center">
          <img src={logo} alt="PointKu" className="w-20" />
          <h1 className="text-orangeComponent font-bold tracking-[0.2rem] text-[2rem]">
            POINTKU
          </h1>
        </div>
        <img src={imagelogin} alt="PointKu" className="w-[25rem] pt-4" />
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
              onChange={(e) => setNamaToko(e.target.value)}
            />
            <p className="pt-2">Email</p>
            <InputIcon
              id="input-email"
              type="email"
              placeholder="Email"
              className="w-[20rem] bg-white rounded-lg h-10 pl-3 text-color3"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="pt-2">Password</p>
            <InputIcon
              id="input-Password"
              type="password"
              placeholder="Password"
              className="w-[20rem] bg-white rounded-lg h-10 pl-3 text-color3"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="pt-2">No.Telepon</p>
            <InputIcon
              id="input-telepon"
              type="number"
              placeholder="081234566"
              className="w-[20rem] bg-white rounded-lg h-10 pl-3 text-color3"
              onChange={(e) => setTelepon(e.target.value)}
            />
            <p className="pt-2">Alamat</p>
            <TextArea
              id="input-alamat"
              placeholder="Alamat"
              className="w-[20rem] bg-white rounded-lg h-20  pl-3 text-color3"
              onChange={(e) => setAlamat(e.target.value)}
            />
          </form>
        </div>
        <br />

        <CustomButton
          id="btn-Daftar"
          label="Daftar"
          className="bg-orangeComponent w-[23rem] h-10 rounded-lg disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer"
          onClick={handleSubmit}
          loading={loading || disabled}
        />
        <br />
        <div className="flex gap-4 text-color3">
          <p>Sudah punya akun?</p>
          <Link to="/">
            <p className="underline cursor-pointer">Masuk</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
