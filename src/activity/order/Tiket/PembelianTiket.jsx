import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Header from "../../../components/layouts/Header";
import helpers from "../../../components/helpers/helpers";

function PembelianTiket() {
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
                  title: "Pembelian Tiket",
                  bi_icon: "bi bi-arrow-left",
                  link: "/ListOrderTiket",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>
          <div className="main-container">
            <div className="row mt-0 mb-3">
              <div className="col-12 col-md-12">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <div class="row">
                      <div class="col-auto align-self-center">
                        <div class="avatar avatar-60 bg-danger-light text-danger rounded-10 ">
                          <i className="bi bi-building   fs-4 mb-2"></i>
                        </div>
                      </div>
                      <div class="col align-self-center px-0">
                        <p class="text-color-theme mb-0">Tiket Seminar</p>
                        <p class="text-muted size-12-5">
                          Ayo KIta Maju Seminar Akan Dilaksanakan Pada tgl.
                          28-02-2024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-floating is-valid mb-3">
                  <input type="Number" className="form-control" id="qty" />
                  <label for="qty">Jumlah / QTY</label>
                </div>
              </div>
              <div className="gap-2 d-md-flex justify-content-md-end btn-text-right">
                <button
                  type="button"
                  className="btn btn-primary h-100 mb-2"
                  onClick={() => navigate("/DetailTransaksiSayaTiket")}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <style>{`
      .size-12-5{
        font-size: 12.5px;
      }
      `}</style>
    </>
  );
}

export default PembelianTiket;
