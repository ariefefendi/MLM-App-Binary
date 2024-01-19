import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MaterialVerifyOtp(props) {
  let R = props.RecordCard;
  return (
    <>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-12 col-md-6 col-lg-5 col-xl-3 mx-auto align-self-center text-center py-4">
            <h1 className="mb-4 text-color-theme">Verify OTP</h1>
            <p className="text-muted mb-4">
              Verify OTP sent to your provided email address
            </p>

            <div className="form-floating is-valid mb-3">
              <input
                type="number"
                className="form-control"
                id="otp"
              />
              <label for="otp">Enter OTP</label>
            </div>
            <Link to={R.link}>
            <button
              type="button"
              className="btn btn-default w-75 h-75 mb-4 shadow"
              onclick="window.location.replace('index.html');"
            >
              VERIFY
            </button>
            </Link>
          </div>
          <div className="col-12 text-center mt-auto">
            <div className="row justify-content-center footer-info">
              <div className="col-auto text-center">
                <span className="progressstimer">
                  <img src={require("../img/progress.png")} alt="" />
                  <span className="timer" id="timer">
                    3:00
                  </span>
                </span>
                <br />
                <p className="mb-3">
                  <span className="text-muted">Didn't received yet?</span>{" "}
                  <a href="">Resend OTP</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MaterialVerifyOtp;
