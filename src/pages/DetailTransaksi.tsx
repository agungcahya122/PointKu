import React, { useState } from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import product1 from "../assets/nik-IvREkzD580Q-unsplash.webp";
import CustomButton from "../components/CustomButton";

function CardTransaksi() {
  const [count, setCount] = useState(1);

  function addProduct() {
    setCount((prevState) => prevState + 1);
  }

  function decProduct() {
    setCount((count) => count - 1);
  }
  return (
    <>
      <div className="rounded-xl border mt-10 p-5  shadow-lg font-medium text-lg w-full">
        <div className="flex">
          <img
            src={product1}
            alt="produk"
            className="w-1/5 rounded-lg"
          />
          <div className="flex flex-col font-bold">
            <p className="pl-3">Nama produk</p>
            <div className="flex justify-between gap-52 border-b-2 border-gray-200">
              <p className="p-3">Jumlah Beli</p>
              <div className="flex">
                <CustomButton
                  id="btn-add"
                  label="+"
                  onClick={addProduct}
                  className="px-3 py-1 bg-orangeComponent text-white rounded-lg"
                />
                <p className="ml-3 text-xl text-black mt-1">
                  {count}
                </p>
                {count === 1 ? (
                  <CustomButton
                    id="btn-add"
                    label="-"
                    onClick={decProduct}
                    className="px-3 py-1 bg-slate-300 text-white rounded-lg ml-3"
                    disabled
                  />
                ) : (
                  <CustomButton
                    id="btn-add"
                    label="-"
                    onClick={decProduct}
                    className="px-3 py-1 bg-orangeComponent text-white rounded-lg ml-3"
                  />
                )}
              </div>
              <p>2 x 15.000</p>
            </div>
            <p className="self-end pt-3">
              Total Pembelian: 30.000
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function DetailTransaksi() {
  return (
    <Layout>
      <div className="flex flex-row">
        <SideNav />
        <div className="flex flex-col w-full">
          <div className="flex flex-row h-[8rem] mt-10">
            <div className="flex-1 px-12 ">
              <h1 className="text-2xl font-poppins text-black font-bold mt-7  tracking-[0.2rem]">
                | Detail Transaksi
              </h1>
              <br />
              <div className="flex justify-between ">
                <h1 className="underline font-bold text-lg">
                  Invoice
                </h1>
                <p>INV/2022-01-05/MKN/01</p>
              </div>
              <br />
              <div className="flex justify-between ">
                <h1 className="underline font-bold text-lg">
                  Nama Pembeli
                </h1>
                <p>Marinah Mari</p>
              </div>
              <br />
              <div className="flex justify-between ">
                <h1 className="underline font-bold text-lg">
                  Tanggal Pembelian
                </h1>
                <p>12 Januari 2023, 15:00 WIB</p>
              </div>
              <br />
              <h1 className="underline font-bold text-lg">
                Detail Produk
              </h1>
              <CardTransaksi />
              <h1 className="underline font-bold text-lg pt-12">
                Rincian Pembayaran
              </h1>
              <div className="flex justify-between border-b-2 border-gray-200 pt-6">
                <h1 className=" font-bold text-lg">
                  Metode Pembayaran
                </h1>
                <p>Tunai</p>
              </div>
              <div className="flex justify-between pt-6 ">
                <h1 className=" font-bold text-lg">
                  Total Harga(2 Barang)
                </h1>
                <p>Rp.60.000</p>
              </div>
              <div className="flex justify-between border-b-2 border-gray-200 pt-3 ">
                <h1 className=" font-bold text-lg">Diskon</h1>
                <p>-5.000</p>
              </div>
              <div className="flex justify-between pt-10 ">
                <h1 className=" font-bold text-2xl">
                  Total Harga(4 Barang)
                </h1>
                <p>Rp.60.000</p>
              </div>
              <br />
              <CustomButton
                id="btn-bayar"
                className="bg-orangeComponent h-14 w-60 text-white tracking-[0.2rem] rounded-lg"
                label="Bayar Sekarang"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DetailTransaksi;
