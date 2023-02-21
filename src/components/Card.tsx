import React, { FC } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

import product1 from "../assets/nik-IvREkzD580Q-unsplash.webp";
import CustomButton from "./CustomButton";

interface CardProps {
  id?: number;
  upc?: string;
  category?: string;
  product_name?: string;
  minimum_stock?: number;
  stock?: number;
  buying_price?: number;
  price?: number;
  product_image?: string;
  supplier?: string;
}

const Card: FC<CardProps> = ({
  id,
  product_name,
  stock,
  price,
  product_image,
}) => {
  const [cookies, setCookies] = useCookies(["token"]);
  const checkToken = cookies.token;

  function onClickCart() {
    console.log("add to cart");
  }

  return (
    <>
      <div className="card w-11/12 bg-bgCard ">
        <figure className="p-6">
          <img
            src={product_image}
            alt="logo.svg"
            className="rounded-xl shadow-lg"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="card-title text-black font-poppins font-bold -mt-7 text-xl">
            {product_name}
          </h1>
          <h2 className="card-title text-black font-poppins font-bold text-xl">
            {`Rp.${price}`}
          </h2>
          <div className="card-actions">
            <CustomButton
              id="btn-card"
              label="Tambah ke Keranjang"
              className="px-8 rounded-xl text-white py-3 bg-orangeComponent mt-4 hover:bg-orange-900 "
            />
          </div>
          <p className="text-lg text-slate-400 mt-4 font-semibold">{`Stok : ${stock}`}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
