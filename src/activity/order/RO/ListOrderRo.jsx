import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import helpers from "../../../components/helpers/helpers";

import Header from "../../../components/layouts/Header";
import CardOrder from "../../../components/material/CardOrder";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ListOrderRo() {
  const navigate = useNavigate();

  // check auth
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
                  title: "List Order Ro",
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
              <h6 className="my-1 fs-20px opacity-75">
                Memilih Paker Reaped Order
              </h6>
            </div>
            <div className="row mt-0 mb-3">
              <CardOrder
                type={"ListOrder"}
                RecordCard={{
                  UpgradePaket: "Paket Ro 1",
                  Deskripsi:
                    "Paket terendah yang bisa anda beli. Anda kan mendapatkan 2 box product",
                  link: "/PembelianRo",
                }}
              />
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

export default ListOrderRo;
