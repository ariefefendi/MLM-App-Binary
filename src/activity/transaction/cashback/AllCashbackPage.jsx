import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Header from "../../../components/layouts/Header";
import ListViewMaterial_01 from "../../../components/material/ListViewMaterial_01";
import helpers from "../../../components/helpers/helpers";

function SettingPage() {
  const navigate = useNavigate();
  // set state model  (dataModel)

  const checkAuth = () => {
    //check get storage
    // console.log(sessionStorage.getItem("token", true));
    let check = helpers.checkTokenAuth();
    check != true ? navigate("/loginpage") : console.log("Allow this Page");
  };

  const getdataAll = () => {
    // ajax get data all
    // console log response
    // push set model.
    // setDataModel
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
                  title: "All Cashback Page",
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

          <div className="tab-pane fade show active" id="cardsCashback">
            {/* <MainTitleMaterial
              RecordCard={{ Title: "Cashback", url: "AllCashbackPage" }}
            /> */}
            <ListViewMaterial_01
              dt-label="List-Data-cashback"
              RecordCard={{
                Title: "Umroh bersama Kautsar",
                Nominal: "2.000.000",
                DueDate: "24/07/23",
                IconCard: "assets/img/company4.jpg",
                Link : "/DetailCashback",
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default SettingPage;
