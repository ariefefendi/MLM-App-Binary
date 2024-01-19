import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/ProfilMember.css";

const SwiperMember = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 4.9,
          },
          280:{
            slidesPerView:4,
          },
          400:{
            slidesPerView:6,
          },
          639: {
            slidesPerView: 9,
          },
          820:{
            slidesPerView:9,
          },
          1000:{
            slidesPerView:10,
          },
          1500:{
            slidesPerView:10
          },
          1700:{
            slidesPerView:10
          }
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-slide">
            <a href="profile.html" className="">
              <figure className="avatar avatar-50 shadow-sm mb-1 rounded-11">
                <img src="assets/img/user3.jpg" alt="" />
              </figure>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide">
            <a href="profile.html" className="">
              <figure className="avatar avatar-50 shadow-sm mb-1 rounded-11">
                <img src="assets/img/user1.jpg" alt="" />
              </figure>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide">
            <a href="profile.html" className="">
              <figure className="avatar avatar-50 shadow-sm mb-1 rounded-11">
                <img src="assets/img/user3.jpg" alt="" />
              </figure>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide">
            <a href="profile.html" className="">
              <figure className="avatar avatar-50 shadow-sm mb-1 rounded-11">
                <img src="assets/img/user1.jpg" alt="" />
              </figure>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide">
            <a href="profile.html" className="">
              <figure className="avatar avatar-50 shadow-sm mb-1 rounded-11">
                <img src="assets/img/user3.jpg" alt="" />
              </figure>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-slide">
            <a href="profile.html" className="">
              <figure className="avatar avatar-50 shadow-sm mb-1 rounded-11">
                <img src="assets/img/user2.jpg" alt="" />
              </figure>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-slide">
            <a href="profile.html" className="">
              <figure className="avatar avatar-50 shadow-sm mb-1 rounded-11">
                <img src="assets/img/user3.jpg" alt="" />
              </figure>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide">
            <a href="profile.html" className="">
              <figure className="avatar avatar-50 shadow-sm mb-1 rounded-11">
                <img src="assets/img/user3.jpg" alt="" />
              </figure>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide">
            <a href="profile.html" className="">
              <figure className="avatar avatar-50 shadow-sm mb-1 rounded-11">
                <img src="assets/img/user3.jpg" alt="" />
              </figure>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide">
            <a href="profile.html" className="">
              <figure className="avatar avatar-50 shadow-sm mb-1 rounded-11">
                <img src="assets/img/user3.jpg" alt="" />
              </figure>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperMember;
