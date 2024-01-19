import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardOrder = (props) => {
  const navigate = useNavigate();
  let R = props.RecordCard;
  let T = props.RecordCard;
  let D = props.RecordCard;
  let type = props.type;
  if (type == "ListOrder") {
    return (
      <div className="col-12 col-md-4">
        <div className="card mb-4 text-center shadow-sm">
          <div className="card-body">
            <i className="avatar avatar-60 bg-danger-light text-danger rounded-circle bi bi-building   fs-4 mb-2"></i>
            <h6 className="mb-3">{R.UpgradePaket}</h6>
            <p className="text-muted mb-0">{R.Deskripsi}</p>
          </div>
          <div className="card-footer text-center">
            <Link to={R.link}>
              <button
                type="button"
                className="btn btn-default btn-lg w-100"
                onClick={() => navigate(R.link)}
              >
                Beli Sekarang
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (type == "OrderMenu") {
    return (
      <div className="col-12 px-0">
        <ul className="list-group list-group-flush bg-none">
          <li class="list-group-item border-none py-2">
            <div className="card">
              <div className="card-body">
                <div class="row">
                  <div class="col-auto align-self-center">
                    <div class="avatar avatar-40 shadow rounded-10 ">
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div class="col align-self-center px-0">
                    <p class="text-color-theme mb-0">{T.Order}</p>
                    <p class="text-muted size-12-5">{T.Deskripsi}</p>
                  </div>
                  <div class="col-auto align-self-center px-2">
                    <a href="transaction-detail.html">
                      <i class="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  } else if (type == "Acievement") {
    return (
      <div className="col-12 px-0">
        <ul className="list-group list-group-flush bg-none">
          <li class="list-group-item border-none py-2">
            <div className="card" onClick={() => navigate(T.linkNote)}>
              <div className="card-body">
                <div class="row">
                  <div class="col-auto align-self-center">
                    <div class="avatar avatar-40 shadow rounded-10 ">
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div class="col align-self-center px-0">
                    <p class="text-color-theme mb-1">{T.Order}</p>
                    <p class="text-muted size-12-5 mb-0">{T.Posisi}</p>
                    <p class="text-muted size-12-5">{T.Deskripsi}</p>
                  </div>
                  <div class="col-auto align-self-center px-2">
                    <a href="transaction-detail.html">
                      <i class="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  } else if (type == "DetailAchievement") {
    return (
      <div>
        <div className="col-12 px-0 mb-3">
          <div className="card">
            <div className="card-body">
              <div class="row">
                <div class="col-auto align-self-center">
                  <div class="avatar avatar-40 shadow rounded-10 ">
                    <img src="" alt="" />
                  </div>
                </div>
                <div class="col align-self-center px-0">
                  <p class="text-color-theme mb-1">{D.Order}</p>
                  <p class="text-muted size-12-5 mb-0">{D.Posisi}</p>
                  <p class="text-muted size-12-5">{D.Deskripsi}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* persyratan */}
        <div className="row">
          <div className="col">
            <h6 className="title">Persyartan</h6>
          </div>
        </div>

        <div className="card shadow-sm mb-3">
          <div className="card-body">
            <p className="text-muted ">
              <ol>
                <li>
                  <h6 className="pb-2 fs-6 fw-normal line">{D.Deskripsi}</h6>
                </li>
              </ol>
            </p>
          </div>
        </div>

        {/* Deskripsi */}
        <div className="row">
          <div className="col">
            <h6 className="title">Deskripsi</h6>
          </div>
        </div>

        <div className="card shadow-sm mb-3">
          <div className="card-body">
            <p className="text-muted">
              <ol>
                <li>
                  <h6 className="pb-2 fs-6 fw-normal line">{D.Deskripsi}</h6>
                </li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default CardOrder;
