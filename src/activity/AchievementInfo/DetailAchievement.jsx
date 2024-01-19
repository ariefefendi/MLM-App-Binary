import React from "react";
import Header from "../../components/layouts/Header";
import { useNavigate } from "react-router-dom";

import CardOrder from "../../components/material/CardOrder";

function DetailAchievement() {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/Dashboard", { replace: true });
  };

  return (
    <>
      <main
        className="container-fluid h-100"
        style={{ minHeight: "100%", paddingTop: "85.7188px" }}
      >
        <div className="row h-100 overflow-auto">
          <header className="header position-fixed">
            <div className="row">
              <Header
                material={{
                  title: "Detail Achievement",
                  bi_icon: "bi bi-arrow-left",
                  link: "/AllAchievementPage",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>

          <div className="main-container">
              <div className="row mt-0 mb-3">
                <CardOrder
                  type={"DetailAchievement"}
                  RecordCard={{
                    Order: "One Start",
                    Posisi: "50 x 50",
                    Deskripsi: "Anda sudah mencapai one start",

                    // persyaratan
                    NoPersyaratan : "1",
                    Pesyaratan : ".......",

                    // Deskripsi
                    NoDeskripsi : "1",
                    Deskripsi : "........",
                  }}
                />
              </div>
            </div>
        </div>
      </main>
      <style>{`
      .size-12-5{
        font-size: 12.5px;
      }
      .rounded-10 {
        border-radius: 25px;
      }
      `}</style>
    </>
  );
}

export default DetailAchievement;
