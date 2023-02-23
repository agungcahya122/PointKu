import React, { useState, useEffect, FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import { useCookies } from "react-cookie";
import moment from "moment";
import axios from "axios";

import Swal from "../utils/Swal";
import { ProductsTypes, transactionType } from "../utils/types/DataTypes";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import product1 from "../assets/nik-IvREkzD580Q-unsplash.webp";
import CustomButton from "../components/CustomButton";
import localStorage from "redux-persist/es/storage";
import productImage from "../assets/addProduct.svg";

function DetailTransaksi() {
  const [datas, setDatas] = useState<transactionType>();
  const { transaction_id } = useParams();
  const [total_quantity, setTotal_quantity] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [cookies, setCookies] = useCookies(["token"]);
  const checkToken = cookies.token;
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [cart, setCart] = useState<ProductsTypes[]>([]);
  const [summary, setSummary] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);

  useEffect(() => {
    fetchData();
  }, [refresh]);

  function fetchData() {
    axios
      .get(
        `https://virtserver.swaggerhub.com/CAPSTONE-Group1/sirloinPOSAPI/1.0.0/transactions/1`,
        {
          headers: { Authorization: `Bearer ${checkToken}` },
        }
      )
      .then((customer) => {
        const { data } = customer.data;
        setDatas(data);
        let sum = 0;
        data.TransactionProductRes.forEach((item: any) => {
          sum += item.quantity;
        });
        setTotal_quantity(sum);
      })
      .catch((error) => {
        MySwal.fire({
          title: "Gagal",
          text: error.response.data.message,
          showCancelButton: false,
        });
      });
  }

  function handleBayar() {
    MySwal.fire({
      title: "Pembayaran Berhasil",
      showCancelButton: false,
    });
    navigate("/home");
  }

  async function loadDataStorage() {
    const getData = await localStorage.getItem("keranjang");
    const cart = JSON.parse(getData || "[]");
    setCart(cart);

    const getSumary = await localStorage.getItem("summary");
    setSummary(JSON.parse(getSumary || ""));

    const getDiscount = await localStorage.getItem("discount");
    setDiscount(JSON.parse(getDiscount || ""));
    console.log(cart);
  }

  useEffect(() => {
    loadDataStorage();
  }, []);

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
                <h1 className="underline font-bold text-lg">Invoice</h1>
                <p>INV/MPL/{datas?.id}</p>
              </div>
              <br />
              <div className="flex justify-between ">
                <h1 className="underline font-bold text-lg">Nama Pembeli</h1>
                <p>{datas?.customer_name}</p>
              </div>
              <br />
              <div className="flex justify-between ">
                <h1 className="underline font-bold text-lg">
                  Tanggal Pembelian
                </h1>
                <p>
                  {moment(datas?.created_at).format("DD MMMM YYYY h:mm:ss")}
                </p>
              </div>
              <br />
              <h1 className="underline font-bold text-lg">Detail Produk</h1>

              {cart.map((item) => {
                return (
                  <>
                    <div className="rounded-xl border mt-10 p-5  shadow-lg font-medium text-lg w-full">
                      <div className="flex">
                        <img
                          src={productImage}
                          alt="produk"
                          className="w-1/5 rounded-lg"
                        />
                        <div className="flex flex-col font-bold">
                          <p className="pl-3">{item.product_name}</p>
                          <div className="flex justify-between gap-[34rem] border-b-2 border-gray-200">
                            <p className="p-3">Jumlah Beli</p>
                            <p>
                              {item.qty} x Rp.{" "}
                              {item.price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </p>
                          </div>
                          <p className="self-end pt-3">
                            Total Pembelian : Rp.{" "}
                            {item.price *
                              item.qty
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}

              <h1 className="underline font-bold text-lg pt-12">
                Rincian Pembayaran
              </h1>
              <div className="flex justify-between border-b-2 border-gray-200 pt-6">
                <h1 className=" font-bold text-lg">Metode Pembayaran</h1>
                <p>Tunai</p>
              </div>
              <div className="flex justify-between pt-6 ">
                <h1 className=" font-bold text-lg">Total Harga(2 Barang)</h1>
                <p>Rp.{summary},-</p>
              </div>
              <div className="flex justify-between border-b-2 border-gray-200 pt-3 ">
                <h1 className=" font-bold text-lg">Diskon</h1>
                <p>Rp.{discount}, -</p>
              </div>
              <div className="flex justify-between pt-10 ">
                <h1 className=" font-bold text-2xl">Total Harga(4 Barang)</h1>
                <p>Rp.{summary - discount},-</p>
              </div>
              <br />
              <CustomButton
                id="btn-bayar"
                className="bg-orangeComponent h-14 w-60 text-white tracking-[0.2rem] rounded-lg"
                label="Bayar Sekarang"
                onClick={handleBayar}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DetailTransaksi;
