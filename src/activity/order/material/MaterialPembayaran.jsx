import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Select from "react-select";

function Timer({ eventDate }) {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        getTimeDifference(eventDate);
        const interval = setInterval(() => getTimeDifference(eventDate), 1000);
        return () => clearInterval(interval);
    }, [eventDate]);

    const leadingZero = (num) => {
        return num < 10 && num > 0 ? '0' + num : num;
    };

    const getTimeDifference = (eventDate) => {
        const time = Date.parse(eventDate) - Date.parse(new Date());
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const seconds = Math.floor((time / 1000) % 60);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="clock">
                {leadingZero(hours)}-
            </div>
            <div className="clock">
                {leadingZero(minutes)}-
            </div>
            <div className="clock">
                {leadingZero(seconds)}
            </div>
        </div>
    );
}

function MaterialPembayaran(props) {
  const [option, setoption] = useState({});

  const options = [
    { value: "BNI", label: "BNI" },
    { value: "BRI", label: "BRI" },
  ];

  useEffect(() => {
    console.log(option);
  }, [options]);

  const navigate = useNavigate();
  let R = props.RecordCard;
  return (
    <>
      <div className="main-container">
        <div className="row text-center mb-3 position-relative">
          <h6 className="my-1 fs-20px">Selesikan Pembayran Dalam</h6>
          <Timer eventDate={R.timer} />
          <span>batas akhir pembayaran</span>
          <h6>Senin, 31 july 2023 12:50</h6>
        </div>
        <div className="row mt-0 mb-3">
          <div className="col-12 col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <p>BRI</p>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-11 col-md-10 col-sm-8 col-8 pe-0 mb-3">
                    <div className="form-floating is-valid">
                      <input type="text" className="form-control" id="rek" />
                      <label for="rek">Rek Pembayaran</label>
                    </div>
                  </div>
                  <div className="col-lg-1 col-md-2 col-sm-4 col-4 text-end mb-3">
                    <button type="button" className="btn btn-secondary h-100">
                      Salin
                    </button>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                    <div className="form-floating is-valid">
                      <input type="text" className="form-control" id="total" />
                      <label for="total">Total</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center mb-3 position-relative">
          <div className="col-6">
            <button
              type="button"
              className="btn btn-outline-danger w-100 h-100 mb-3"
            >
              Kembali
            </button>
          </div>
          <div className="col-6">
            <button type="button" className="btn btn-primary w-100 h-100 mb-3">
              Cek Status
            </button>
          </div>
          <div className="col-12">
            <button type="button" className="btn btn-success w-100 h-100 mt-3">
              Konfirmasi
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MaterialPembayaran;
