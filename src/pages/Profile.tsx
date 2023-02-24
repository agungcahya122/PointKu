import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import { UserTypes } from "../utils/types/DataTypes";
import Swal from "../utils/Swal";

import { CustomInput } from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import avatarIcon from "../assets/avatarIcon.webp";
import SideNav from "../components/SideNav";
import Layout from "../components/Layout";

import { FaArrowCircleLeft, FaShoppingCart } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";

function Profile() {
  const [user, setUser] = useState<UserTypes>();
  const [loading, setLoading] = useState<boolean>(false);
  const [cookie, , removeCookie] = useCookies([
    "token",
    "id",
    "business_name",
    "email",
  ]);
  const checkToken = cookie.token;
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);
    axios
      .get(
        "https://virtserver.swaggerhub.com/CAPSTONE-Group1/sirloinPOSAPI/1.0.0/users",
        {
          headers: { Authorization: `Bearer ${checkToken}` },
        }
      )
      .then((user) => {
        const { data } = user.data;
        setUser(data);
      })
      .catch((err) => {
        MySwal.fire({
          title: "Error",
          text: err.response.data.message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  }

  function handleDeleteAccount() {
    MySwal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda tidak dapat memulihkan akun yang dihapus.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Ya, hapus akun!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            "https://virtserver.swaggerhub.com/CAPSTONE-Group1/sirloinPOSAPI/1.0.0/users",
            {
              headers: { Authorization: `Bearer ${checkToken}` },
            }
          )
          .then(() => {
            removeCookie("token");
            removeCookie("id");
            removeCookie("business_name");
            removeCookie("email");
            navigate("/");
          })
          .catch((err) => {
            MySwal.fire({
              title: "Error",
              text: err.response.data.message,
              showCancelButton: false,
            });
          });
      }
    });
  }
  return (
    <Layout>
      <div className="flex flex-row">
        <div className="flex w-[20%] min-h-screen">
          <SideNav />
        </div>
        <div className="flex w-[80%] min-h-screen">
          <div className="flex flex-col w-full overflow-hidden">
            <div className="flex flex-row h-[6rem] mt-10">
              <div className="flex-1 ">
                <h1 className="text-2xl font-poppins text-black font-bold mt-7 ml-6 tracking-[0.2rem]">
                  Selamat Datang, {user?.business_name}
                </h1>
                <p className=" text-gray-400 text-sm tracking-[0.2rem] mt-1 ml-6">
                  Temukan, yang kamu butuhkan
                </p>
              </div>
            </div>
            <div className="tracking-[0.2rem] font-bold flex flex-col items-center text-center">
              <img src={avatarIcon} alt="avatar" className="w-1/6 mt-10" />
              <br />
              <h1 className="text-color3 text-[28px] capitalize mt-5">
                {user?.business_name}
              </h1>
              <br />
              <p className="text-color4 mt-1 text-[16px] font-normal">
                {user?.email}
              </p>
              <br />
              <div className="flex justify-center mt-2 gap-2">
                <TfiLocationPin className="w-6 h-6" />
                <p className="text-color3 text-[18px]">{user?.address}</p>
              </div>
              <br />
              <div className="flex justify-center mt-2 gap-2">
                <IoCallOutline className="w-6 h-6" />
                <p className="text-color3 text-[18px]">{user?.phone_number}</p>
              </div>
              <div className="flex gap-12 mt-8">
                <Link to="/editProfile">
                  <CustomButton
                    id="btn-edit"
                    className="bg-orangeComponent h-10 w-40 text-white tracking-[0.2rem] rounded-lg"
                    label="Edit Profil"
                  />
                </Link>
                <CustomButton
                  id="btn-hapus"
                  onClick={handleDeleteAccount}
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
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [cookies, setCookies] = useCookies(["token"]);
  const checkToken = cookies.token;

  const [objSubmit, setObjSubmit] = useState<UserTypes>({});
  const [loading, setLoading] = useState<boolean>(false);

  const [namaToko, setNamaToko] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telepon, setTelepon] = useState<string>("");
  const [addres, setAddres] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);
    axios
      .get(
        "https://virtserver.swaggerhub.com/CAPSTONE-Group1/sirloinPOSAPI/1.0.0/users",
        {
          headers: { Authorization: `Bearer ${checkToken}` },
        }
      )
      .then((res) => {
        const { data, message } = res.data;

        setNamaToko(data.business_name);
        setEmail(data.email);
        setAddres(data.address);
        setTelepon(data.phone_number);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => setLoading(false));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    let key: keyof typeof objSubmit;
    for (key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }

    axios
      .put(
        "https://virtserver.swaggerhub.com/CAPSTONE-Group1/sirloinPOSAPI/1.0.0/users",
        formData,
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const { message } = res.data;

        MySwal.fire({
          title: "Edit Succes",
          text: message,
          showCancelButton: false,
          confirmButtonText: "Oke",
        }).then(() => {
          navigate("/profile");
        });
        setObjSubmit({});
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          title: "Edit Failed",
          text: data.message,
          showCancelButton: false,
        });
      })
      .finally(() => fetchData())
      .finally(() => setLoading(false));
  };

  const handleChange = (value: string, key: keyof typeof objSubmit) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <Layout>
      <div className="flex flex-row">
        <div className="flex w-[17rem] min-h-screen">
          <SideNav />
        </div>
        <div className="flex w-[80%] min-h-screen">
          <div className="flex flex-col w-full overflow-hidden ">
            <div className="flex flex-row h-[8rem] mt-10 ">
              <div className="flex w-[40%] mt-10">
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
              <form className="flex flex-row" onSubmit={(e) => handleSubmit(e)}>
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
                      className="input input-bordered w-10/12"
                      placeholder="Type here"
                      defaultValue={namaToko}
                      onChange={(e) =>
                        handleChange(e.target.value, "business_name")
                      }
                    />
                    <label className="label mt-8">
                      <span className="label-text text-lg text-black">
                        Email :
                      </span>
                    </label>
                    <CustomInput
                      id="input-nama"
                      type="email"
                      className="input input-bordered w-10/12 "
                      placeholder="Type here"
                      defaultValue={email}
                      onChange={(e) => handleChange(e.target.value, "email")}
                    />
                    <label className="label mt-8">
                      <span className="label-text text-lg text-black    ">
                        Password :
                      </span>
                    </label>
                    <CustomInput
                      id="input-nama"
                      type="password"
                      className="input input-bordered w-10/12"
                      placeholder="Type here"
                      defaultValue={"************"}
                      onChange={(e) => handleChange(e.target.value, "password")}
                    />
                  </div>

                  <CustomButton
                    id="btn-perbaruiTenant"
                    label="Perbarui Profil"
                    className="py-3 px-10 w-6/12 text-lg bg-orangeComponent text-white rounded-xl mt-10 hover:bg-orange-700 disabled:cursor-not-allowed disabled:bg-color3"
                    loading={loading}
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
                      className="input input-bordered w-10/12 "
                      placeholder="Type here"
                      defaultValue={telepon}
                      onChange={(e) =>
                        handleChange(e.target.value, "phone_number")
                      }
                    />
                    <label className="label mt-8">
                      <span className="label-text text-lg text-black">
                        Alamat
                      </span>
                    </label>
                    <textarea
                      id="input-nama"
                      className="input input-bordered w-10/12 h-[11rem]"
                      placeholder="Type here"
                      defaultValue={addres}
                      onChange={(e) => handleChange(e.target.value, "address")}
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export { Profile, EditProfile };
