import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { InputIcon } from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import logo from "../../assets/sales.webp";
import imagelogin from "../../assets/imag-logo.webp";
import Swal from "../../utils/Swal";
import axios from "axios";
import { handleAuth } from "../../utils/redux/reducer/reducer";
import { useCookies } from "react-cookie";

const Login = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, setCookie] = useCookies(["token"]);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const body = {
      email,
      password,
    };

    axios
      .post(
        "https://virtserver.swaggerhub.com/CAPSTONE-Group1/sirloinPOSAPI/1.0.0/login",
        body
      )
      .then((res) => {
        const { data, message } = res.data;

        setCookie("token", res.data.data.token, { path: "/" });

        dispatch(handleAuth(true));

        MySwal.fire({
          title: "Berhasil Login",
          text: message,
          showCancelButton: false,
        });
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
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
          Masuk
        </h1>
      </div>

      <div className="text-color1 w-1/2 flex flex-col justify-center items-center">
        <div className=" bg-orangeComponent flex flex-col  justify-center items-center  rounded-3xl w-[25rem] h-[15rem] ">
          <form>
            <p>Email</p>
            <InputIcon
              id="input-email"
              type="email"
              placeholder="Email"
              className="w-[20rem] bg-white rounded-lg h-10 pl-3 text-color3"
              onChange={(e) => setEmail(e.target.value)}
            />

            <p className="pt-4">Password</p>
            <InputIcon
              id="input-Password"
              type="password"
              placeholder="Password"
              className="w-[20rem] bg-white rounded-lg h-10 pl-3 text-color3"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
        </div>
        <br />
        <CustomButton
          id="btn-masuk"
          label="Masuk"
          className="bg-orangeComponent w-[23rem] h-10 rounded-lg disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer"
          loading={loading || disabled}
          onClick={handleLogin}
        />
        <br />
        <div className="flex gap-4 text-color3">
          <p>Belum punya akun?</p>
          <Link to="/register">
            <p className="underline cursor-pointer">Daftar</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
