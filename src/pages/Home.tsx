import Card from "../components/Card";

import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

import product1 from "../assets/nik-IvREkzD580Q-unsplash.webp";
import CustomButton from "../components/CustomButton";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-row">
        <div className="flex w-[20%] min-h-screen">
          <SideNav />
        </div>
        <div className="flex w-[60%] min-h-screen">
          <Content />
        </div>
        <div className="flex w-[20%] min-h-screen">
          <Keranjang />
        </div>
      </div>
    </Layout>
  );
};

const Content = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-row h-[8rem] mt-10">
          <div className="flex-1 ">
            <h1 className="text-2xl font-poppins text-black font-bold mt-7 ml-8">
              Selamat Datang, Aldo
            </h1>
            <p className="mt-3 text-gray-400 text-lg ml-8">
              Temukan, yang kamu butuhkan
            </p>
          </div>
          <div className="flex-1">
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
                  className="input bg-slate-200  placeholder-black w-[65%]"
                />
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-screen mt-10 ml-3">
          <div className="grid grid-cols-3 gap-2">
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div className="mt-10">
              <Card />
            </div>
            <div className="mt-10">
              <Card />
            </div>
            <div className="mt-10">
              <Card />
            </div>
          </div>
        </div>
        <CustomButton
          id="btn-loadMore"
          label="Lihat Lebih Banyak"
          onClick={{}}
          className="bg-white border-2 border-orangeComponent rounded-xl py-3 mx-auto text-orangeComponent font-poppins font-semibold w-[30%] mt-10 hover:bg-orangeComponent hover:text-white hover:border-none"
        />
      </div>
    </>
  );
};

const Keranjang = () => {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen shadow-lg">
        <div className="flex flex-row mt-20 justify-between">
          <h2 className="text-xl text-black font-poppins font-semibold ml-6">
            Keranjang
          </h2>
          <FaShoppingCart className="text-black w-[1.7rem] h-[1.7rem] mr-6 border-1 border-gray-500" />
        </div>
        <div className="mt-10">
          <CardKeranjang />
          <CardKeranjang />
          <CardKeranjang />
        </div>
        <div className="form-control ml-5 mt-10">
          <label className="input-group ">
            <input
              type="text"
              placeholder="ID. Member"
              className="input input-bordered border-1 bg-white w-6/12 "
            />
            <span className="bg-orangeComponent text-white">Member</span>
          </label>
        </div>
        <div className="w-11/12 h-[15rem] bg-gray-200 mx-auto rounded-xl mt-10 flex flex-row">
          <div className="flex-1 ">
            <h1 className="ml-6 text-md mt-9">Subtotal</h1>
            <h1 className="ml-6 text-md mt-2">Diskon</h1>
            <h1 className="ml-6 text-md mt-2">Total Pajak</h1>
            <hr className="w-10/12 border-2 border-slate-400 float-right mt-2" />
            <h1 className="ml-6 text-md mt-6 font-bold ">Total Jumlah</h1>
          </div>
          <div className="flex-1">
            <h1 className="ml-16 text-md mt-9 text-black font-semibold">$20</h1>
            <h1 className="ml-16 text-md mt-2 text-black font-semibold">-$5</h1>
            <h1 className="ml-16 text-md mt-2 text-black font-semibold">-$5</h1>
            <hr className="w-10/12 border-2  border-slate-400 float-left mt-2" />
            <h1 className="ml-16 text-md mt-6 text-black font-bold">$10</h1>
          </div>
        </div>

        <div className="form-control w-10/12 mx-auto mt-10">
          <label className="label">
            <span className="label-text text-black">Metode Pembayaran</span>
          </label>
          <select className="select select-bordered bg-bgCard text-black">
            <option disabled selected>
              Pilih Salah Satu
            </option>
            <option>Tunai</option>
            <option>ATM / Bank Transfer</option>
            <option>QRIS</option>
          </select>
        </div>
        <div className="mx-auto mt-10">
          <CustomButton
            id="btn-continuePayment"
            label="Lanjutkan Pembayaran"
            onClick={{}}
            className="py-3 bg-orangeComponent text-white px-6 rounded-2xl hover:bg-orange-700"
          />
        </div>
      </div>
    </>
  );
};

const CardKeranjang = () => {
  const [count, setCount] = useState(1);

  function addProduct() {
    setCount((prevState) => prevState + 1);
  }

  function decProduct() {
    setCount((count) => count - 1);
  }
  return (
    <>
      <div className="flex flex-row h-[6rem] items-center justify-center mt-8 p-3 w-[90%] bg-bgCard mx-auto rounded-xl">
        <div className=" w-[30%]">
          <img src={product1} className="rounded-lg shadow-md" />
        </div>
        <div className=" w-[70%] ">
          <h1 className="text-lgtext-black font-poppins font-semibold ml-3">
            Produk 1
          </h1>
          <div className="flex flex-row justify-between">
            <h2 className="text-lg text-black mt-2 ml-3">$20</h2>
            <div className="flex flex-row mr-2 mt-2">
              <CustomButton
                id="btn-add"
                label="+"
                onClick={addProduct}
                className="text-white bg-orangeComponent h-[1.5rem] px-2 rounded-lg mr-2"
              />
              <p className=" text-md       text-black ">{count}</p>
              {count === 1 ? (
                <CustomButton
                  id="btn-add"
                  label="-"
                  onClick={decProduct}
                  className="text-white bg-orangeComponent h-[1.5rem] px-2 rounded-lg ml-2"
                  disabled
                />
              ) : (
                <CustomButton
                  id="btn-add"
                  label="-"
                  onClick={decProduct}
                  className="text-white bg-orangeComponent h-[1.5rem] px-2 rounded-lg ml-2"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
