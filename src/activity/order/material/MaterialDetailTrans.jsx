import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Select from "react-select";

function MaterialKirimDownline(props) {
  const [option, setoption] = useState({});

  const options = [
    { value: "BNI", label: "BNI" },
    { value: "BRI", label: "BRI" },
  ];

  useEffect(() => {
    console.log(option);
  }, [options]);

  const navigate = useNavigate();
  let R = props.RecordCard;
  return (
    <>
      <div className="main-container w-100">
        <div className="row mb-2">
          <div className="col">
            <h6 className="title">Total Belanja</h6>
          </div>
          <div className="col-auto"></div>
        </div>
        <div className="row mb-2">
          <div className="col-8">
            <p className="text-muted">Total harga ( 2 Barang )</p>
          </div>
          <div className="col-4 text-end">
            <p>Rp.30.000</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <p className="text-muted">Total ongkos kirim</p>
          </div>
          <div className="col text-end">
            <p>Rp.10.500</p>
          </div>
        </div>
        <hr className="invoce m-0" />
        <div className="row mb-2 mt-3">
          <div className="col">
            <h6 className="title">Biaya Transaksi</h6>
          </div>
          <div className="col-auto"></div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <p className="text-muted">Biaya layanan</p>
          </div>
          <div className="col text-end">
            <p>Rp1.000</p>
          </div>
        </div>
        <hr className="invoce m-0" />
        <div className="row mb-3 mt-3">
          <div className="col">
            <p className=" fw-bold">Total Tagihan</p>
          </div>
          <div className="col text-end">
            <p className=" fw-bold">Rp42.500</p>
          </div>
        </div>
        <hr className="invoce m-0" />
        <div className="row mb-3 mt-3">
          <div className="col">
            <p className=" fw-bold">Metode Pembayaran</p>
          </div>
        </div>

        <Select
          options={options}
          onChange={(choice) => setoption(choice)}
          defaultValue={options[1]}
          className="mb-2"
        />

        <div className="card-footer text-center">
          <button
            className="btn btn-default bg-g btn-lg w-100"
            onClick={() => navigate(R.LinkSelesaiBayar)}
          >
            Bayar sekarang
          </button>
        </div>
      </div>
    </>
  );
}

export default MaterialKirimDownline;
