import { useNavigate } from "react-router-dom";
import React, { FC, useRef, useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import ReactToPrint from "react-to-print";

import { CustomInput, InputIcon } from "../components/CustomInput";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import CustomButton from "../components/CustomButton";

import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { FiDivideSquare, FiEdit } from "react-icons/fi";
import { BsPrinter } from "react-icons/bs";

import { transactionsReports } from "../utils/types/DataTypes";
import axios from "axios";

interface printButton {
  contentRef?: any;
}

interface componentPrint {
  content?: any;
}

const ComponentToPrint = React.forwardRef<HTMLDivElement, componentPrint>(
  ({ content }, ref) => {
    return <div ref={ref}>{content}</div>;
  }
);

const PrintButton: FC<printButton> = ({ contentRef }) => {
  return (
    <ReactToPrint
      trigger={() => (
        <CustomButton
          id="btn-printLaporan"
          label="Cetak Laporan"
          icon={<BsPrinter className="w-[1.3rem] h-[1.3rem] mr-3" />}
          className="btn bg-orangeComponent border-none rounded-xl"
        />
      )}
      content={() => contentRef.current}
    />
  );
};

const ComponentPrint: FC<componentPrint> = ({ content }) => {
  const contentRef = useRef(null);
  return (
    <div>
      <ComponentToPrint content={<LaporanPenjualan />} ref={contentRef} />
      <div className="mt-10 ml-10">
        <PrintButton contentRef={contentRef} />
      </div>
    </div>
  );
};

const LaporanPenjualan = () => {
  const [reports, setReports] = useState<transactionsReports[]>([]);
  const [cookie, removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;
  const [loading, setLoading] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  useEffect(() => {
    const matchingDates = reports.every((iten) => {
      const start = new Date(startDate).toLocaleDateString();
      const end = new Date(endDate).toLocaleDateString();
      return startDate >= start && endDate <= end;
    });

    if (startDate && endDate && !matchingDates) {
      fetchData();
    }
  }, [startDate, endDate]);

  const handleDateData = () => {
    if (startDate && endDate) {
      fetchData();
    }
  };

  const fetchData = () => {
    axios
      .get(
        `https://virtserver.swaggerhub.com/CAPSTONE-Group1/sirloinPOSAPI/1.0.0/transactions?start=${startDate}&end=${endDate}`,
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
          },
          params: {},
        }
      )
      .then((res) => {
        const { data } = res.data;
        setReports(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="col-span-9 px-10 pt-16">
        {/* <div className="flex justify-center ml-auto items-center cursor-pointer w-12 h-12 rounded-xl border-2 bg-white shadow-sm border-[rgba(159,159,159,0.5)]">
            <MdOutlineShoppingCart className="w-6 h-6 text-color3" />
          </div> */}
        <p className="text-[36px] text-color3 font-semibold tracking-widest mt-8">
          Laporan Penjualan
        </p>

        <div className="flex flex-row items-center mt-10 gap-12 w-full">
          <div className="flex w-4/12 items-center gap-2">
            <p className="text-[16px] text-color3 font-medium w-28">
              Dari tanggal :
            </p>
            <CustomInput
              id="input-date"
              type="date"
              value={startDate}
              className="bg-white w-48 shadow-[0px_0px_4px_0px_rgba(120,120,120,0.5)] px-4 py-0 text-[14px] rounded-xl h-8 "
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="flex w-4/12 items-center gap-4">
            <p className="text-[16px] text-color3 font-medium">
              Hingga tanggal :
            </p>
            <CustomInput
              id="input-date"
              type="date"
              value={endDate}
              className="bg-white w-48 shadow-[0px_0px_4px_0px_rgba(120,120,120,0.5)] px-4 py-0 text-[14px] rounded-xl h-8 "
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="flex w-4/12 items-center gap-4">
            <CustomButton
              id="btn-printLaporan"
              label="Tampilkan Data"
              icon={<BsPrinter className="w-[1.3rem] h-[1.3rem] mr-3" />}
              className="btn bg-orangeComponent border-none rounded-xl"
              onClick={handleDateData}
            />
          </div>
        </div>
        {reports.length === 0 ? (
          <>
            <p>Data Kosong</p>
          </>
        ) : (
          <>
            <div className="overflow-auto mt-12">
              <table className="table w-full ">
                <thead className="">
                  <tr>
                    <th className="bg-orangeComponent text-color1 text-[14px] w-1/12 text-center">
                      Tanggal
                    </th>
                    <th className="bg-orangeComponent text-color1 text-[14px] w-2/12">
                      Nama
                    </th>
                    <th className="bg-orangeComponent text-color1 text-[14px] w-2/12 text-center">
                      Invoice
                    </th>
                    <th className="bg-orangeComponent text-color1 text-[14px] w-2/12">
                      No.Telepon
                    </th>
                    <th className="bg-orangeComponent text-color1 text-[14px] w-1/12 text-center">
                      Total Belanja
                    </th>
                    <th className="bg-orangeComponent text-color1 text-[14px] text-center">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody className="border-x-2 border-[rgba(159,159,159,0.2)] text-[14px]">
                  {reports
                    ?.filter((item) => {
                      if (startDate || endDate) {
                        return item;
                      } else {
                        return null;
                      }
                    })
                    .map((item, index) => {
                      return (
                        <>
                          <tr key={index}>
                            <td className="text-center">
                              {item.created_at?.split("").splice(0, 10)}
                            </td>
                            <td>{item.customer_name}</td>
                            <td className="text-center text-[14px]">
                              {item.invoice_number}/
                              {item.created_at?.split("").splice(0, 10)}/MPL/
                              {item.customer_id}
                            </td>
                            <td>089767765455</td>
                            <td className="text-center">{item.total_bill}</td>
                            <td className="flex justify-center gap-5">
                              {item.transaction_status}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};

const Report = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <SideNav />
        </div>
        <div className="col-span-9  pt-16">
          <ComponentPrint />
        </div>
      </div>
    </Layout>
  );
};

export { Report, ComponentPrint };
