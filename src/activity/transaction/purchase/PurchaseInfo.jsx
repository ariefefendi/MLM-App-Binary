import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Header from "../../../components/layouts/Header";
import CardReceipt from "../../../components/material/CardReceipte";
import helpers from "../../../components/helpers/helpers";

function PurchaseInfo() {
  const navigate = useNavigate();

  function navigateTo() {
    navigate("/Dashboard", { replace: true });
  }

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
        className="container-fluid h-100"
        style={{ minHeight: "567px", paddingTop: "85.7188px" }}
      >
        <div className="row h-100 overflow-auto">
          <header className="content-blue-header position-absolute"></header>
          <header className="header position-fixed">
            <div className="row">
              <Header
                material={{
                  title: "Invoice Pembelian",
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

          <div className="main-container container">
            <div
              class="accordion accordion-flush mb-3"
              id="accordionFlushExample"
            >
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="true"
                    aria-controls="flush-collapseOne"
                  >
                    Log informasi
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="row">
                    <div class="col-12 col-md-12 col-lg-12 mx-auto">
                      <div class="card custom-card shadow-sm">
                        <div class="card-body bg-light">
                          <ul class="list-group list-group-flush w-100 bubble-sheet log-information">
                            <li class="list-group-item">
                              <div class="avatar avatar-15 border-danger rounded-circle"></div>
                              <p>
                                <span class="text-color-theme">
                                  System updated
                                </span>
                                <br />
                                <small class="text-muted">2:02 am</small>
                              </p>
                            </li>
                            <li class="list-group-item">
                              <span class="avatar avatar-15 border-warning rounded-circle"></span>
                              <p>
                                <span class="text-color-theme">
                                  New account Created
                                </span>
                                <br />
                                <small class="text-muted">5:02 pm</small>
                              </p>
                            </li>
                            <li class="list-group-item">
                              <span class="avatar avatar-15 border-success rounded-circle"></span>
                              <p>
                                <span class="text-color-theme">
                                  Shutdown 2 hours
                                </span>
                                <br />
                                <small class="text-muted">
                                  Yesterday | 2:02 pm
                                </small>
                              </p>
                            </li>
                            <li class="list-group-item">
                              <span class="avatar avatar-15 border-primary rounded-circle"></span>
                              <p>
                                <span class="">System updated</span>
                                <br />
                                <small class="text-muted">
                                  Yesterday | 1:32 pm
                                </small>
                              </p>
                            </li>
                            <li class="list-group-item">
                              <span class="avatar avatar-15 border-dark rounded-circle"></span>
                              <p>
                                <span class="">Actions changes done!</span>
                                <br />
                                <small class="text-muted">
                                  14 October 2021 | 2:02 am
                                </small>
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div class="card-footer">
                          <div class="row">
                            <div class="col">
                              <h6 class="mb-0">3:55 - 4:00 pm</h6>
                              <p class="text-muted small">Down time</p>
                            </div>
                            <div class="col-auto">
                              <h6 class="mb-0">2:65 min</h6>
                              <p class="text-muted small">Active hours</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CardReceipt
              type={"Purchase"}
              material={{
                No_Ref: "651665164162",
                Sender_Name: "Andriana Maharfika",
                Sender_Bank: "Bank BRI",
                Sender_Phone: "034*****8765",
                Recipient_Name: "PT.NKS - INDONESIA",
                Recipient_Bank: "Bank BCA",
                Recipient_Phone: "034*****8765",
                Qty_Product: "2",
                Product_Price: "30.000",
                Ongkir: "Rp10.500",
                ServiceFee: "Rp1.000",
                Ppn: "Rp250",
                Total_Bill: "Rp. 40.750",
              }}
            ></CardReceipt>
          </div>
        </div>
      </main>

      <style>{`
            .fs-07 {
                font-size: 0.7rem !important;
              }
              hr.invoce {
                opacity: 20%;
                background: black;
                height: 2px;
              }
              hr.dashed {
                border-top: 2px dashed black;
                opacity: 20%;
                background: transparent;
              }
              header.content-blue-header {
                top: 0;
                width: 100%;
                background-color: #0f78cb;
                height: 40%;
                border-radius: 0px 0px 75px 75px;
              }
              header.header.position-fixed {
                color: white;
              }
              header.header.position-fixed.active {
                color: black;
              }
              .accordion-item:first-of-type .accordion-button {
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;
            }
            .accordion-flush .accordion-item {
              border-radius: 15px;
            }
            .custom-card {
            border-radius: 0px 0px 15px 15px;
          }
          .accordion-button:focus {
            z-index: 3;
            border-color: #9eb1f1;
            outline: 0;
            box-shadow: none;
        }
        .accordion-button:not(.collapsed) {
           color: black; 
           background-color: #ffffff; 
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
      }
            `}</style>
    </>
  );
}

export default PurchaseInfo;
