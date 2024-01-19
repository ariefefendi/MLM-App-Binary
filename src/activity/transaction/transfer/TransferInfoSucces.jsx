import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Header from "../../../components/layouts/Header";
import CardReceipt from "../../../components/material/CardReceipte";
import helpers from "../../../components/helpers/helpers";

const TransferInfoSucces = () => {
  const navigate = useNavigate();
  const checkAuth = () => {
    //check get storage
    // console.log(sessionStorage.getItem("token", true));
    let check = helpers.checkTokenAuth();
    check != true ? navigate("/loginpage") : console.log("Allow this Page");
  };

  function navigateTo() {
    navigate("/Dashboard", { replace: true });
  }
  
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      <main
        className="container-fluid h-100"
        style={{ minHeight: "567px", paddingTop: "85.7188px" }}
      >
        <div className="row h-100 overflow-auto">
          <header className="content-blue-header position-absolute"></header>
          <header className="header position-fixed">
            <div className="row">
              <Header
                material={{
                  title: "Invoice Pembelian",
                  bi_icon: "bi bi-arrow-left",
                  link: "/DetailVerificationPage",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>

          <div className="main-container container">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <div className="mb-3 mt-5 d-flex justify-content-center">
                  <div className="circle rounded-circle d-flex justify-content-center align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="83"
                      height="83"
                      viewBox="0 0 83 83"
                      fill="none"
                    >
                      <circle cx="41.5" cy="41.5" r="41.5" fill="#8CC152" />
                      <path
                        d="M70.8892 24.3489C70.4862 23.9439 70.0068 23.6225 69.4786 23.4031C68.9504 23.1837 68.3839 23.0708 67.8116 23.0708C67.2394 23.0708 66.6729 23.1837 66.1447 23.4031C65.6165 23.6225 65.1371 23.9439 64.7341 24.3489L32.4415 56.5818L18.8743 43.0146C18.4559 42.6117 17.9621 42.295 17.4209 42.0824C16.8797 41.8698 16.3018 41.7655 15.7202 41.7755C15.1385 41.7856 14.5646 41.9097 14.0311 42.1408C13.4976 42.3719 13.015 42.7056 12.6109 43.1226C12.2067 43.5397 11.8889 44.032 11.6757 44.5714C11.4624 45.1109 11.3578 45.687 11.3679 46.2667C11.3779 46.8465 11.5024 47.4186 11.7343 47.9504C11.9662 48.4822 12.3009 48.9633 12.7192 49.3661L29.364 65.9579C29.7669 66.3628 30.2464 66.6843 30.7746 66.9036C31.3028 67.123 31.8693 67.2359 32.4415 67.2359C33.0138 67.2359 33.5803 67.123 34.1085 66.9036C34.6367 66.6843 35.1161 66.3628 35.5191 65.9579L70.8892 30.7004C71.3292 30.2958 71.6803 29.8047 71.9205 29.2582C72.1606 28.7116 72.2846 28.1213 72.2846 27.5246C72.2846 26.9279 72.1606 26.3377 71.9205 25.7911C71.6803 25.2445 71.3292 24.7535 70.8892 24.3489Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <div className="row text-center mb-3">
                  <h6 class="my-1 fw-bold">Transaksi Berhasil</h6>
                </div>
                <div className="row mb-3">
                  <div className="col-2">
                    <p className="text-muted">Tgl</p>
                  </div>
                  <div className="col-10 text-end">
                    <p className="text-muted size">
                      Selasa, 01-01-2023 | 20:24
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-4">
                    <p className="text-muted">No. Ref</p>
                  </div>
                  <div className="col-8 text-end">
                    <p className="text-muted size">65165164162</p>
                  </div>
                </div>
                <hr className="dashed mb-3" />
                <div className="row mb-3">
                  <div className="col">
                    <p className="text-muted">Sumber Dana</p>
                  </div>
                  <div className="col text-end">
                    <p className="text-muted size m-0">Ditya Muhshan</p>
                    <p className="text-muted size">0852****8521</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <p className="text-muted">Jenis Transfer</p>
                  </div>
                  <div className="col text-end">
                    <p className="text-muted size">Antar Akun</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <p className="text-muted">Tujuan</p>
                  </div>
                  <div className="col text-end">
                    <p className="text-muted size m-0">Denis Sudrajat</p>
                    <p className="text-muted size">0852****8521</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <p className="text-muted">Ket</p>
                  </div>
                  <div className="col text-end">
                    <p className="text-muted size">
                      Kirimkan saldo untuk Denis
                    </p>
                  </div>
                </div>
                <hr className="dashed mb-3" />
                <div className="row mb-3">
                  <div className="col">
                    <p className="text-muted">Nominal</p>
                  </div>
                  <div className="col text-end">
                    <p className="text-muted size">Rp100.000</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <p className="text-muted">Biaya layanan</p>
                  </div>
                  <div className="col text-end">
                    <p className="text-muted size">Rp1.000</p>
                  </div>
                </div>
                <hr className="dashed mb-3" />
                <div className="row mb-3 mt-4">
                  <div className="col">
                    <p className=" fw-bold">Total Tagihan</p>
                  </div>
                  <div className="col text-end">
                    <p className=" fw-bold">Rp. 101.750</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <style>{`
            .circle {
                width: 83px;
                height: 83px;
             flex-shrink: 0;
            }
            hr.dashed {
            border-top: 2px dashed black;
            opacity: 20%;
            background: transparent;
          }
          header.content-blue-header {
            top: 0;
            width: 100%;
            background-color: #0f78cb;
            height: 40%;
            border-radius: 0px 0px 75px 75px;
          }
          header.header.position-fixed {
            color: white;
          }
          header.header.position-fixed.active {
            color: black;
          }
          .size{
            font-size: 15px;
          }
          `}</style>
    </>
  );
};

export default TransferInfoSucces;
