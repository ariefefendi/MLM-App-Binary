import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/layouts/Header";
import ListViewMaterial_01 from "../../../components/material/ListViewMaterial_01";
// confirm alert
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import CustomAlert from "../../../components/material/custom_alert/CustomAlert";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function DetailCashback() {
  const navigate = useNavigate();
  const [DataPersyaratan, setDataPersyaratan] = useState([
    "persyarayan1",
    "persyarayan2",
    "persyarayan3",
    "persyarayan4",
    "persyarayan5",
  ]);

  const navigateTo = () => {
    navigate("/Dashboard", { replace: true });
  };

  const submit2 = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <CustomAlert
            close={onClose}
            closetext="No"
            title="Claim Cashback?"
            subtitle="Apakan anda yakin mengclaim cashback ini?"
          >
            <button
              type="button"
              className="btn btn-success w-100"
              onClick={(event) => {
                tes();
                onClose();
              }}
            >
              yes
            </button>
          </CustomAlert>
        );
      },
    });
  };

  const tes = () => {
    var imgurl = require("../../mainpage/img/progress.png");
    console.log(imgurl);
    let timerInterval;
    Swal.fire({
      timer: 100000,
      timerProgressBar: true,
      position: "bottom",
      customClass: "custom-heigt-allert",
      html:
        "<div>" +
        '<span class="progressstimer">' +
        '<img src="' +
        imgurl +
        '" alt="" />' +
        "</span > </br>" +
        "<span>Loading...</span>" +
        "</div> ",
      showConfirmButton: false,
      didOpen: () => {
        // Swal.showLoading()
      },
      willClose: () => {},
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        tes2();
      }
    });
  };

  const tes2 = () => {
    console.log("okee");
  };

  const submitgreenbg = () => {
    var imgurl = require("../../mainpage/img/succes_icon.png");
    console.log(imgurl);
    let timerInterval;
    Swal.fire({
      icon: 'error',
      position: "bottom",
      // imageUrl: imgurl,
      imageWidth: 70,
      imageHeight: 70,
      html: "<h5>Claim Success.</h5>",
      showConfirmButton: true,
      background: "#3ac79b",
      confirmButtonColor: "#fff",
      confirmButtonText: "Accept",
      customClass: {
        confirmButton: "custom-succes-buttton-color",
      },
      didOpen: () => {
        // Swal.showLoading()
      },
      willClose: () => {},
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        tes2();
      }
    });
  };

  const formalert = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="card w-dialogsize position-fixed bottom-15 start-50 translate-middle-x">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-lg-12 col-md-12 text-center mb-3">
                  <form className="was-validated needs-validation" novalidate>
                    <div className="form-group form-floating mb-3 is-valid">
                      <input
                        type="text"
                        className="form-control"
                        id="IDMEMBER"
                      />
                      <label className="form-control-label" for="IDMEMBER">
                        Id Member
                      </label>
                    </div>

                    <div className="form-group form-floating is-invalid mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="verification_code"
                      />
                      <label
                        className="form-control-label"
                        for="verification_code"
                      >
                        Verification
                      </label>
                    </div>
                  </form>
                </div>
                <div className="col-6 col-lg-6 col-md-6 text-center">
                  <button
                    type="button"
                    className="btn btn-success w-100"
                    onClick={(event) => {
                      tes();
                      onClose();
                    }}
                  >
                    yes
                  </button>
                </div>
                <div className="col-6 col-lg-6 col-md-6 text-center">
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn btn-danger w-100"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      },
    });
  };

  const generaterevral = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="card w-dialogsize bottom-15 start-50 translate-middle-x">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-lg-12 col-md-12 text-center mb-3">
                  <form className="was-validated needs-validation" novalidate>
                    <div className="form-group form-floating mb-1 is-valid">
                      <input
                        type="text"
                        className="form-control"
                        id="IDMEMBER"
                        readOnly
                      />
                      <label className="form-control-label" for="IDMEMBER">
                        Code reveral
                      </label>
                    </div>
                  </form>
                </div>
                <div className="col-12 col-lg-12 col-md-12 text-center">
                  <button
                    type="button"
                    className="btn btn-success w-100"
                    onClick={(event) => {
                      onClose();
                    }}
                  >
                    selesai
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      },
    });
  };

  const codereveral = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="card w-dialogsize bottom-15 start-50 translate-middle-x">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-lg-12 col-md-12 text-center mb-3">
                  <h6>Silakan pilih Metode Pendaftaran</h6>
                </div>
                <div className="col-6 col-lg-6 col-md-6 text-center">
                  <button
                    type="button"
                    className="btn btn-success w-100"
                    onClick={(event) => {
                      generaterevral();
                      //   onClose();
                    }}
                  >
                    Create Reveral
                  </button>
                </div>
                <div className="col-6 col-lg-6 col-md-6 text-center">
                  <button
                    type="button"
                    onClick={(event) => {
                      onClose();
                    }}
                    className="btn btn-danger w-100"
                  >
                    Daftar Disini
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      },
    });
  };

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
                  title: "Detail Cashback",
                  bi_icon: "bi bi-arrow-left",
                  link: "/AllCashbackpage",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>

          <div className="tab-pane fade show active" id="cardsCashback">
            <ListViewMaterial_01
              dt-label="List-Data-cashback"
              RecordCard={{
                Title: "Umroh bersama Kautsar",
                Nominal: "2.000.000",
                DueDate: "24/07/23",
                IconCard: "assets/img/company4.jpg",
              }}
            />
          </div>
          <div className="main-container">
            <div className="row mt-0 mb-3">
              <div className="col-12 col-lg-12 col-md-12">
                <h6>Deskripsi</h6>
              </div>
              <div className="col-12 px-0">
                <ul className="list-group list-group-flush bg-none">
                  <li className="list-group-item border-none py-2">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12 col-lg-12 col-md-12">
                            <ol>
                              {DataPersyaratan.map((d) => (
                                <li>{d}</li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="position-fixed bottom-0 end-15">
              <button
                type="button"
                onClick={submit2}
                className="btn btn-primary w-100 h-100 mb-3"
              >
                Claim
              </button>
              <button
                type="button"
                onClick={submitgreenbg}
                className="btn btn-success w-100 h-100 mb-3"
              >
                green bg
              </button>
              <button
                type="button"
                onClick={formalert}
                className="btn btn-info w-100 h-100 mb-3"
              >
                formalert
              </button>
              <button
                type="button"
                onClick={codereveral}
                className="btn btn-info w-100 h-100 mb-3"
              >
                alert for code reveral
              </button>
            </div>
          </div>
        </div>
      </main>
      <style>{`
            .w-dialogsize {
                width: 90% !important;
            }
            .bottom-15{
                bottom : 15px !important;
            }
            .custom-heigt-allert{
                height : 150px;
                align-content : center;
                padding-bottom : 0;
            }
            .end-15{
                right : 15px !important;
            }
            .custom-succes-buttton-color{
                color : #3ac79b !important;
            }
            `}</style>
    </>
  );
}

export default DetailCashback;
