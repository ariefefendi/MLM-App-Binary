import React from "react";
import { Link } from "react-router-dom";

// import "./css/ForgotAccountPage.css";

import Header from "../../components/layouts/Header";

function CongratulationsPage() {
  return (
    <>
      <main className="body-scroll d-flex flex-column h-100 justify-content-center">
        <div className="container-fluid h-100">
          <div className="row h-100 overflow-auto">
            <header className="header position-fixed">
              <div className="row">
                <Header
                  material={{
                    title: "Congratulations",
                    bi_icon: "bi bi-arrow-left",
                    link: "/CreateNewPassPage",
                    classLink: "btn btn-light btn-44 back-btn",
                    logoVisible: false,
                    iconNotifVisible: false,
                    linkNotif: "/tes",
                  }}
                />
              </div>
            </header>
            <div className="col-10 col-md-6 col-lg-6 col-xl-3 mx-auto align-self-center text-center py-4">
              <img
                src={require("./img/thankyou.png")}
                alt=""
                className="mw-100 mx-auto my-4"
              />
              <h1 className="mb-4 text-color-theme">Awesome!</h1>
              <p className="text-muted mb-4">
                Your password has been set to new provided password. Please sign
                in now with your new credentials.
              </p>
              <Link to={"/LoginPage"}>
                <button
                  type="button"
                  className="btn btn-lg btn-default w-100  shadow"
                  onclick="window.location.replace('index.html');"
                >
                  Sign in
                </button>
              </Link>
            </div>
            <div className="col-12 text-center mt-auto">
              <div className="row justify-content-center footer-info">
                <div className="col-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CongratulationsPage;
