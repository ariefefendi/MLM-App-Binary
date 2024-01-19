import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/ProfilMember.css";
import { Pagination, Autoplay } from "swiper/modules";
import { BrowserRouter, Link, redirect, useNavigate } from "react-router-dom";

function SwiperSplashScreen () {
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            stopOnLastSlide: true,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        onReachEnd={() => {
          console.log("reach end");
          setTimeout(() => {
            navigate("/loginpage");
          }, 2500)
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="swiper-slide">
            <div class="row h-100">
              <div class="col-11 col-md-8 col-lg-6 col-xl-4 mx-auto align-self-center text-center">
                <div class="row">
                  <div class="col-ld-6">
                    <img
                      src={require("../img/intro1.png")}
                      alt=""
                      class="mw-100 mx-auto mb-5"
                    />
                  </div>
                  <div class="col-ld-6">
                    <h1 class="text-color-theme mb-4">
                      Keep your eye on your budget
                    </h1>
                    <p class="size-18 text-muted">
                      Manage your daily expenses & track your incomes with easy
                      steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="swiper-slide">
            <div class="row h-100">
              <div class="col-11 col-md-8 col-lg-6 col-xl-4 mx-auto align-self-center text-center">
                <div class="row">
                  <div class="col-ld-6">
                    <img
                      src={require("../img/intro2.png")}
                      alt=""
                      class="mw-100 mx-auto mb-5"
                    />
                  </div>
                  <div class="col-ld-6">
                    <h1 class="text-color-theme mb-4">
                      Never feel low balance{" "}
                    </h1>
                    <p class="size-18 text-muted">
                      Best tracking & Future investment gives idea about
                      expenses risk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="swiper-slide">
            <div class="row h-100">
              <div class="col-11 col-md-8 col-lg-6 col-xl-4 mx-auto align-self-center text-center">
                <div class="row">
                  <div class="col-ld-6">
                    <img
                      src={require("../img/intro3.png")}
                      alt=""
                      class="mw-100 mx-auto mb-5"
                    />
                  </div>
                  <div class="col-ld-6">
                    <h1 class="text-color-theme mb-4">
                      Ask for money in emergency{" "}
                    </h1>
                    <p class="size-18 text-muted">
                      If you really get tie, Its simple to ask for help &
                      support from contacts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSplashScreen;
