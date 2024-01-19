import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

const TransferMaterial = (props) => {
  const navigate = useNavigate();
  
  let R = props.RecordCard;
  let T = props.RecordCard;
  let type = props.type;

  // Detail & verificationpage
  if (type == "DetailVerification") {
    return (
      <>
        <div className="row mb-2">
          <div className="col">
            <h6 className="title">Detail</h6>
          </div>
          <div className="col-auto"></div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <p className="text-muted">Transfer</p>
          </div>
          <div className="col text-end">
            <p>{R.NominalTrasfer}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <p className="text-muted">Biaya layanan</p>
          </div>
          <div className="col text-end">
            <p>{R.BiayaLayanan_Transfer}</p>
          </div>
        </div>
        <hr className="invoce m-0" />
        <div className="row mb-3 mt-3">
          <div className="col">
            <p className=" fw-bold">Total Tagihan</p>
          </div>
          <div className="col text-end">
            <p className=" fw-bold">{R.TotalTagihan_Transfer}</p>
          </div>
        </div>
        <div className="row mr-2 mb-2">
          <div className="col-lg-11 col-md-10 col-sm-8 col-8 pe-0">
            <div className="form-floating is-valid">
              <input type="text" className="form-control" id="otp" />
              <label for="otp">Verifikasi code</label>
            </div>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-4 col-4 text-end">
            <button type="button" className="btn btn-outline-success h-100">
              Get Serial
            </button>
          </div>
        </div>

        <div className="card-footer text-center">
          <button
            className="btn btn-default bg-g btn-lg w-100 text-start"
            onClick={() => navigate(R.linkNote)}
          >
            Transfer
            <i class="bi bi-chevron-right position-absolute top-50 end-0 translate-middle-y px-2"></i>
          </button>
        </div>
      </>
    );
  }
  // TransferPage
  else if (type == "TransferPage") {
    return (
      <>
        <div class="row">
          <div className="col-8 px-0">
            <ul className="list-group list-group-flush bg-none">
              <li class="list-group-item border-none py-2">
                <div className="card">
                  <div className="card-body">
                    <div class="row">
                      <div class="col-auto align-self-center">
                        <div class="avatar avatar-50 shadow rounded-10 ">
                          <img src="assets/img/user2.jpg" alt="" />
                        </div>
                      </div>
                      <div class="col align-self-center px-0">
                        <p class="text-color-theme mb-0">Habli</p>
                        <p class="text-muted size-12-5">0099887766</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-4 mt-2">
            <button
              type="button"
              className="btn btn-outline-secondary text-white shadow-sm rounded-10 h-90 w-100 px-1-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <FontAwesomeIcon
                icon={faAddressBook}
                flip="horizontal"
                size="2x"
                style={{ color: "#545454" }}
              />
            </button>
          </div>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Cari Akun
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="form-group form-floating mb-3">
                    <input
                      type="text"
                      class="form-control "
                      id="search"
                      placeholder="Search"
                    />
                    <label class="form-control-label" for="search">
                      Search...
                    </label>
                    <button type="button" class="text-color-theme tooltip-btn">
                      <i class="bi bi-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  // Withdraw
  else if (type == "WithdrawPage") {
    return (
      <>
        <div className="form-floating is-valid mb-3">
          <input type="text" className="form-control" id="username" />
          <label for="NIK">Total Withdraw</label>
        </div>
        <hr className="invoce m-0" />
        <div className="row mb-2 mt-3">
          <div className="col">
            <h6 className="title">Biaya Transaksi</h6>
          </div>
          <div className="col-auto"></div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <p className="text-muted">Total Withdraw</p>
          </div>
          <div className="col text-end">
            <p>{T.TotalWithdraw}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <p className="text-muted">Biaya layanan</p>
          </div>
          <div className="col text-end">
            <p>{T.BiayaLayanan_Withdraw}</p>
          </div>
        </div>
        <hr className="invoce m-0" />
        <div className="row mb-3 mt-3">
          <div className="col">
            <p className=" fw-bold">Total Tagihan</p>
          </div>
          <div className="col text-end">
            <p className=" fw-bold">{T.Totaltagihan_Withdraw}</p>
          </div>
        </div>

        <div className="row mr-2 mb-2">
          <div className="col-lg-11 col-md-10 col-sm-8 col-8 pe-0">
            <div className="form-floating is-valid">
              <input type="text" className="form-control" id="otp" />
              <label for="otp">Verifikasi code</label>
            </div>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-4 col-4 text-end">
            <button type="button" className="btn btn-outline-success h-100">
              Get Serial
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default TransferMaterial;
