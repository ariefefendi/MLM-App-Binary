import React from "react";
import { Link } from "react-router-dom";
// import "./css/ForgotAccountPage.css";

import Header from "../../components/layouts/Header";

function ValidateEmailPage() {
  return (
    <>
      {/* ForgotAccountPage page-1 */}
      <main
        className="body-scroll flex-column h-100 justify-content-center d-flex align-items-center"
        style={{ minHeight: "100%", paddingTop: "85.7188px" }}
      >
        <div className="container-fluid h-100">
          <div className="row h-100 overflow-auto">
            <header className="header position-fixed">
              <div className="row">
                <Header
                  material={{
                    title: "Forgot Account Page",
                    bi_icon: "bi bi-arrow-left",
                    link: "/LoginPage",
                    classLink: "btn btn-light btn-44 back-btn",
                    logoVisible: false,
                    iconNotifVisible: false,
                    linkNotif: "/tes",
                  }}
                />
              </div>
            </header>
            <div className="col-10 col-md-6 col-lg-6 col-xl-3 mx-auto align-self-center text-center py-4">
              <h1 className="mb-4 text-color-theme">
                Right here you can reset it back
              </h1>
              <p className="text-muted mb-4">
                Provide your registered email ID or phone number to reset your
                password
              </p>

              <div className="form-floating is-valid mb-3">
                <input
                  type="text"
                  className="form-control"
                  value=""
                  id="emails"
                />
                <label for="emails">Email</label>
              </div>
              <Link to={"/CreateNewPassPage"}>
                <button
                  type="button"
                  className="btn btn-lg btn-default w-100  shadow"
                  onclick="window.location.replace('index.html');"
                >
                  Reset Password
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

export default ValidateEmailPage;
