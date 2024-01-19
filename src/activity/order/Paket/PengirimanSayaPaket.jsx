import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Header from "../../../components/layouts/Header";
import MaterialKirimsaya from "../material/MaterialKirimsaya";
import helpers from "../../../components/helpers/helpers";

function PengirimanSayaPaket() {
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
                  title: "Pengiriman",
                  bi_icon: "bi bi-arrow-left",
                  link: "/ListOrderPaket",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>
          <MaterialKirimsaya 
          RecordCard={{
            LinkKirimsaya : "/DetailTransaksiSayaPaket",
          }}
          />
        </div>
      </main>
      <style>{`
      .opacity-75 {
        opacity: 75%;
      }
      .fs-17px{
        font-size: 17px;
      }
      `}</style>
    </>
  );
}

export default PengirimanSayaPaket;
