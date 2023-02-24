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
      <div className="mt-10 ml-0">
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

  const handleDateData = () => {
    const matchingDates = reports.every((item) => {
      const date = new Date(item.created_at).toLocaleDateString();
      console.log(date);
      const start = new Date(startDate).toLocaleDateString();
      const end = new Date(endDate).toLocaleDateString();

      return date.includes(start) === true && date.includes(end) === true;
    });

    if (startDate && endDate && matchingDates) {
      return fetchData();
    } else {
      return "Data Kosong";
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
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="col-span-9 pr-10 pt-16">
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
          <div className="flex w-6/12 items-center gap-4">
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
              className="btn bg-orangeComponent border-none rounded-xl"
              onClick={handleDateData}
            />
          </div>
        </div>
        {reports.length === 0 ? (
          <>
            <p className="mt-10 mb-20 text-[20px] text-color3 font-semibold">
              Data Kosong
            </p>
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
                  {reports.map((item, index) => {
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
  return (
    <Layout>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <SideNav />
        </div>
        <div className="col-span-9 -ml-8 pr-5">
          <ComponentPrint />
        </div>
      </div>
    </Layout>
  );
};

export { Report, ComponentPrint };
