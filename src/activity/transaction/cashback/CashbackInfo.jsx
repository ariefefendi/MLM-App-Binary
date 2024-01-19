import React from "react";
import Header from "../../../components/layouts/Header";
import { useNavigate } from "react-router-dom";
import CardReceipt from "../../../components/material/CardReceipte";

const SettingPage = () => {
  const navigate = useNavigate();

  function navigateTo() {
    navigate("/Dashboard", { replace: true });
  }

  return (
    <>
      <main
        className='container-fluid h-100'
        style={{ minHeight: "567px", paddingTop: "85.7188px" }}>
        <div className='row h-100 overflow-auto'>
          <header className='content-blue-header position-absolute'></header>
          <header className='header position-fixed'>
            <div className='row'>
              <Header
                material={{
                  title: "Cashbacl Transaksi",
                  bi_icon: "bi bi-arrow-left",
                  link: "/dashboard",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>
          <div className="main-container container">
            <div className="row text-center text-white mb-3 position-relative">
              <h6 className="my-1 fs-20px">Bukti</h6>
              <h6 className="my-1 fs-20px">Pengambilan Cashback</h6>
              <span className="fs-12px">15 july 2023, 17:32 WIB</span>
            </div>
            <CardReceipt
              type={"Cashback"}
              material={{
                Total_Cashback: "Rp 2.000.000",
                No_Transaction: "45461321564",
                Cashback_From: "Al - Amsor",
                Id_Regist: "23423423423",
                RecipientName: "Yayan",
                RecipientAddress: "Jl. Siman, Ponorogo"
              }}
            >
            </CardReceipt>
          </div>
        </div>
      </main>
      <style>{`
      .fs-07 {
        font-size: 0.7rem !important;
      }
      .fs-12px {
        font-size: 12px !important;
      }
      .fs-15px {
        font-size: 15px !important;
      }
      .fs-18px {
        font-size: 18px !important;
      }
      .fs-20px {
        font-size: 20px !important;
      }
      .fs-22px {
        font-size: 22px !important;
      }
      .rounded-oval {
        border-radius: 50% !important;
      }
      hr.invoce {
        opacity: 20%;
        background: black;
        height: 2px;
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
      
      `}</style>
    </>
  );
};

export default SettingPage;
