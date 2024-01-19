import React, { useEffect, useState } from "react";
import Header from "../../components/layouts/Header";
import { confirmAlert } from "react-confirm-alert"; // Import
import Swal from "sweetalert2";

function UnallowedPage() {
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

  const tes = () => {
    var imgurl = require("../mainpage/img/progress.png");
    console.log(imgurl);
    let timerInterval;
    Swal.fire({
      timer: 10000,
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

  return (
    <>
      <main
        className="body-scroll h-100 inline-block"
        data-page="users"
        style={{ minHeight: "100%", paddingTop: "85.7188px" }}
      >
        <div className="h-100 has-header">
          <header className="header position-fixed">
            <div className="row">
              <Header
                material={{
                  title: "",
                  bi_icon: "bi bi-arrow-left",
                  link: "",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>

          <div class="main-container container">
            <div class="row h-100 ">
              <div class="col-12 col-md-6 col-lg-5 col-xl-3 mx-auto py-4 text-center align-self-center">
                <figure class="mw-100 text-center mb-3">
                  <img src={require("./img/404.png")} alt="" class="mw-100" />
                </figure>
                <h1 class="mb-0 text-color-theme">Oops!...</h1>
                <h5 class="mb-3">Page Unallowed</h5>
                <p class="text-muted mb-3">
                  Anda Tambahkan ID Member, agar dapat melanjutkan aktifitas
                </p>
                <p class="text-muted mb-4">Info Lebih Lanjut : admin@nks.id</p>
                <button class="btn btn-default btn-lg" onClick={formalert}>
                  Tambahkan Id Member
                </button>
              </div>
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

export default UnallowedPage;
