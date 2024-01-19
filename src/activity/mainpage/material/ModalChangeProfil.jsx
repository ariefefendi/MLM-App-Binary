import { React, useState } from "react";
import ReactDOM from "react-dom";

// import "../css/AllAnggota.css";

import Form from "react-bootstrap/Form";

function ModalChangeProfil(props) {
  let R = props.Material;

  const [selected, setSelected] = useState("sama");

  const changeHandler = (e) => {
    setSelected(e.target.value);
  };

  console.log(selected);

  return (
    <>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Proflie
              </h5>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12 mb-3">
                  <Form.Group controlId="formFile">
                    <Form.Label>Foto ktp</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </div>

                <Form.Label>Profil</Form.Label>
                <div className="col-12">
                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="Nik"
                  />
                </div>

                <div className="col-12">
                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="Nama"
                  />
                </div>

                <div className="col-12">
                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="No. hp"
                  />
                </div>

                <div className="col-12">
                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="Email"
                  />
                </div>

                <div className="col-12">
                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="Rekening"
                  />
                </div>

                <div className="col-12">
                  <Form.Label>Alamat</Form.Label>
                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="Wilayah"
                  />
                </div>

                <div className="col-12">
                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="Alamat"
                  />
                </div>

                <Form.Label>Domisili</Form.Label>
                <div className="col-6 mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value="sama"
                      checked={selected === "sama"}
                      onChange={changeHandler}
                      defaultChecked
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Sama
                    </label>
                    <div aria-hidden={selected !== "sama" ? true : false}></div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value="beda"
                      checked={selected === "beda"}
                      onChange={changeHandler}
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Beda
                    </label>
                  </div>
                </div>

                <div
                  className="col-12"
                  aria-hidden={selected !== "beda" ? true : false}
                >
                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="Kota Domisili"
                  />
                </div>

                <div
                  className="col-12"
                  aria-hidden={selected !== "beda" ? true : false}
                >
                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="Alamat Domisili"
                  />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
      [aria-hidden="true"] {
        display: none;
      }
      `}</style>
    </>
  );
}
export default ModalChangeProfil;
