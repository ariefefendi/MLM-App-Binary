import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
import {
  writeStorage,
  deleteFromStorage,
  useLocalStorage,
} from "@rehooks/local-storage";
import ReactDOM from "react-dom";
import $ from "jquery";
import axios from "axios";
axios.defaults.baseURL = "https://staging.api.nks-freedom.id";
axios.defaults.headers.post["Content-Type"] = "application/json";
// import "./css/login.css";

function LoginPage() {
  const navigate = useNavigate();
  const [dataModel, setDataModel] = useState([]);

  const [items, setItems] = useState([]);
  const [items1, setItems1] = useState("");
  const [id, setId] = useState("");
  const [token, setToken] = useState("");
  const [valid, setValid] = useState("");
  const [countpass, setCountpass] = useState("");

  const [USERNAME, setUSERNAME] = useState("");
  const [PASSWORD, setPASSWORD] = useState("");

  const checkvalid = async (data) => {
    var username = data;
    if (data == "") {
      setValid("");
    } else {
      await axios.post("/api/checkvalidate", { username }).then((response) => {
        console.log(response.data.message);
        if (response.data.message == "notfound") {
          setValid(response.data.message);
          setUSERNAME(username);
        } else {
          setValid(response.data.message);
          setUSERNAME(username);
        }
      });
    }
  };

  if (valid == "notfound") {
    var Span1 = (
      <span class="badge rounded-pill bg-danger">Username Not found</span>
    );
  } else if (valid == "") {
    var Span1 = "";
  } else if (valid == "verived") {
    var Span1 = (
      <span class="badge rounded-pill bg-success">Account Verived</span>
    );
  } else {
    var Span1 = (
      <span class="badge rounded-pill bg-danger">Account Unverived</span>
    );
  }

  const login = async (data) => {
    // check mode update ?
    var username = USERNAME;
    var password = PASSWORD;
    if (username == "" || password == "") {
      Swal.fire({
        icon: "error",
        position: "bottom",
        // imageUrl: imgurl,
        imageWidth: 70,
        imageHeight: 70,
        html: "Harap Lengkapi Data Terlebih Dahulu",
        showConfirmButton: true,
        background: "#3ac79b",
        confirmButtonColor: "#fff",
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "custom-succes-buttton-color",
        },
        didOpen: () => {
          // Swal.showLoading()
        },
        willClose: () => {},
      });
    } else {
      await axios
        .post("/api/login", { username, password })
        .then((response) => {
          // console.log(response);
          if (
            response.data.data == 402 ||
            response.data.data == 403 ||
            response.data.data == 405
          ) {
            console.log(response.data.data);
            setCountpass(response.data.data);
            let message = response.data.message;
            Swal.fire({
              icon: "error",
              position: "bottom",
              // imageUrl: imgurl,
              imageWidth: 70,
              imageHeight: 70,
              html: "Oops! Something Wrong. Please try again " + message,
              showConfirmButton: true,
              background: "#3ac79b",
              confirmButtonColor: "#fff",
              confirmButtonText: "OK",
              customClass: {
                confirmButton: "custom-succes-buttton-color",
              },
              didOpen: () => {
                // Swal.showLoading()
              },
              willClose: () => {},
            });
          } else {
            // check status akun
            let STATUS = response.data.data["STATUS"];
            if (STATUS == "0") {
              sessionStorage.setItem("Register", "Register");
            } else {
              sessionStorage.setItem("FF", "FF");
            }
            // set session data
            let token = response.data.token;
            let ID_MEMBER = response.data.data["ID_MEMBER"];
            let FULLNAME = response.data.data["FULLNAME"];
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("ID_MEMBER", ID_MEMBER);
            sessionStorage.setItem("FULLNAME", FULLNAME);
            sessionStorage.getItem("token", true);
            sessionStorage.getItem("ID_MEMBER", true);
            sessionStorage.getItem("FULLNAME", true);
            sessionStorage.getItem("Register", true);
            sessionStorage.getItem("FF", true);

            // Redirect page.
            navigate("../Dashboard");
            swal("success", "ok! your login" + ID_MEMBER + " token : " + token);
          }
        });
    }
  };

  useEffect(() => {
    console.log(sessionStorage.getItem("token", true));
  }, []);

  return (
    <>
      <main
        className="body-scroll d-flex flex-column h-100 justify-content-center"
        style={{ minHeight: "100%", paddingTop: "85.7188px" }}
      >
        <div className="col-10 col-md-6 col-lg-4 col-xl-3 mx-auto align-self-center text-center py-4">
          <div className="col-12 text-center mb-auto px-0">
            <header className="header">
              <div className="row">
                <div className="col-auto"></div>
                <div className="col">
                  <div className="logo-small">
                    <img src="./assets/img/logo.png" alt="" />
                    <h5 className="logo-color">NKS</h5>
                  </div>
                </div>
                <div className="col-auto"></div>
              </div>
            </header>
          </div>
          <form className="was-validated needs-validation">
            <div className="form-group form-floating mb-3 is-valid">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={dataModel.USERNAME}
                onChange={(e) => checkvalid(e.target.value)}
              />
              <label className="form-control-label" htmlFor="USERNAME">
                Username
              </label>
            </div>

            <div className="form-group form-floating is-invalid mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={dataModel.PASSWORD}
                onChange={(e) => setPASSWORD(e.target.value)}
              />
              <label className="form-control-label" htmlFor="password">
                Password
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
            <p className="mb-3 text-center-forget-password">
              <Link to={"/ValidateEmailPage"}>Chat Admin</Link>
            </p>
            <button
              type="button"
              className="btn btn-sm btn-default w-75 h-45-px mb-4 shadow"
              onClick={login}
            >
              Login
            </button>
          </form>
          <p className="register-button justify-content-center footer-info">
            <Link to={"/RegisterPage"}>
              Register <i className="bi bi-arrow-right"></i>
            </Link>
          </p>
          <div className="d-flex justify-content-start">{Span1}</div>
        </div>
      </main>
      <style>{`
      .h-45-px{
        height: 45px !important;
      }
      .custom-succes-buttton-color{
        color : #3ac79b !important;
    }
      `}</style>
    </>
  );
}

export default LoginPage;
