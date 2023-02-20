import React from "react";
import product1 from "../assets/nik-IvREkzD580Q-unsplash.webp";
import { Button } from "./InputGroup";

export default function Card() {
  return (
    <>
      <div className="card w-11/12 bg-bgCard ">
        <figure className="p-6">
          <img src={product1} alt="Shoes" className="rounded-xl shadow-lg" />
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="card-title text-black font-poppins font-bold -mt-7 text-2xl">
            Snack Mewah
          </h1>
          <h2 className="card-title text-black font-poppins font-bold text-2xl">
            $20
          </h2>
          <div className="card-actions">
            <Button
              id="btn-card"
              label="Tambah ke Keranjang"
              onClick={{}}
              className="px-8 rounded-xl text-white py-3 bg-orangeComponent mt-4 hover:bg-orange-900 "
            />
          </div>
          <p className="text-xl mt-4 font-semibold">Stok : 20</p>
        </div>
      </div>
    </>
  );
}