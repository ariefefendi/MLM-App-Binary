import React, { useEffect, useState } from "react";

import Header from "../../../components/layouts/Header";
import TransferMaterial from "../../../components/material/TransferMaterial";
import Swal from "sweetalert2";

function WithdrawPage() {
  const tes = () => {
    var imgurl = require("../../mainpage/img/progress.png");
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
        submitgreenbg();
      }
    });
  };

  const submitgreenbg = () => {
    var imgurl = require("../../mainpage/img/succes_icon.png");
    console.log(imgurl);
    let timerInterval;
    Swal.fire({
      position: "bottom",
      imageUrl: imgurl,
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
        <div className="container-fluid h-100 has-header">
          <header className="header position-fixed">
            <div className="row">
              <Header
                material={{
                  title: "Withdraw",
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

          <div className="main-container w-100">
            <TransferMaterial
              type={"WithdrawPage"}
              RecordCard={{
                TotalWithdraw: "Rp41.000",
                BiayaLayanan_Withdraw: "Rp1.500",
                Totaltagihan_Withdraw: "Rp42.500",
              }}
            />
            <div className="card-footer text-center">
              <button
                className="btn btn-default bg-g btn-lg w-100 text-start"
                onClick={(event) => {
                  tes();
                }}
              >
                Withdraw
                <i class="bi bi-chevron-right position-absolute top-50 end-0 translate-middle-y px-2"></i>
              </button>
            </div>
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
    .custom-heigt-allert{
      height : 150px;
      align-content : center;
      padding-bottom : 0;
    }
    .custom-succes-buttton-color{
      color : #3ac79b !important;
    }
      `}</style>
    </>
  );
}

export default WithdrawPage;
