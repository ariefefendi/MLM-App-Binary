import React from "react";

// import "../css/AllAnggota.css";

function CardProfil(props) {
  let R = props.RecordCard;
  let type = props.type;
  if (type == "ProfilPage") {
    return (
      <>
        <div className="card shadow-sm mb-3">
          <div className="card-header">
            <div className="d-flex">
              <div className="me-4">
                <figure className="avatar avatar-60 rounded-10">
                  <img src="assets/img/user1.jpg" alt="" />
                </figure>
              </div>
              <div className="px-0 align-self-end">
                <h3 className="mb-0 text-color-theme">{R.Name}</h3>
                <p className="text-muted ">{R.Prestasi}</p>
              </div>
              <div className="ms-auto">
                <button
                  type="button"
                  className="btn btn-secondary text-white shadow-sm rounded-10 h-100 px-1-3"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="bi bi-cash-stack"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <p className="text-muted ">
              <tr>
                <td>
                  <h6 className="pb-2 fs-6 fw-normal line">Id Member</h6>
                </td>
                <td className="mx-5">
                  <h6 className="pb-2 fs-6 fw-normal line">:</h6>
                </td>
                <td>
                  <h6 className="pb-2 fs-6 fw-normal line">{R.idMember}</h6>
                </td>
              </tr>

              <tr>
                <td>
                  <h6 className="pb-2 fs-6 fw-normal line">Id Reg</h6>
                </td>
                <td className="mx-5">
                  <h6 className="pb-2 fs-6 fw-normal line">:</h6>
                </td>
                <td>
                  <h6 className="pb-2 fs-6 fw-normal line">{R.idReg}</h6>
                </td>
              </tr>

              <tr>
                <td>
                  <h6 className="pb-2 fs-6 fw-normal line">Full Name</h6>
                </td>
                <td className="mx-5">
                  <h6 className="pb-2 fs-6 fw-normal line">:</h6>
                </td>
                <td>
                  <h6 className="pb-2 fs-6 fw-normal line">{R.FullName}</h6>
                </td>
              </tr>

              <tr>
                <td>
                  <h6 className="pb-2 fs-6 fw-normal line">Alamat</h6>
                </td>
                <td className="mx-5">
                  <h6 className="pb-2 fs-6 fw-normal line">:</h6>
                </td>
                <td>
                  <h6 className="pb-2 fs-6 fw-normal line">{R.Alamat}</h6>
                </td>
              </tr>

              <tr>
                <td>
                  <h6 className="pb-2 fs-6 fw-normal line">Rek</h6>
                </td>
                <td className="mx-5">
                  <h6 className="pb-2 fs-6 fw-normal line">:</h6>
                </td>
                <td>
                  <h6 className="pb-2 fs-6 fw-normal line">{R.Rek}</h6>
                </td>
              </tr>
            </p>
            <div className="row mr-2">
              <div className="col-lg-11 col-md-10 col-sm-8 col-8 pe-0">
                <div className="form-floating is-valid">
                  <input
                    type="text"
                    className="form-control"
                    id="otp"
                  />
                  <label for="otp">Enter OTP</label>
                </div>
              </div>
              <div className="col-lg-1 col-md-2 col-sm-4 col-4 text-end p-left">
                <button type="button" className="btn btn-primary h-100">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <style>{`
      .p-left{
        padding-left: 11px !important;
      }
      `}</style>
      </>
    );
  } else if (type == "ProfilMemberPage") {
    return (
      <>
        <div className="card shadow-sm mb-4">
          <div className="card-header">
            <div className="row">
              <div className="col-auto">
                <figure className="avatar avatar-60 rounded-10">
                  <img src="assets/img/user1.jpg" alt="" />
                </figure>
              </div>
              <div className="col px-0 align-self-center">
                <h3 className="mb-0 text-color-theme">{R.nama}</h3>
                <p className="text-muted ">{R.Prestasi}</p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <p className="text-muted ">
              <tr>
                <td>
                  <h6 className="pb-2 fs-6 fw-normal line">Alamat</h6>
                </td>
                <td className="mx-5">
                  <h6 className="pb-2 fs-6 fw-normal line">:</h6>
                </td>
                <td>
                  <h6 className="pb-2 fs-6 fw-normal line">{R.alamat}</h6>
                </td>
              </tr>

              <tr>
                <td>
                  <h6 className="pb-2 fs-6 fw-normal line">Domisili</h6>
                </td>
                <td className="mx-5">
                  <h6 className="pb-2 fs-6 fw-normal line">:</h6>
                </td>
                <td>
                  <h6 className="pb-2 fs-6 fw-normal line">{R.domisili}</h6>
                </td>
              </tr>

              <tr>
                <td>
                  <h6 className="pb-2 fs-6 fw-normal line">Agama</h6>
                </td>
                <td className="mx-5">
                  <h6 className="pb-2 fs-6 fw-normal line">:</h6>
                </td>
                <td>
                  <h6 className="pb-2 fs-6 fw-normal line">{R.agama}</h6>
                </td>
              </tr>
            </p>
          </div>

          <div className="row mb-2">
            <div className="col-6 col-md-6">
              <div className="card shadow-sm mb-2 ms-2">
                <div className="card-body">
                  <div className="row">
                    <div className="col-auto px-0">
                      <div className="avatar avatar-40 bg-success text-white shadow-sm rounded-10-end">
                        <i className="bi bi-star"></i>
                      </div>
                    </div>
                    <div className="col d-flex align-items-center d-flex justify-content-center">
                      <p className="fs-4 fw-normal text-color-theme">
                        {R.pointkanan}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="card shadow-sm mb-2 me-2">
                <div className="card-body">
                  <div className="row">
                    <div className="col d-flex align-items-center d-flex justify-content-center">
                      <p className="fs-4 fw-normal text-color-theme">
                        {R.poinkiri}
                      </p>
                    </div>
                    <div className="col-auto px-0">
                      <div className="avatar avatar-41 bg-success text-white shadow-sm rounded-10-start">
                        <i className="bi bi-cash-stack"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default CardProfil;
