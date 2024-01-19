import React from "react";
import Header from "../../components/layouts/Header";
import { useNavigate } from "react-router-dom";

import CardOrder from "../../components/material/CardOrder";

function AllAchievementPage() {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/Dashboard", { replace: true });
  };

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
                  title: "All Achievement Page",
                  bi_icon: "bi bi-arrow-left",
                  link: "/dashboard",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
            <div className="main-container">
              <div className="row mt-0 mb-3">
                <CardOrder
                  type={"Acievement"}
                  RecordCard={{
                    Order: "One Start",
                    Posisi: "50 x 50",
                    Deskripsi: "Anda sudah mencapai one start",
                    linkNote : "/DetailAchievement",
                  }}
                />
              </div>
            </div>
          </header>
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

export default AllAchievementPage;
