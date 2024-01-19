import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Header from "../../../components/layouts/Header";
import TransferMaterial from "../../../components/material/TransferMaterial";
import helpers from "../../../components/helpers/helpers";

function DetailVerificationPage() {
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
                  title: "Detail & Verification",
                  bi_icon: "bi bi-arrow-left",
                  link: "/TransferPage",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>

          <div className="main-container w-100">
            <TransferMaterial
              type={"DetailVerification"}
              RecordCard={{
                NominalTrasfer: "Rp100.000",
                BiayaLayanan_Transfer: "Rp1.000",
                TotalTagihan_Transfer: "Rp101.000",
                linkNote: "/TransferInfo",
              }}
            />
          </div>
        </div>
      </main>
      <style>{`
      .card-footer {
        padding: 0.5rem 1rem;
        background-color: rgba(0, 0, 0, 0);
        border-top: 1px solid rgba(0, 0, 0, 0);
    }
    .bg-g{
      background-color: #00AA5B;
    }
    .btn{
        text-transform:none;
    }
      `}</style>
    </>
  );
}

export default DetailVerificationPage;
