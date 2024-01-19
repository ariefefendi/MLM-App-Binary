import React, { useEffect, useState } from "react";

import Header from "../../../components/layouts/Header";
import UserList from "./UserList";

function MaterialAllAnggota(props) {
    let R = props.RecordCard;
  return (
    <>
      <div className="form-group form-floating mb-3">
        <input
          type="text"
          className="form-control "
          id="search"
          placeholder="Search"
        />
        <label className="form-control-label" for="search">
          Search...
        </label>
        <button type="button" className="text-color-theme tooltip-btn">
          <i className="bi bi-search"></i>
        </button>
      </div>

      <div className="card shadow-sm mb-3 py-4">
        <div className="col-12 col-md-6 col-lg-4 mx-auto align-self-center z-index-1 text-center">
          <div className="avatar avatar-80 rounded-circle mx-auto theme-bg mb-3">
            <img src="assets/img/user1.jpg" alt="" />
          </div>
          <h4 className="fs-6 fw-normal text-color-theme">
            List off Downline, from Maxartkiller
          </h4>
        </div>
      </div>

      {/* card UserList     */}
      <UserList />
    </>
  );
}

export default MaterialAllAnggota;
