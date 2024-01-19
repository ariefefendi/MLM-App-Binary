import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Header from "../../../components/layouts/Header";
import MaterialPembayaran from "../material/MaterialPembayaran";
import helpers from "../../../components/helpers/helpers";

import ReactDOM from "https://esm.sh/react-dom@18";

function SelesaikanPembayaranSayaRO() {
  const navigate = useNavigate();

  const [events, setEvents] = useState();

  //check auth
  const checkAuth = () => {
    // get item from storage
    // console.log(sessionStorage.getItem("token", true));
    let check = helpers.checkTokenAuth();
    check != true ? navigate("/loginpage") : console.log("Allow this Page");
  };

  const addNewEvent = () => {
    const currentDateTime = new Date();
    const datetomorow = new Date(currentDateTime.getTime() + 86400000); // + 1 day in ms
    setEvents(datetomorow);
  };
  useEffect(() => {
    addNewEvent();
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
                  title: "Selesaikan Pembayaran",
                  bi_icon: "bi bi-arrow-left",
                  link: "/DetailTransaksiSayaRO",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>
          <MaterialPembayaran
            RecordCard={{
              timer: events,
            }}
          />
        </div>
      </main>
    </>
  );
}

export default SelesaikanPembayaranSayaRO;
