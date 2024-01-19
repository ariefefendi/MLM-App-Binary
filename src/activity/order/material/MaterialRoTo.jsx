import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function MaterialRoTo(props) {
  const navigate = useNavigate();
  let R = props.RecordCard;
  return (
    <>
      <div className="main-container">
        <div className="row text-center mb-3 position-relative ">
          <h6 className="my-1 fs-20px opacity-75">Anda Akan</h6>
          <h6 className="my-1 fs-20px opacity-75">
            Melakukan Order Ulang untuk
          </h6>
        </div>
        <div className="row mt-0 mb-3">
          <div className="col-12 px-0">
            <ul className="list-group list-group-flush bg-none">
              <li
                class="list-group-item border-none py-2"
                onClick={() => navigate(R.Linksaya)}
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
                        <p class="text-color-theme mb-0">Saya</p>
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
          <div className="col-12 px-0">
            <ul
              className="list-group list-group-flush bg-none"
              onClick={() => navigate(R.LinkDownlane)}
            >
              <li class="list-group-item border-none py-2">
                <div className="card">
                  <div className="card-body">
                    <div class="row">
                      <div class="col-auto align-self-center">
                        <div class="avatar avatar-40 shadow rounded-10 ">
                          <img src="" alt="" />
                        </div>
                      </div>
                      <div class="col align-self-center px-0">
                        <p class="text-color-theme mb-0">Downline Saya</p>
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
    </>
  );
}

export default MaterialRoTo;
