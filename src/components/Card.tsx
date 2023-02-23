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
  qty?: number;
  onClickCart?: () => void;
}

const Card: FC<CardProps> = ({
  id,
  product_name,
  stock,
  price,
  product_image,
  qty,
  onClickCart,
}) => {
  return (
    <>
      <div className="card w-11/12 bg-bgCard shadow-[0px_1px_2px_0px_rgba(69,69,69,0.5)]">
        <figure className="p-4">
          <img
            src={product_image}
            alt="logo.svg"
            className="rounded-xl shadow-lg"
          />
        </figure>

        <div className="card-body items-center text-center p-2">
          <h1 className="card-title text-color3 capitalize font-bold text-[20px]">
            {product_name}
          </h1>
          <h2 className="card-title text-color3 font-medium text-[18px] -mt-1">{`Rp.${price}`}</h2>
          <div className="card-actions">
            <CustomButton
              id="btn-card"
              label="Tambah ke Keranjang"
              className="px-4 mt-2 rounded-xl text-[16px] font-medium text-color1 py-2 bg-orangeComponent hover:bg-orange-600"
              onClick={onClickCart}
            />
          </div>
          <p className="text-[16px] text-color4 mt-1 pb-4 font-semibold">{`Stok : ${stock}`}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
