import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./css/ProfilMember.css";

import SwiperMember from "./material/SwiperMember";
import Header from "../../components/layouts/Header";
import CardProfil from "./material/CardProfil";

function ProfilMemberPage() {
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
                  title: "Profil Detail",
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

          <div className="main-container">
            {/* <!-- user information --> */}
            <CardProfil
            type={"ProfilMemberPage"}
            RecordCard={{
              nama : 'Maxartkiller',
              Prestasi : 'Double Diamond',
              alamat : 'Jl.Suka Rame no:40',
              domisili : 'Sleman, Yogyakarta',
              agama : 'Islam',
              pointkanan : '20',
              poinkiri : '20',
            }}
            />
          </div>

          {/* swiper member list */}
          <div className="row mb-3">
            <div className="col">
              <h6 className="title">Anggota</h6>
            </div>
            <div className="col-auto">
              <a href="userlist.html" className="small">
                View all
              </a>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              {/* <!-- swiper users connections --> */}
              <div className="swiper-container connectionwiper">
                <div className="swiper-wrapper">
                  <SwiperMember />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProfilMemberPage;
