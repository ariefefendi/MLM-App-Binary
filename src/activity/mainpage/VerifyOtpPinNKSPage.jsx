import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import helpers from "../../components/helpers/helpers";

import Header from "../../components/layouts/Header";
import MaterialVerifyOtp from "../mainpage/material/MaterialVerifyOtp";

function VerifyOtpPinNKSPage() {
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
      <header className="header position-fixed">
        <Header
          material={{
            title: "OTP Verification",
            bi_icon: "bi bi-arrow-left",
            classLink: "btn btn-light btn-44 back-btn",
            link: "/menuprofilpage",
            logoVisible: false,
            iconNotifVisible: false,
            linkNotif: "",
          }}
        />
      </header>
      {/* <!-- Begin page content --> */}
      <main
        className="body-scroll d-flex flex-column h-100 justify-content-center"
        style={{ minHeight: "100%", paddingTop: "85.7188px" }}
      >
        <MaterialVerifyOtp
          RecordCard={{
            link: "/PinNKSPage",
          }}
        />
      </main>
    </>
  );
}

export default VerifyOtpPinNKSPage;
