import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import helpers from "../../../components/helpers/helpers";

import Header from "../../../components/layouts/Header";
import MaterialRoTo from "../material/MaterialRoTo";

function RoTo() {
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
                  title: "Reaped Order",
                  bi_icon: "bi bi-arrow-left",
                  link: "/PembelianRo",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>
          <MaterialRoTo 
          RecordCard={{
            Linksaya : "/PengirimanSayaRO",
            LinkDownlane : "/PengirimanDownlineRO"
          }}/>
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

export default RoTo;
