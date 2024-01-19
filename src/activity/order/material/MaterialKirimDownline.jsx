import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Select from "react-select";

function MaterialKirimDownline(props) {
  const [Ekpedisioption, SetEkpedisioption] = useState({});
  const [Pengirimanoption, SetPengirimanoption] = useState({});

  const Ekpedisi = [
    { value: "JNE", label: "JNE" },
    { value: "JNT", label: "JNT" },
  ];

  const Pengiriman = [
    { value: "Reguler", label: "Reguler" },
    { value: "Premium", label: "Premium" },
  ];

  useEffect(() => {
    console.log(Ekpedisioption);
    console.log(Pengirimanoption);
  }, [Ekpedisi, Pengiriman]);

  const navigate = useNavigate();
  let R = props.RecordCard;
  return (
    <>
      <div className="main-container">
        <div className="row text-start mb-3 position-relative">
          <h6 className="my-1 fs-17px opacity-75">
            Anda akan melakukan Reaped Order
          </h6>
          <h6 className="my-1 fs-17px opacity-75">Untuk :</h6>
        </div>
        <div className="form-floating is-valid mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            id="username"
            value="Muhammad Habli Khuqma"
          />
          <label for="NamaLengkap">Nama Lengkap</label>
        </div>
        <div className="form-floating is-valid mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            id="username"
            value="Mangunsuman, Siman, Ponorogo"
            readOnly
          />
          <label for="NIK">Kota</label>
        </div>

        <Select
          options={Ekpedisi}
          onChange={(choice) => SetEkpedisioption(choice)}
          defaultValue={Ekpedisi[1]}
          className="mb-2"
        />

        <Select
          options={Pengiriman}
          onChange={(choice) => SetPengirimanoption(choice)}
          defaultValue={Pengiriman[1]}
          className="mb-2"
        />

        <div className="gap-2 d-md-flex justify-content-md-end btn-text-right">
          <button
            type="button"
            className="btn btn-primary h-50 next"
            onClick={() => navigate(R.LinkDownline)}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default MaterialKirimDownline;
