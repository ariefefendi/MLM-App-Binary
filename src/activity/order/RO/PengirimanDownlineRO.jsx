import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Header from "../../../components/layouts/Header";
import MaterialKirimDownline from "../material/MaterialKirimDownline";
import helpers from "../../../components/helpers/helpers";

function PengirimanDownlineRO() {
  const navigate = useNavigate();

  const checkAuth = () => {
    //check get storage
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
                  link: "/RoTo",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>
          <MaterialKirimDownline
            RecordCard={{
              LinkDownline: "/DetailTransaksiDownlineRo",
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

export default PengirimanDownlineRO;
