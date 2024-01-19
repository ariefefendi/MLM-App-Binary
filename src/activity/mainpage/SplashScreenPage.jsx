import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SwiperSplashScreen from "./material/SwiperSplashScreen";


function SplashScreenPage() {
  return (
    <>
      <main
        className="body-scroll h-100 inline-block"
        data-page="users"
        style={{ minHeight: "100%", paddingTop: "85.7188px" }}
      >
        <div className="h-100 has-header">
        <Link to={"/loginpage"}>
          <a href="signin.html" class="skipbtn">
            Skip
          </a>
          </Link>

          {/* <!-- Swiper --> */}
          <div class="swiper-container introswiper">
            <div class="swiper-wrapper">
              
              <SwiperSplashScreen/>
              
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SplashScreenPage;
