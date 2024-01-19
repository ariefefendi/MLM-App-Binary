import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import helpers from "../../components/helpers/helpers";

import Header from "../../components/layouts/Header";

function Order() {
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
                  title: "Order",
                  bi_icon: "bi bi-arrow-left",
                  link: "../dashboard",
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
              {/* reaped order */}
              <div className="col-12 px-0">
                <ul className="list-group list-group-flush bg-none">
                  <li
                    class="list-group-item border-none py-2"
                    onClick={() => navigate("/ListOrderRo")}
                  >
                    <div className="card">
                      <div className="card-body">
                        <div class="row">
                          <div class="col-auto align-self-center">
                            <div class="avatar avatar-40 shadow rounded-10 ">
                              <img src="" alt="" />
                            </div>
                          </div>
                          <div class="col align-self-center px-0">
                            <p class="text-color-theme mb-0">Reaped Order</p>
                            <p class="text-muted size-12-5">
                              Anda akan melakukan reaped order
                            </p>
                          </div>
                          <div class="col-auto align-self-center px-2">
                            <a href="transaction-detail.html">
                              <i class="bi bi-chevron-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Upgrade paket */}
              <div className="col-12 px-0">
                <ul className="list-group list-group-flush bg-none">
                  <li
                    class="list-group-item border-none py-2"
                    onClick={() => navigate("/ListOrderPaket")}
                  >
                    <div className="card">
                      <div className="card-body">
                        <div class="row">
                          <div class="col-auto align-self-center">
                            <div class="avatar avatar-40 shadow rounded-10 ">
                              <img src="" alt="" />
                            </div>
                          </div>
                          <div class="col align-self-center px-0">
                            <p class="text-color-theme mb-0">Upgrade Paket</p>
                            <p class="text-muted size-12-5">
                              Anda akan melakukan Upgrade Paket
                            </p>
                          </div>
                          <div class="col-auto align-self-center px-2">
                            <a href="transaction-detail.html">
                              <i class="bi bi-chevron-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Beli tiket */}
              <div className="col-12 px-0">
                <ul className="list-group list-group-flush bg-none">
                  <li
                    class="list-group-item border-none py-2"
                    onClick={() => navigate("/ListOrderTiket")}
                  >
                    <div className="card">
                      <div className="card-body">
                        <div class="row">
                          <div class="col-auto align-self-center">
                            <div class="avatar avatar-40 shadow rounded-10 ">
                              <img src="" alt="" />
                            </div>
                          </div>
                          <div class="col align-self-center px-0">
                            <p class="text-color-theme mb-0">
                              Beli Tiket Seminar
                            </p>
                            <p class="text-muted size-12-5">
                              Anda akan melakukan Pembelian Tiket
                            </p>
                          </div>
                          <div class="col-auto align-self-center px-2">
                            <a href="transaction-detail.html">
                              <i class="bi bi-chevron-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
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

export default Order;
