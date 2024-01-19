import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import helpers from "../../components/helpers/helpers";

import Header from "../../components/layouts/Header";
import axios from "axios";
axios.defaults.baseURL = "https://staging.api.nks-freedom.id";
axios.defaults.headers.post["Content-Type"] = "application/json";

function MenuProfilPage() {
  const navigate = useNavigate();

  const logout = async () => {
    let idmember = sessionStorage.getItem("ID_MEMBER", true);
    await axios.post("/api/logout", { idmember }).then((response) => {
      sessionStorage.clear();
      navigate("/loginpage");  
    });
  };

  // check auth
  const checkAuth = () => {
    //check get item storage
    // console.log(sessionStorage.getItem("token", true));
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
                  title: "Profil",
                  bi_icon: "bi bi-arrow-left",
                  link: "/Dashboard",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>

          {/* <!-- main page content --> */}
          <div className="main-container container">
            {/* <!-- list pages --> */}
            <div className="card shadow-sm mb-4">
              <ul className="list-group list-group-flush bg-none">
                <li
                  className="list-group-item"
                  onClick={() => navigate("/ProfilPage")}
                >
                  <a className="text-normal d-block">
                    Profil<i className="float-end bi bi-arrow-right"></i>
                  </a>
                </li>

                <li
                  className="list-group-item"
                  onClick={() => navigate("/UsernamePassPage")}
                >
                  <a href="blog.html" className="text-normal d-block">
                    Ubah Password{" "}
                    <i className="float-end bi bi-arrow-right"></i>
                  </a>
                </li>

                <li
                  className="list-group-item"
                  onClick={() => navigate("/VerifyOtpPinNKSPage")}
                >
                  <a href="blog-details.html" className="text-normal d-block">
                    Pin NKS <i className="float-end bi bi-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="clearfix"></div>
          </div>

          <div className="main-container container">
            {/* <!-- list pages --> */}
            <div className="card shadow-sm mb-4">
              <ul className="list-group list-group-flush bg-none">
                <li className="list-group-item" onClick={logout}>
                  <a className="text-normal d-block">
                    Log Out<i className="float-end bi bi-box-arrow-left"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="clearfix"></div>
          </div>
          {/* <!-- main page content ends --> */}
        </div>
      </main>
    </>
  );
}

export default MenuProfilPage;
