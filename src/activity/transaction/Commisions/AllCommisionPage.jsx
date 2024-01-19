import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Header from "../../../components/layouts/Header";
import ListViewMaterial_02 from "../../../components/material/ListViewMaterial_02";
import helpers from "../../../components/helpers/helpers";

function SettingPage() {
  const navigate = useNavigate();

  const checkAuth = () => {
    //check get storage
    // console.log(sessionStorage.getItem("token", true));
    let check = helpers.checkTokenAuth();
    check != true ? navigate("/loginpage") : console.log("Allow this Page");
  };

  const navigateTo = () => {
    navigate("/Dashboard", { replace: true });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      <main
        className="container-fluid h-100"
        style={{ minHeight: "660px", paddingTop: "85.7188px" }}
      >
        <div className="row h-100 overflow-auto">
          <header className="header position-fixed">
            <div className="row">
              <Header
                material={{
                  title: "All Commision Page",
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
          <div className="row mb-3">
            <div className="col-12 px-0">
              <ul className="list-group list-group-flush bg-none">
                <ListViewMaterial_02
                  dt-label="List-Data-Commission"
                  RecordCard={{
                    Title: "Commission Partner",
                    Nominal: "Rp. 200.000",
                    Date: "Rabu, 18-06-2023, 05:23",
                    IconCard: "assets/img/company5.png",
                  }}
                />
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SettingPage;
