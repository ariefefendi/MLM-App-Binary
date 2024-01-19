import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Header from "../../components/layouts/Header";
import helpers from "../../components/helpers/helpers";

function NotificationPage() {
  const navigate = useNavigate();

  const checkAuth = () => {
    //check get storage
    // console.log(sessionStorage.getItem("token", true));
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
        <div className="h-100 has-header">
          <header className="header position-fixed">
            <div className="row">
              <Header
                material={{
                  title: "Notification",
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

          <div class="main-container container">
            <div class="row">
              <div class="col-12 px-0">
                <div class="list-group list-group-flush bg-none">
                  <a class="list-group-item bg-white">
                    <div class="row">
                      <div class="col-auto">
                        <div class="avatar avatar-44 coverimg rounded-10">
                          <img src="assets/img/user1.jpg" alt="" />
                        </div>
                      </div>
                      <div class="col align-self-center ps-0">
                        <p class="mb-1">
                          <b>Ankit Trivedi</b>, <b>John MAcMillan</b> and{" "}
                          <b>36 others</b> are also order from same restaurant{" "}
                        </p>
                        <p class="size-12 text-muted">2 Days ago</p>
                      </div>
                    </div>
                  </a>
                  <div class="list-group-item bg-light text-center py-2 text-mute">
                    This month
                  </div>
                  <a class="list-group-item bg-white">
                    <div class="row">
                      <div class="col-auto">
                        <div class="avatar avatar-44 coverimg rounded-10">
                          <img src="assets/img/user3.jpg" alt="" />
                        </div>
                      </div>
                      <div class="col align-self-center ps-0">
                        <p class="mb-1">
                          <b>Williums</b> Will deliver your order
                        </p>
                        <p class="size-12 text-muted">last week</p>
                      </div>
                    </div>
                  </a>
                  <a class="list-group-item bg-white">
                    <div class="row">
                      <div class="col-auto">
                        <div class="avatar avatar-44 coverimg rounded-10">
                          <img src="assets/img/user1.jpg" alt="" />
                        </div>
                      </div>
                      <div class="col align-self-center ps-0">
                        <p class="mb-1">
                          <b>johnson</b> will deliver your order
                        </p>
                        <p class="size-12 text-muted">2 Week ago</p>
                      </div>
                    </div>
                  </a>
                  <a class="list-group-item">
                    <div class="row">
                      <div class="col-auto">
                        <div class="avatar avatar-44 coverimg rounded-10">
                          <img src="assets/img/user2.jpg" alt="" />
                        </div>
                      </div>
                      <div class="col align-self-center ps-0">
                        <p class="mb-1">
                          <b>Maxartkillers</b> will deliver your order
                        </p>
                        <p class="size-12 text-muted">2 Week ago</p>
                      </div>
                    </div>
                  </a>
                  <a class="list-group-item">
                    <div class="row">
                      <div class="col-auto">
                        <div class="avatar avatar-44 coverimg rounded-10">
                          <img src="assets/img/user3.jpg" alt="" />
                        </div>
                      </div>
                      <div class="col align-self-center ps-0">
                        <p class="mb-1">
                          <b>Silvasaa </b> is now available to take your order.
                          tap to continue order in your cart.
                        </p>
                        <p class="size-12 text-muted">3 Week ago</p>
                      </div>
                    </div>
                  </a>
                  <div class="list-group-item bg-light text-center py-2 text-mute">
                    Earlier
                  </div>
                  <a class="list-group-item">
                    <div class="row">
                      <div class="col-auto">
                        <div class="avatar avatar-44 coverimg rounded-10">
                          <img src="assets/img/user2.jpg" alt="" />
                        </div>
                      </div>
                      <div class="col align-self-center ps-0">
                        <p class="mb-1">
                          <b>Alic Boddy</b> will deliver your order
                        </p>
                        <p class="size-12 text-muted">1 month ago</p>
                      </div>
                    </div>
                  </a>
                  <a class="list-group-item">
                    <div class="row">
                      <div class="col-auto">
                        <div class="avatar avatar-44 coverimg rounded-10">
                          <img src="assets/img/user3.jpg" alt="" />
                        </div>
                      </div>
                      <div class="col align-self-center ps-0">
                        <p class="mb-1">
                          <b>John</b> will deliver your order
                        </p>
                        <p class="size-12 text-muted">2 month ago</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style>{`
      .size-12 {
        font-size: 12px;
    }
      `}</style>
    </>
  );
}

export default NotificationPage;
