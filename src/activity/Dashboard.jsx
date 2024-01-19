import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

// import DarkMode_visible from ".././components/material/DarkModeMaterial";
import SliderAchievementCard from "../components/material/SliderAchievementCard";
import SliderInformationsCard from "../components/material/SliderInformationsCard";
import ListViewMaterial_01 from "../components/material/ListViewMaterial_01";
import ListViewMaterial_02 from "../components/material/ListViewMaterial_02";
import MainTitleMaterial from "../components/material/MainTitleMaterial";

import "./css/dashboard.css";
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container container">
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-auto">
              <figure className="avatar avatar-44 rounded-10">
                <img src="assets/img/user1.jpg" alt="" />
              </figure>
            </div>
            <div className="col px-0 align-self-center">
              <p className="mb-0 text-color-theme">Maxartkiller</p>
              <p className="text-muted size-12">New York City, US</p>
            </div>
            <div className="col-auto">
              <a
                className="btn btn-44 btn-light shadow-sm"
                onClick={() => navigate("/TransferPage")}
              >
                <i className="bi bi-plus-circle"></i>
              </a>
              <a
                className="btn btn-44 btn-default shadow-sm ms-1"
                onClick={() => navigate("/WithdrawPage")}
              >
                <i className="bi bi-arrow-down-circle"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="card theme-bg text-white border-0 text-center">
          <div className="card-body">
            <h1 className="display-1 my-2">100.00</h1>
            <p className="text-muted mb-2">Wallet Balance in USD</p>
          </div>
        </div>
      </div>

      {/* Achievement Card */}
      <div className="tab-pane fade show active" id="cards">
        <MainTitleMaterial
          RecordCard={{
            Title: "All Achievement Page",
            url: "AllAchievementPage",
          }}
        />
        {/* looping data slider */}
        <SliderAchievementCard
          dt-label="achievement-card"
          RecordCard={{
            AchievementCard: "Agen",
            IdReg: "FF 234 2234 11 2",
            FullName: "Sandy Yanuriawan",
            IconAchievement: "assets/img/masterocard.png",
            bgCard: "assets/img/card-achievement/card-design-agen-02.png",
          }}
        />
        {/* end looping */}

        <div
          dt-label="Trip-to-Achievement"
          className="col-12 col-md-12 col-lg-12 mb-4"
        >
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-auto">
                  <div className="avatar avatar-40 alert-warning text-warning rounded-circle">
                    <i className="bi bi-house"></i>
                  </div>
                </div>
                <div className="col align-self-center ps-0">
                  <div className="row">
                    <div className="col">
                      <p className="small text-muted text-color-theme fw-normal mb-0">
                        Trip To One Star
                      </p>
                      <p className="text-success">
                        200 <i>point</i>
                      </p>
                    </div>
                    <div className="col-auto text-end">
                      <p className="small text-muted mb-0">&nbsp;</p>
                      <p className="text-success">30%</p>
                    </div>
                  </div>

                  <div className="progress alert-warning h-4">
                    <div
                      className="progress-bar bg-warning w-50"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='row mb-3'>
          <div className='col'>
            <h6 className='title'>Commission</h6>
          </div>
          <div className='col-auto'>
            <a href='' className='small'>
              View all
            </a>
          </div>
        </div> */}
        <MainTitleMaterial
          RecordCard={{ Title: "Commission", url: "AllCommisionPage" }}
        />

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

        <div className="tab-pane fade show active" id="cardsCashback">
          {/* <SliderInformationsCard /> */}
          <MainTitleMaterial
            RecordCard={{ Title: "Cashback", url: "AllCashbackPage" }}
          />
          <ListViewMaterial_01
            dt-label="List-Data-cashback"
            RecordCard={{
              Title: "Umroh bersama Kautsar",
              Nominal: "2.000.000",
              DueDate: "24/07/23",
              IconCard: "assets/img/company4.jpg",
            }}
          />
        </div>
        {/* end id=cashback */}
      </div>
    </div>
  );
};

export default Dashboard;
