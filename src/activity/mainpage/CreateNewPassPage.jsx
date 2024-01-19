import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/layouts/Header";

function CreateNewPassPage() {
  return (
    <>
      <main
        className="body-scroll d-flex flex-column h-100 justify-content-center"
        style={{ minHeight: "100%", paddingTop: "85.7188px" }}
      >
        <div className="container-fluid h-100">
          <div className="row h-100 overflow-auto">
            <header className="header position-fixed">
              <div className="row">
                <Header
                  material={{
                    title: "Reset Password",
                    bi_icon: "bi bi-arrow-left",
                    link: "/ValidateEmailPage",
                    classLink: "btn btn-light btn-44 back-btn",
                    logoVisible: false,
                    iconNotifVisible: false,
                    linkNotif: "/tes",
                  }}
                />
              </div>
            </header>
            <div className="col-10 col-md-6 col-lg-6 col-xl-3 mx-auto align-self-center text-center py-4">
              <h1 className="mb-4 text-color-theme">Reset Password</h1>
              <p className="text-muted mb-4">
                Please create unique password for your account which contains
                at-least 1 capital latter & 1 special character sign
              </p>

              <div className="form-group form-floating is-valid mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="newpass"
                />
                <label className="form-control-label" for="newpass">
                  New Password
                </label>
              </div>

              <div className="form-group form-floating is-invalid mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                />
                <label className="form-control-label" for="password">
                  Confirm New Password
                </label>
                <button
                  type="button"
                  className="text-danger tooltip-btn"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Enter valid Password"
                  id="passworderror"
                >
                  <i className="bi bi-info-circle"></i>
                </button>
              </div>
              <Link to={"/CongratulationsPage"}>
                <button
                  type="button"
                  className="btn btn-lg btn-default w-100  shadow"
                  onclick="window.location.replace('index.html');"
                >
                  Update
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

export default CreateNewPassPage;
