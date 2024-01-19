import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import helpers from "../../components/helpers/helpers";

import Header from "./../../components/layouts/Header";
import MenuRiwayat from "./material/MenuRiwayat";
import TabReward from "./material/TabReward";
import TabKomisi from "./material/TabKomisi";
import TabPembelian from "./material/TabPembelian";

function RiwayatPage() {
<<<<<<< HEAD
  const navigate = useNavigate();

  // check auth
  const checkAuth = () => {
    console.log(sessionStorage.getItem("token", true));
    let check = helpers.checkTokenAuth();
    check != true ? navigate("/loginpage") : console.log("Allow this Page");
  };

  useEffect(() => {
    checkAuth();
  }, []);
  
=======



  const onValueRadioChange = (event) => {
    console.log(event.target.value);
  }
>>>>>>> e47c772eec7d4b3a1f45a8f3790c6a49cf1e0e4a
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
                  title: "Riwayat",
                  bi_icon: "bi bi-arrow-left",
                  link: "/Dashboard",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>

          <div className="main-container w-100 pb-5">
            <div class="tab-content" id="assetstabsContent">

              {/* reward page */}
              <TabReward
                RecordCard={{
                }}
              />

              {/* Komisi page */}
              <TabKomisi
                RecordCard={{
                }}
              />

              {/* pembelian page */}
              <TabPembelian
                OnchangeRadioFilter={onValueRadioChange}
                RecordCard={{
                }}
              />


            </div>
            <MenuRiwayat
              type={"MenuRiwayat"}
              RecordCard={{
              }}
            />
          </div>
        </div>
      </main>
      <style>{`
      .size-16 {
        font-size: 16px;
      }
      .size-14 {
        font-size: 14px;
      }
      .size-15 {
        font-size: 15px;
      }
      .size-13 {
        font-size: 13px;
      }
      .size-13-5 {
        font-size: 13.5px;
      }
      .size-13-9 {
        font-size: 13.9px;
      }
      .size-13-7 {
        font-size: 13.7px;
      }
      .size-10-9 {
        font-size: 10.9px;
      }
      `}</style>
    </>
  );
}

export default RiwayatPage;
