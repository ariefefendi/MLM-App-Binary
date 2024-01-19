import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import helpers from "../../components/helpers/helpers";

// import "./css/Profil.css";

import Header from "../../components/layouts/Header";
import UserList from "./material/UserList";
import ModalChangeProfil from "./material/ModalChangeProfil";
import CardProfil from "./material/CardProfil";

function ProfilPage() {
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
                  title: "Profil Pengguna",
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
          <div className="main-container">
            {/* <!-- user information --> */}
            <CardProfil
              type={"ProfilPage"}
              RecordCard={{
                Name: "Maxartkiller",
                Prestasi: "Double Diamond",
                idMember: "xxxxxxxxx",
                idReg: "xxxxxxxxx",
                FullName: "Maxartkiller",
                Alamat: "Jl.Suka Rame no.40",
                Rek: "9870 9860 4565 3576 8764",
              }}
            />
          </div>

          {/* modal change profil */}
          <ModalChangeProfil />

          {/* <!-- summary --> */}
          <div className="row mb-2">
            <div className="col-6 col-md-6">
              <div className="card shadow-sm mb-2 ms-2">
                <div className="card-body form-floating is-valid">
                  <div className="row">
                    <div className="col d-flex align-items-center">
                      <div className="row">
                        <p className="fw-light mb-0 size">Left Member</p>
                        <p className="fs-4 fw-normal text-color-theme">20</p>
                      </div>
                    </div>
                    <div className="col-auto px-0">
                      <div className="avatar avatar-41 bg-success text-white shadow-sm rounded-10-start">
                        <i className="bi bi-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="card shadow-sm mb-2 me-2">
                <div className="card-body form-floating is-valid">
                  <div className="row">
                    <div className="col d-flex align-items-center">
                      <div className="row">
                        <p className="fw-light mb-0 size">Right Member</p>
                        <p className="fs-4 fw-normal text-color-theme">20</p>
                      </div>
                    </div>
                    <div className="col-auto px-0 d-flex align-items-center">
                      <div className="avatar avatar-41 bg-success text-white shadow-sm rounded-10-start">
                        <i className="bi bi-cash-stack"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* swiper member list */}
          <div className="row mb-3">
            <div className="col">
              <h6 className="title">Anggota</h6>
            </div>
            <div className="col-auto">
              <Link to={"/AllAnggotaProfilePage"}>
                <a href="" className="small">
                  View all
                </a>
              </Link>
            </div>
          </div>

          {/* card memberlist */}
          <UserList />
        </div>
      </main>
      <style>{`
      .px-1-3 {
        padding-right:1.3rem !important;
        padding-left:1.3rem !important;
      }
      `}</style>
    </>
  );
}

export default ProfilPage;
