import React, { useState, useEffect, FC, useCallback } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import { ProductsTypes } from "../utils/types/DataTypes";
import Swal from "../utils/Swal";

import product1 from "../assets/nik-IvREkzD580Q-unsplash.webp";
import LogoMie from "../assets/addProduct.svg";

import CustomButton from "../components/CustomButton";
import SideNav from "../components/SideNav";
import Layout from "../components/Layout";
import Card from "../components/Card";

import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router";

interface CartProps {
  id?: number;
  price?: number;
  prodcut_name?: string;
  qty?: number;
  AddProduct?: () => void;
  DecProduct?: () => void;
}

const Home = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["token"]);
  const checkToken = cookies.token;
  const MySwal = withReactContent(Swal);

  const [products, setProducts] = useState<ProductsTypes>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);
    axios
      .get(
        `https://virtserver.swaggerhub.com/CAPSTONE-Group1/sirloinPOSAPI/1.0.0/products`,
        {
          headers: { Authorization: `Bearer ${checkToken}` },
        }
      )
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => setLoading(false));
  }

  const [cart, setCart] = useState<ProductsTypes[]>([]);

  const handleCart = (data: ProductsTypes) => {
    // console.log(data);
    let isPresent = false;
    cart.forEach((item) => {
      if (data.id === item.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      MySwal.fire({
        title: "Item is Already",
        text: "change your option",
        showCancelButton: false,
      });
      return;
    }
    setCart([...cart, data]);
  };

  // function handleCart(data: ProductsTypes) {
  //   const checkExist = localStorage.getItem("AddtoCart");
  //   if (checkExist) {
  //     let parseCart: ProductsTypes[] = JSON.parse(checkExist);
  //     parseCart.push(data);
  //     localStorage.setItem("AddtoCart", JSON.stringify(parseCart));
  //     // console.log(parseCart);
  //   } else {
  //     localStorage.setItem("AddtoCart", JSON.stringify([data]));
  //   }
  // }

  const [count, setCount] = useState([1, 1]);
  const [keranjang, setKeranjang] = useState<ProductsTypes[]>([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = useCallback(() => {
    // setLoading(true);
    const getProduct = localStorage.getItem("AddtoCart");
    if (getProduct) {
      setProducts(JSON.parse(getProduct));
      // console.log(JSON.parse(getProduct));
    }
    // setLoading(false);
  }, []);

  // function addProduct() {
  //   setCount((prevState) => prevState + 1);
  // }

  // function decProduct() {
  //   setCount((count) => count - 1);
  // }
  function addProduct(index: number) {
    count[index] = count[index]++;
    // setCount(count[index]);
  }

  function decProduct(index: number) {
    count[index] = count[index]--;
    // setCount((count) => count - 1);
  }

  // console.log(count);

  const [price, setPrice] = useState(0);

  function handlePrice() {
    let ans = 0;
    {
      cart.map((item) => {
        console;
      });
    }
  }

  useEffect(() => {
    handlePrice();
  }, []);

  {
    products.data?.map((item, index) => console.log(item.qty));
  }

  return (
    <Layout>
      <div className="flex flex-row">
        <div className="flex w-[20%] min-h-screen">
          <SideNav />
        </div>

        <div className="flex w-[60%] min-h-screen">
          <div className="flex flex-col w-full">
            <div className="flex flex-row h-[8rem] mt-10">
              <div className="flex-1 ">
                <h1 className="text-2xl font-poppins text-black font-bold mt-7 ml-8">
                  Selamat Datang, Aldo
                </h1>
                <p className="mt-3 text-gray-400 text-lg ml-8">
                  Temukan, yang kamu butuhkan
                </p>
                <p>{cart.length}</p>
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
                </div>
              </div>
            </div>
            <div className="w-full min-h-screen mt-10 ml-3">
              <div className="grid grid-cols-3 gap-2">
                {products.data?.map((data, index) => (
                  <Card
                    key={index}
                    id={data.id}
                    product_name={data.product_name}
                    stock={data.stock}
                    qty={data.qty}
                    price={data.price}
                    product_image={LogoMie}
                    onClickCart={() => handleCart(data)}
                  />
                ))}
              </div>
            </div>
            <CustomButton
              id="btn-loadMore"
              label="Lihat Lebih Banyak"
              className="bg-white border-2 border-orangeComponent rounded-xl py-3 mx-auto text-orangeComponent font-poppins font-semibold w-[30%] mt-10 hover:bg-orangeComponent hover:text-white hover:border-none"
            />
          </div>
        </div>

        <div className="flex w-[20%] min-h-screen">
          <div className="flex flex-col w-full min-h-screen shadow-lg">
            <div className="flex flex-row mt-20 justify-between">
              <h2 className="text-xl text-black font-poppins font-semibold ml-6">
                Keranjang
              </h2>
              <FaShoppingCart className="text-black w-[1.7rem] h-[1.7rem] mr-6 border-1 border-gray-500" />
            </div>
            <div className="mt-10">
              <>
                {cart.length === 0 ? (
                  <p className="p-5 text-color4 text-[18px]">
                    Keranjang Anda Masih Kosong
                  </p>
                ) : (
                  <>
                    {cart.map((data, index) => (
                      <CardKeranjang
                        key={data.id}
                        prodcut_name={data.product_name}
                        price={data.price}
                        qty={data.qty}
                        AddProduct={() => {
                          addProduct(index);
                        }}
                        DecProduct={() => {
                          decProduct(index);
                        }}
                      />
                    ))}
                  </>
                )}
              </>
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
                {/* <h1 className="ml-6 text-md mt-2">Total Pajak</h1> */}
                <hr className="w-10/12 border-2 border-slate-400 float-right mt-2" />
                <h1 className="ml-6 text-md mt-6 font-bold ">Jumlah Total</h1>
              </div>
              <div className="flex-1">
                <h1 className="ml-16 text-md mt-9 text-black font-semibold">
                  $20
                </h1>
                <h1 className="ml-16 text-md mt-2 text-black font-semibold">
                  -$5
                </h1>
                {/* <h1 className="ml-16 text-md mt-2 text-black font-semibold">-$5</h1> */}
                <hr className="w-10/12 border-2  border-slate-400 float-left mt-2" />
                <h1 className="ml-16 text-md mt-6 text-black font-bold">$10</h1>
              </div>
            </div>

            <div className="form-control w-10/12 mx-auto mt-10">
              <label className="label">
                <span className="label-text text-black">Metode Pembayaran</span>
              </label>
              <select
                defaultValue={"DEFAULT"}
                className="select select-bordered bg-bgCard text-black"
              >
                <option value="DEFAULT" disabled>
                  Pilih Salah Satu
                </option>
                <option value={"tunai"}>Tunai</option>
                <option value={"Bank"}>ATM / Bank Transfer</option>
                <option value={"qris"}>QRIS</option>
              </select>
            </div>
            <div className="mx-auto mt-10">
              <CustomButton
                id="btn-continuePayment"
                label="Lanjutkan Pembayaran"
                className="py-3 bg-orangeComponent text-white px-6 rounded-2xl hover:bg-orange-700"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const CardKeranjang: FC<CartProps> = ({
  id,
  prodcut_name,
  price,
  qty,
  AddProduct,
  DecProduct,
}) => {
  // const [count, setCount] = useState<number>(1);

  // function addProduct() {
  //   setCount((prevState) => prevState + 1);
  // }

  // function decProduct() {
  //   setCount((count) => count - 1);
  // }
  return (
    <>
      <div className="flex flex-row h-[6rem] items-center justify-center mt-8 p-3 w-[90%] bg-bgCard mx-auto rounded-xl">
        <div className=" w-[30%]">
          <img src={LogoMie} className="rounded-lg shadow-md" />
        </div>
        <div className=" w-[70%] ">
          <h1 className="text-lgtext-black font-poppins font-semibold ml-3">
            {prodcut_name}
          </h1>
          <div className="flex flex-row justify-between">
            <h2 className="text-lg text-black mt-2 ml-3">{`Rp.${price}`}</h2>
            <div className="flex flex-row mr-2 mt-2">
              <CustomButton
                id="btn-add"
                label="+"
                onClick={AddProduct}
                className="text-white bg-orangeComponent h-[1.5rem] px-2 rounded-lg mr-2"
              />
              <p className=" text-md text-black ">{qty}</p>
              {qty === 1 ? (
                <CustomButton
                  id="btn-add"
                  label="-"
                  onClick={DecProduct}
                  className="text-white bg-orangeComponent h-[1.5rem] px-2 rounded-lg ml-2"
                  disabled
                />
              ) : (
                <CustomButton
                  id="btn-add"
                  label="-"
                  onClick={DecProduct}
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
