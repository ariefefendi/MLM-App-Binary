import React from "react";
import MenuRiwayat from "./MenuRiwayat";


function TabKomisi(props) {
  let R = props.RecordCard;
  return (
    <>
      <div
          class="tab-pane fade"
          id="Komisi"
          role="tabpanel"
          aria-labelledby="Komisi-tab"
        >
          <MenuRiwayat type={"MenuKomisi"} RecordCard={{}} />
          <div class="tab-content" id="assetstabsContent">
            {/* tab 1 komisi page */}
            <div
              class="tab-pane fade active show"
              id="Komisi1"
              role="tabpanel"
              aria-labelledby="Komisi1-tab"
            >
              <div className="row mb-1">
                <div className="col">
                  <h6 className="title">Juni</h6>
                </div>
                <div className="col-auto">
                  <h6 className="title">2023</h6>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-12 px-0">
                  <ul class="list-group list-group-flush bg-none">
                    <li class="list-group-item">
                      <div class="row">
                        <div class="col-auto">
                          <div class="avatar avatar-50 shadow rounded-10 ">
                            <img src="assets/img/company4.jpg" alt="" />
                          </div>
                        </div>
                        <div class="col align-self-center ps-0">
                          <p class="size-13-9 mb-0 fw-bold">Komisi Pasangan</p>
                          <p class="size-13-7 mb-0 fst-italic">
                            Rabu, 18-06-2023
                          </p>
                        </div>
                        <div class="col align-self-center text-end">
                          <p class="mb-0 size-13-9 fw-bold">Rp 200.000.000</p>
                          <br />
                        </div>
                      </div>
                    </li>

                    <li class="list-group-item">
                      <div class="row">
                        <div class="col-auto">
                          <div class="avatar avatar-50 shadow rounded-10">
                            <img src="assets/img/company5.png" alt="" />
                          </div>
                        </div>
                        <div class="col align-self-center ps-0">
                          <p class="size-13-9 mb-0 fw-bold">Komisi Pasangan</p>
                          <p class="size-13-7 mb-0 fst-italic">
                            Kamis, 19-06-2023
                          </p>
                        </div>
                        <div class="col align-self-center text-end">
                          <p class="mb-0 size-13-9 fw-bold">Rp 500.000</p>
                          <br />
                        </div>
                      </div>
                    </li>

                    <li class="list-group-item">
                      <div class="row">
                        <div class="col-auto">
                          <div class="avatar avatar-50 shadow rounded-10">
                            <img src="assets/img/company1.png" alt="" />
                          </div>
                        </div>
                        <div class="col align-self-center ps-0">
                          <p class="size-13-9 mb-0 fw-bold">Komisi Pasangan</p>
                          <p class="size-13-7 mb-0 fst-italic">
                            Sabtu, 21-06-2023
                          </p>
                        </div>
                        <div class="col align-self-center text-end">
                          <p class="mb-0 size-13-9 fw-bold">Rp 1.000.000</p>
                          <br />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col">
                  <h6 className="title">Juli</h6>
                </div>
                <div className="col-auto">
                  <h6 className="title">2023</h6>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-12 px-0">
                  <ul class="list-group list-group-flush bg-none">
                    <li class="list-group-item">
                      <div class="row">
                        <div class="col-auto">
                          <div class="avatar avatar-50 shadow rounded-10">
                            <img src="assets/img/company3.jpg" alt="" />
                          </div>
                        </div>
                        <div class="col align-self-center ps-0">
                          <p class="size-13-9 mb-0 fw-bold">Komisi Pasangan</p>
                          <p class="size-13-7 mb-0 fst-italic">
                            Kamis, 18-07-2023
                          </p>
                        </div>
                        <div class="col align-self-center text-end">
                          <p class="mb-0 size-13-9 fw-bold">Rp 300.000</p>
                          <br />
                        </div>
                      </div>
                    </li>

                    <li class="list-group-item">
                      <div class="row">
                        <div class="col-auto">
                          <div class="avatar avatar-50 shadow rounded-10">
                            <img src="assets/img/company3.jpg" alt="" />
                          </div>
                        </div>
                        <div class="col align-self-center ps-0">
                          <p class="size-13-9 mb-0 fw-bold">Komisi Pasangan</p>
                          <p class="size-13-7 mb-0 fst-italic">
                            Sabtu, 20-07-2023
                          </p>
                        </div>
                        <div class="col align-self-center text-end">
                          <p class="mb-0 size-13-9 fw-bold">Rp 1.000.000</p>
                          <br />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* tutup tab 1 komisi page */}

            {/* tab 2 komisi page */}
            <div
              class="tab-pane fade"
              id="Komisi2"
              role="tabpanel"
              aria-labelledby="Komisi2-tab"
            >
              <div className="row mb-1">
                <div className="col">
                  <h6 className="title">Juni</h6>
                </div>
                <div className="col-auto">
                  <h6 className="title">2023</h6>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-12 px-0">
                  <ul class="list-group list-group-flush bg-none">
                    <li class="list-group-item">
                      <div class="row">
                        <div class="col-auto">
                          <div class="avatar avatar-50 shadow rounded-10 ">
                            <img src="assets/img/company4.jpg" alt="" />
                          </div>
                        </div>
                        <div class="col align-self-center ps-0">
                          <p class="size-13-9 mb-0 fw-bold">Komisi Sponsor</p>
                          <p class="size-13-7 mb-0 fst-italic">
                            Rabu, 18-06-2023
                          </p>
                        </div>
                        <div class="col align-self-center text-end">
                          <p class="mb-0 size-13-9 fw-bold">Rp 200.000.000</p>
                          <br />
                        </div>
                      </div>
                    </li>

                    <li class="list-group-item">
                      <div class="row">
                        <div class="col-auto">
                          <div class="avatar avatar-50 shadow rounded-10">
                            <img src="assets/img/company5.png" alt="" />
                          </div>
                        </div>
                        <div class="col align-self-center ps-0">
                          <p class="size-13-9 mb-0 fw-bold">Komisi Sponsor</p>
                          <p class="size-13-7 mb-0 fst-italic">
                            Kamis, 19-06-2023
                          </p>
                        </div>
                        <div class="col align-self-center text-end">
                          <p class="mb-0 size-13-9 fw-bold">Rp 500.000</p>
                          <br />
                        </div>
                      </div>
                    </li>

                    <li class="list-group-item">
                      <div class="row">
                        <div class="col-auto">
                          <div class="avatar avatar-50 shadow rounded-10">
                            <img src="assets/img/company1.png" alt="" />
                          </div>
                        </div>
                        <div class="col align-self-center ps-0">
                          <p class="size-13-9 mb-0 fw-bold">Komisi Sponsor</p>
                          <p class="size-13-7 mb-0 fst-italic">
                            Sabtu, 21-06-2023
                          </p>
                        </div>
                        <div class="col align-self-center text-end">
                          <p class="mb-0 size-13-9 fw-bold">Rp 1.000.000</p>
                          <br />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col">
                  <h6 className="title">Juli</h6>
                </div>
                <div className="col-auto">
                  <h6 className="title">2023</h6>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-12 px-0">
                  <ul class="list-group list-group-flush bg-none">
                    <li class="list-group-item">
                      <div class="row">
                        <div class="col-auto">
                          <div class="avatar avatar-50 shadow rounded-10">
                            <img src="assets/img/company3.jpg" alt="" />
                          </div>
                        </div>
                        <div class="col align-self-center ps-0">
                          <p class="size-13-9 mb-0 fw-bold">Komisi Sponsor</p>
                          <p class="size-13-7 mb-0 fst-italic">
                            Kamis, 18-07-2023
                          </p>
                        </div>
                        <div class="col align-self-center text-end">
                          <p class="mb-0 size-13-9 fw-bold">Rp 300.000</p>
                          <br />
                        </div>
                      </div>
                    </li>

                    <li class="list-group-item">
                      <div class="row">
                        <div class="col-auto">
                          <div class="avatar avatar-50 shadow rounded-10">
                            <img src="assets/img/company3.jpg" alt="" />
                          </div>
                        </div>
                        <div class="col align-self-center ps-0">
                          <p class="size-13-9 mb-0 fw-bold">Komisi Sponsor</p>
                          <p class="size-13-7 mb-0 fst-italic">
                            Sabtu, 20-07-2023
                          </p>
                        </div>
                        <div class="col align-self-center text-end">
                          <p class="mb-0 size-13-9 fw-bold">Rp 1.000.000</p>
                          <br />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* tutup tab 2 komisi page */}
          </div>
        </div>
    </>
  );
}
export default TabKomisi;
