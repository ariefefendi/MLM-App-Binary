import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Header from "../../../components/layouts/Header";
import CardOrder from "../../../components/material/CardOrder";
import helpers from "../../../components/helpers/helpers";

function ListOrderPaket() {
  const navigate = useNavigate();

  //check auth
  const checkAuth = () => {
    // get item from storage
    // console.log(sessionStorage.getItem("token", true));
    let check = helpers.checkTokenAuth();
    check != true ? navigate("/loginpage") : console.log("Allow this Page");
  };

  useEffect(() => {
    checkAuth();
  }, []);
  
  return (
    <>
      <main
        className="body-scroll h-100 inline-block"
        data-page="users"
        style={{ minHeight: "100%", paddingTop: "85.7188px" }}
      >
        <div className="container-fluid h-100 has-header">
          <header className="header position-fixed">
            <div className="row">
              <Header
                material={{
                  title: "List Order Paket",
                  bi_icon: "bi bi-arrow-left",
                  link: "/Order",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>
          <div className="main-container">
            <div className="row text-center mb-3 position-relative">
              <h6 className="my-1 fs-20px opacity-75">Silahkan Anda</h6>
              <h6 className="my-1 fs-20px opacity-75">Memilih Paket Upgrade</h6>
            </div>
            <div className="row mt-0 mb-3">
              <CardOrder 
              type={"ListOrder"}
              RecordCard={{
                UpgradePaket : "Upgrade Paket 1",
                Deskripsi : "Upgrade Paket Pertama Anda Akan Mendapatkan 1 Titik Posisi",
                link : "/PengirimanSayaPaket",
              }}/>
            </div>
          </div>
        </div>
      </main>
      <style>{`
      .opacity-75 {
        opacity: 75%;
      }
      .fs-20px{
        font-size: 20px;
      }
      `}</style>
    </>
  );
}

export default ListOrderPaket;
