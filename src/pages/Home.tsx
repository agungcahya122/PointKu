import React, { useState, useEffect, FC, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import { ProductsTypes } from "../utils/types/DataTypes";
import Swal from "../utils/Swal";
import { Link } from "react-router-dom";

import product1 from "../assets/nik-IvREkzD580Q-unsplash.webp";
import LogoMie from "../assets/addProduct.svg";

import CustomButton from "../components/CustomButton";
import SideNav from "../components/SideNav";
import Layout from "../components/Layout";
import Card from "../components/Card";

import { FaShoppingCart } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";

interface CartProps {
  id?: number;
  price?: number;
  prodcut_name?: string;
  qty?: number;
  AddProduct?: () => void;
  DecProduct?: () => void;
  DelProduct?: () => void;
}

const Home = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["token"]);
  const checkToken = cookies.token;
  const MySwal = withReactContent(Swal);
  const { transaction_id } = useParams();

  const [subPrice, setSubPrice] = useState(0);
  const [products, setProducts] = useState<ProductsTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [summary, setSummary] = useState({
    customer_id: -1,
    sub_total: 0,
    discount: 0,
    total: 0,
  });
  const [memberId, setMemberId] = useState<number | null>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<ProductsTypes[]>([]);

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
        setProducts(res.data.data);
      })

      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => setLoading(false));
  }

  const [cart, setCart] = useState<ProductsTypes[]>([]);

  const checkMemberId = () => {
    axios
      .get(
        `https://virtserver.swaggerhub.com/CAPSTONE-Group1/sirloinPOSAPI/1.0.0/customers`
      )
      .then((res) => {
        const foundCustomer = res.data.data.find(
          (customer: { id: number }) => customer.id === memberId
        );
        if (foundCustomer) {
          setSummary((prevSummary) => ({
            ...prevSummary,
            discount: 1000,
          }));
        }
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  useEffect(() => {
    const totalPrice = subPrice - summary.discount;
    setSummary((prevSummary) => ({
      ...prevSummary,
      total: totalPrice,
    }));
    localStorage.setItem("summary", JSON.stringify(totalPrice));
    localStorage.setItem("discount", JSON.stringify(summary.discount));
  }, [subPrice, summary.discount]);

  const handleCart = (data: ProductsTypes) => {
    let isPresent = false;
    const updatedCart = cart.map((item) => {
      if (data.id === item.id) {
        isPresent = true;
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });

    if (!isPresent) {
      data.qty = 1;
      updatedCart.push(data);
    }

    setCart(updatedCart);
    localStorage.setItem("keranjang", JSON.stringify(updatedCart));
  };

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => {
      ans += item.qty * item.price;
    });
    setSubPrice(ans);
    localStorage.setItem("subPrice", JSON.stringify(ans));
  };

  useEffect(() => {
    handlePrice();
  });

  const handleRemove = (id: number) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  const handleAdd = (data: ProductsTypes, index: any) => {
    const updatedCart = cart.map((item, idx) => {
      if (index === idx) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDec = (data: ProductsTypes, index: any) => {
    const updatedCart = cart.map((item, idx) => {
      if (index === idx) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const filterProducts = useCallback(() => {
    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchText]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  return (
    <Layout>
      <div className="flex flex-row">
        <div className="flex w-[17rem] min-h-screen ">
          <SideNav />
        </div>

        <div className="flex w-[60%] min-h-screen">
          <div className="flex flex-col w-full">
            <div className="flex flex-row h-[8rem] mt-10">
              <div className="flex-1 ">
                <h1 className="text-[28px] font-poppins text-black font-bold mt-7 ml-8">
                  Selamat Datang,
                </h1>
                <p className="mt-3 text-gray-400 text-lg ml-8">
                  Temukan yang kamu butuhkan disini.
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
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full min-h-screen mt-12 ml-6">
              <div className="grid grid-cols-3 gap-2">

                {searchText !== ""
                  ? filteredProducts.map((data, index) => (
                    <Card
                      key={data.id}
                      id={data.id}
                      product_name={data.product_name}
                      stock={data.stock}
                      price={data.price}
                      product_image={LogoMie}
                      onClickCart={() => handleCart(data)}
                    />
                  ))
                  : products.map((data, index) => (
                    <Card
                      key={data.id}
                      id={data.id}
                      product_name={data.product_name}
                      stock={data.stock}
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
                        price={data.price * data.qty}
                        qty={data.qty}
                        AddProduct={() => handleAdd(data, index)}
                        DecProduct={() => handleDec(data, index)}
                        DelProduct={() => {
                          handleRemove(data.id);
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
                  onChange={(e) => setMemberId(parseInt(e.target.value))}
                />
                <span
                  className="bg-orangeComponent text-white"
                  onClick={checkMemberId}
                >
                  Member
                </span>
              </label>
            </div>

            <div className="w-11/12 py-10 bg-gray-200 rounded-xl mt-10 mx-auto flex flex-row">
              <div className="flex-1 text-[16px]">
                <h1 className="ml-6 ">Sub Total</h1>
                <h1 className="ml-6 mt-2">Diskon</h1>
                <hr className="w-10/12 border-2 border-slate-400 float-right mt-4" />
                <h1 className="ml-6  mt-6 font-bold ">Jumlah Total</h1>
              </div>

              <div className="flex-1 text-[16px]">
                <h1 className="ml-8 text-color3 font-semibold">
                  {`Rp.${subPrice}`}
                </h1>
                <h1 className="ml-8  mt-2 text-color3 font-semibold">
                  {`Rp.${summary.discount}`}
                </h1>
                <hr className="w-10/12 border-2  border-slate-400 float-left mt-4" />
                <h1 className="ml-8 mt-9 text-color3 font-bold">
                  {`Rp.${summary.total}`}
                </h1>
              </div>
            </div>

            <div className="mx-auto mt-10">
              <Link to="/detail-transaksi">
                <CustomButton
                  id="btn-continuePayment"
                  label="Lanjutkan Pembayaran"
                  className="py-3 bg-orangeComponent text-white px-6 rounded-2xl hover:bg-orange-700"
                />
              </Link>
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
  DelProduct,
}) => {
  useEffect(() => {
    localStorage.setItem("price", JSON.stringify(price));
  }, [price]);

  return (
    <>
      <div className="flex flex-row h-[6rem] items-center justify-center mt-8 p-3 w-[90%] bg-bgCard mx-auto rounded-xl">
        <div className=" w-[30%]">
          <img src={LogoMie} className="rounded-lg shadow-md" />
        </div>
        <div className=" w-[70%] ml-2">
          <h1 className="text-[16px] capitalize text-color3 font-semibold">
            {prodcut_name}
          </h1>
          <div className="flex flex-row justify-between mt-1 items-center">
            <h2 className="text-[18px] font-semibold text-color3 mt-1 mr-2 align- bottom">{`Rp.${price}`}</h2>
            <div className="flex flex-row">
              <CustomButton
                id="btn-add"
                label="+"
                onClick={AddProduct}
                className="text-white bg-orangeComponent px-2 rounded-lg mr-2"
              />
              <p className=" text-[16px] text-color3 ">{qty}</p>
              {qty === 1 ? (
                <CustomButton
                  id="btn-add"
                  label="-"
                  onClick={DelProduct}
                  className="text-white bg-orangeComponent h-[1.5rem] px-2 rounded-lg ml-2"
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
          <div className="flex items-center mt-1 gap-1">
            <IoTrashOutline className="text-red-500" />
            <p className="text-[14px] text-red-500" onClick={DelProduct}>
              delete
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
