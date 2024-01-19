import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import helpers from "../../components/helpers/helpers";

// import "./css/ProfilPage.css";

import Header from "../../components/layouts/Header";

function UsernamePassPage() {
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
                  title: "Username Password",
                  bi_icon: "bi bi-arrow-left",
                  link: "/MenuProfilPage",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>

          <div className="col-12 col-md-6 col-lg-5 col-xl-3 mx-auto btn-text-right pb-0">
            <form className="was-validated align-items-center">
              <div className="form-floating is-valid mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                />
                <label for="NIK">Username</label>
              </div>
              <div className="form-floating is-valid mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="emailphone"
                />
                <label for="Name">Password</label>
              </div>
              <div className="form-floating is-invalid mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="password"
                />
                <label for="no. hp">New Password</label>
              </div>
              <div className="form-floating is-invalid mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="password"
                />
                <label for="no. hp">Confirm Password</label>
              </div>
              <div className="footer-info">
                <button type="button" className="btn btn-primary h-50 next">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default UsernamePassPage;
