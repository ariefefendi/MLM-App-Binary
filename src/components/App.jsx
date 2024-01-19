import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import {Button, Form, FloatingLabel, Tab, Tabs} from 'react-bootstrap';
import $ from "jquery";

import Head from "./layouts/head";
import Header from "./layouts/Header";
import Loading from "./layouts/loading";
import SideBar from "./layouts/sideBar";
import Toolbar from "./layouts/toolbar";
// import Tabbar from "./layouts/tabbar";
import Footer from "./layouts/footer";
import Dashboard from ".././activity/Dashboard";
import SliderCard from ".././components/material/sliderCard";
// import AppBar from "./layouts/AppBar";
import helpers from "./helpers/helpers";

import "./../assets/css/dashboard.css";

function App() {
  const navigate = useNavigate();
  //   const [dataModel, setDataModel] = useState([])
  const [pageTitle, setPageTitle] = useState("Halaman Dashboard");
  const [update, setUpdate] = useState(false);
  const [mode, setMode] = useState("form");
  const [processing, modeProcessing] = useState(true);

  const [selectedRows, setSelectedRows] = React.useState([]);
  const [title, setTitle] = useState("List data Pengguna");
  const [toggleCleared, setToggleCleared] = React.useState(false);

  // function back
  const goBack = (key) => {
    setMode("list");
    setupTitle(update);
    console.log(mode);
    setUpdate(false);
    // setDataModelUpdate([]);
    console.log(" ========== ");
    console.log("mode : " + mode + ", Mode_update : " + update);
  };
  // button mode Update
  // const ButtonMode = () => {
  //   return (
  //     (update == true) ?
  //     <div classNameNameName="py-2">
  //     <Button type="button" onClick={(key) => goBack('list')} variant="outline-secondary">Back</Button>
  //     <Button type="button"
  //     onClick={(key) => doSave(dataModelUpdate)}
  //     variant="outline-primary mx-2" >Update</Button>
  //     <Button type="button" variant="outline-danger">Delete</Button>
  //     </div>
  //     :
  //     <div classNameNameName="py-2">
  //     <Button type="button"
  //     onClick={(key) => doSave(dataModelUpdate)}
  //     variant="outline-primary">Save</Button>
  //     </div>
  //   )
  // }

  // get data all
  // const getdataAll = async page => {
  //   modeProcessing(true)
  //   const res = await axios.get(`https://restcountries.com/v2/all`)
  //   const res = await axios.get(`https://aplikasi.whusnet.com/contoh/ApiContoh/getallpengguna`)
  //     console.log(res.data)
  //     setDataModel(res.data.Data)
  //     setDataModelUpdate(res.data.Data)
  //     modeProcessing(false)
  //   };

  // logic conditions per field.
  // const conditionalRowStyles = [
  //   { when: row => row.KEC == 'PONOROGO',  style: helpers.green() },
  //   { when: row => row.KEC == 'KAUMAN',style: helpers.warning() }
  // ]

  // action for delete.

  // for search data

  // save and update data

  // custom classNameNameies
  const customclassNameNameies = () => {};

  const setupTitle = (update) => {
    if (mode === "form" && update === true) {
      setTitle("List data Pengguna");
    }
    if (mode === "list" && update === false) {
      setTitle("Form Update same data");
    }
  };

  //check auth
  const checkAuth = () => {
    // get item from storage
    // console.log(sessionStorage.getItem("token", true));
    let check = helpers.checkTokenAuth();
    check != true ? navigate("/loginpage") : console.log("Allow this Page");
  };

  // function select

  useEffect(() => {
    // search ? getFilterDataAll(search) : getdataAll();
    // setupTitle(update)
    // setMode('list')
    checkAuth();
  }, []);

  // adding initialize
  $(document).ready(function () {
    modeProcessing(false);
    console.log(processing);
  });

  return (
    <>
      <Head MainModel={{ title: pageTitle }} />
      {processing ? (
        <Loading />
      ) : (
        <>
          <SideBar />
          <main
            className="h-100"
            style={{
              minHeight: "660px",
              paddingTop: "85.7188px",
              paddingBottom: "50px",
            }}
          >
            <header className="header position-fixed">
              <div className="row">
                <Header
                  material={{
                    title: "NKS",
                    bi_icon: "bi bi-list",
                    link: "/settingPage",
                    logoVisible: true,
                    classLink: "btn btn-light btn-44 menu-btn",
                    iconNotifVisible: true,
                    linkNotif: "/NotificationPage",
                  }}
                />
              </div>
            </header>
            <Dashboard />
            <Toolbar />
            {/* <SliderCard/> */}
          </main>

          <div class="position-fixed bottom-0 start-50 translate-middle-x  z-index-10">
            <div
              class="toast mb-3 fade hide"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              id="toastinstall"
              data-bs-animation="true"
            >
              <div class="toast-header">
                <img
                  src="assets/img/favicon32.png"
                  class="rounded me-2"
                  alt="..."
                />
                <strong class="me-auto">Install PWA App</strong>
                <small>now</small>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
              <div class="toast-body">
                <div class="row">
                  <div class="col">
                    Click "Install" to install PWA app &amp; experience
                    indepedent.
                  </div>
                  <div class="col-auto align-self-center ps-0">
                    <button class="btn-default btn btn-sm p-0" id="addtohome">
                      Install
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
