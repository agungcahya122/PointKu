import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import { productData, ProductsTypes } from "../utils/types/DataTypes";
import Swal from "../utils/Swal";

import { InputIcon } from "../components/CustomInput";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";

import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

const MySwal = withReactContent(Swal);

const ListProduct = () => {
  const { product_id } = useParams();
  const navigate = useNavigate();
  const [cookie, removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ProductsTypes[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<ProductsTypes[]>([]);

  function onClickEdit() {
    navigate(`/editProduct/${product_id}`);
  }

  const fetchData = () => {
    axios
      .get(
        "https://virtserver.swaggerhub.com/CAPSTONE-Group1/sirloinPOSAPI/1.0.0/products",
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
          },
          params: {},
        }
      )
      .then((res) => {
        const { data } = res.data;
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteProduct = async (data: ProductsTypes[]) => {
    axios
      .delete(
        `https://virtserver.swaggerhub.com/CAPSTONE-Group1/sirloinPOSAPI/1.0.0/products/${product_id}`,
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
          },
        }
      )
      .then((res) => {
        const { data, message } = res.data;
        setData(data);

        MySwal.fire({
          title: "Data Produk Berhasil Dihapus",
          text: message,
          showCancelButton: false,
        });
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filterList = useCallback(() => {
    const filtered = data.filter((item) =>
      item.product_name.toLocaleLowerCase().includes(search.toLowerCase())
    );
    setFilter(filtered);
  }, [data, search]);

  useEffect(() => {
    filterList();
  }, [filterList]);

  return (
    <Layout>
      <div className="grid grid-cols-12">
        <div className="col-span-3 ">
          <SideNav />
        </div>
        <div className="col-span-9 -ml-10 pr-10 pt-16">
          {/* <div className="flex justify-center ml-auto items-center cursor-pointer w-12 h-12 rounded-xl border-2 bg-white shadow-sm border-[rgba(159,159,159,0.5)]">
            <MdOutlineShoppingCart className="w-6 h-6 text-color3" />
          </div> */}
          <p className="text-[36px] text-color3 font-semibold tracking-widest mt-8">
            Daftar Produk
          </p>

          <div className="flex flex-row justify-center items-center mt-10 ">
            <div className="flex bg-[#F8F5F5] rounded-full w-[20rem] py-2 px-4 gap-2">
              <InputIcon
                id="input-search"
                type="search"
                placeholder="Mencari Produk . . . . . ."
                className="input input-border w-full max-w-full h-8 px-3 rounded-full placeholder-color3 bg-[#F8F5F5] text-color3 text-[16px] tracking-wider font-medium"
                onChange={(e) => setSearch(e.target.value)}
              />
              <MdSearch className="w-8 h-8 text-color3" />
            </div>
            <div
              className="py-2 mt-0 px-4 bg-orangeComponent h-10 text-[16px] font-medium text-color1 rounded-xl text-center ml-auto hover:cursor-pointer"
              onClick={() => navigate("/addProduct")}
            >
              Tambah Produk
            </div>
          </div>

          <div className="overflow-auto mt-12">
            <table className="table w-full ">
              <thead className="">
                <tr>
                  <th className="bg-orangeComponent text-color1 text-[14px] w-1/12 text-center">
                    No
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] w-2/12">
                    Nama Product
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] w-3/12 text-center">
                    Kategori
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] w-2/12">
                    Harga Jual
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] w-1/12 text-center">
                    Stock
                  </th>
                  <th className="bg-orangeComponent text-color1 text-[14px] text-center">
                    Pilihan
                  </th>
                </tr>
              </thead>
              <tbody className="border-x-2 border-[rgba(159,159,159,0.2)]">
                <>
                  {search !== ""
                    ? filter.map((item, index) => (
                        <tr key={item.id}>
                          <td className="text-center">{index + 1}</td>
                          <td>{item.product_name}</td>
                          <td className="text-center">{item.category}</td>
                          <td>{item.price}</td>
                          <td className="text-center">{item.stock}</td>
                          <td className="flex justify-center gap-5">
                            <div className="flex flex-row items-center justify-center gap-1 text-[#DA5C53] hover:cursor-pointer">
                              <IoTrashOutline
                                className="w-5 h-5"
                                onClick={() => handleDeleteProduct(data)}
                              />
                              <p
                                className="text-[14px] pt-1"
                                onClick={() => handleDeleteProduct(data)}
                              >
                                Hapus
                              </p>
                            </div>

                            <div className="flex flex-row items-center justify-center gap-1 text-[#306D75] hover:cursor-pointer">
                              <FiEdit
                                className="w-5 h-5"
                                onClick={onClickEdit}
                              />
                              <p
                                className="text-[14px] pt-1"
                                onClick={onClickEdit}
                              >
                                Edit
                              </p>
                            </div>
                          </td>
                        </tr>
                      ))
                    : data.map((item, index) => (
                        <tr key={item.id}>
                          <td className="text-center">{index + 1}</td>
                          <td>{item.product_name}</td>
                          <td className="text-center">{item.category}</td>
                          <td>{item.price}</td>
                          <td className="text-center">{item.stock}</td>
                          <td className="flex justify-center gap-5">
                            <div className="flex flex-row items-center justify-center gap-1 text-[#DA5C53] hover:cursor-pointer">
                              <IoTrashOutline
                                className="w-5 h-5"
                                onClick={() => handleDeleteProduct(data)}
                              />
                              <p
                                className="text-[14px] pt-1"
                                onClick={() => handleDeleteProduct(data)}
                              >
                                Hapus
                              </p>
                            </div>

                            <div className="flex flex-row items-center justify-center gap-1 text-[#306D75] hover:cursor-pointer">
                              <FiEdit
                                className="w-5 h-5"
                                onClick={onClickEdit}
                              />
                              <p
                                className="text-[14px] pt-1"
                                onClick={onClickEdit}
                              >
                                Edit
                              </p>
                            </div>
                          </td>
                        </tr>
                      ))}
                </>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ListProduct;
