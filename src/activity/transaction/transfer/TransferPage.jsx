import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Header from "../../../components/layouts/Header";
import TransferMaterial from "../../../components/material/TransferMaterial";
import helpers from "../../../components/helpers/helpers";

function TransferPage() {
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
                  title: "Transfer",
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
          <div className="main-container">
            <div className="row text-start mb-3 position-relative">
              <h6 className="my-1 fs-17px opacity-75">
                Transfer ke Sesama Akun
              </h6>
            </div>

            <div className="row">
              <div className="col">
                <h6 className="title">Nomimal</h6>
              </div>
            </div>

            <div className="form-floating is-valid mb-2 custom-position">
              <input
                type="number"
                className="form-control text-end"
                id="username"
              />
            </div>

            <div className="row">
              <div className="col">
                <h6 className="title">Tujuan</h6>
              </div>
            </div>

            <TransferMaterial type={"TransferPage"} RecordCard={{}} />

            <div className="card-footer text-center">
              <button
                className="btn btn-default bg-g btn-lg w-100 text-start"
                onClick={() => navigate("/DetailVerificationPage")}
              >
                Transfer
                <i class="bi bi-chevron-right position-absolute top-50 end-0 translate-middle-y px-2"></i>
              </button>
            </div>
          </div>
        </div>
      </main>

      <style>{`
      .opacity-75 {
        opacity: 75%;
      }
      .fs-17px{
        font-size: 17px;
      }
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
    .h-90{
        height: 90% !important;
    }
    .form-floating.is-valid:before {
        left: 100% !important;
    }
    .btn-outline-secondary:hover {
      background-color: #fff;
  }
      `}</style>
    </>
  );
}

export default TransferPage;
