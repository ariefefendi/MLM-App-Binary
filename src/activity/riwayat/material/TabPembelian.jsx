import React from "react";
import MenuRiwayat from "./MenuRiwayat";
import FilterRadio from "./FilterRadio";

function TabPembelian(props, { OnchangeRadioFilter }) {
  let R = props.RecordCard;
  return (
    <>
      <div
        class="tab-pane fade"
        id="Pembelian"
        role="tabpanel"
        aria-labelledby="Pembelian-tab"
      >
        <MenuRiwayat type={"MenuPembelian"} RecordCard={{}} />
        <div class="tab-content" id="assetstabsContent">
          {/* tab 1 Pembelian page */}
          <div
            class="tab-pane fade active show"
            id="Pembelian1"
            role="tabpanel"
            aria-labelledby="Pembelian1-tab"
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
                        <p class="text-color-theme size-14 mb-0">
                          Product Paket 1
                        </p>
                        <p class="size-14">INV/020623/0000001</p>
                      </div>
                      <div class="col align-self-center text-end">
                        <p class="size-14 mb-0 fw-bold">Rp 20.000.000</p>
                        <p class="size-10-9">selasa, 02-06-2023</p>
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
                        <p class="text-color-theme size-14 mb-0">
                          Product Paket 2
                        </p>
                        <p class="size-14">INV/020623/0000002</p>
                      </div>
                      <div class="col align-self-center text-end">
                        <p class="size-14 mb-0 fw-bold">Rp 500.000</p>
                        <p class="size-10-9">Kamis, 19-06-2023</p>
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
                        <p class="text-color-theme size-14 mb-0">
                          Product Paket 3
                        </p>
                        <p class="size-14">INV/020623/0000003</p>
                      </div>
                      <div class="col align-self-center text-end">
                        <p class="size-14 mb-0 fw-bold">Rp 1.000.000</p>
                        <p class="size-10-9">Selasa, 24-06-2023</p>
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
                        <p class="text-color-theme size-14 mb-0">
                          Product Paket 4
                        </p>
                        <p class="size-14">INV/020623/0000004</p>
                      </div>
                      <div class="col align-self-center text-end">
                        <p class="size-14 mb-0 fw-bold">Rp 300.000</p>
                        <p class="size-10-9">Senin, 09-07-2023</p>
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
                        <p class="text-color-theme size-14 mb-0">
                          Product Paket 5
                        </p>
                        <p class="size-14">INV/020623/0000005</p>
                      </div>
                      <div class="col align-self-center text-end">
                        <p class="size-14 mb-0 fw-bold">Rp 400.000</p>
                        <p class="size-10-9">Minggu, 19-07-2023</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* tutup tab 1 Pembelian page */}

          {/* tab 2 Pembelian page */}
          <div
            class="tab-pane fade"
            id="Pembelian2"
            role="tabpanel"
            aria-labelledby="Pembelian2-tab"
          >

            <FilterRadio OnchangeRadioFilter={OnchangeRadioFilter} />

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
                        <p class="text-color-theme size-14 mb-0">
                          Product Paket 1
                        </p>
                        <p class="size-14">INV/020623/0000001</p>
                      </div>
                      <div class="col align-self-center text-end">
                        <p class="size-14 mb-0 fw-bold">Rp 20.000.000</p>
                        <p class="size-10-9">selasa, 02-06-2023</p>
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
                        <p class="text-color-theme size-14 mb-0">
                          Product Paket 3
                        </p>
                        <p class="size-14">INV/020623/0000003</p>
                      </div>
                      <div class="col align-self-center text-end">
                        <p class="size-14 mb-0 fw-bold">Rp 300.000</p>
                        <p class="size-10-9">Senin, 09-07-2023</p>
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
                        <p class="text-color-theme size-14 mb-0">
                          Product Paket 4
                        </p>
                        <p class="size-14">INV/020623/0000004</p>
                      </div>
                      <div class="col align-self-center text-end">
                        <p class="size-14 mb-0 fw-bold">Rp 400.000</p>
                        <p class="size-10-9">Minggu, 19-07-2023</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* tutup tab 2 Pembelian page */}

          {/* tab 3 Pembelian page */}
          <div
            class="tab-pane fade"
            id="Pembelian3"
            role="tabpanel"
            aria-labelledby="Pembelian3-tab"
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
                        <p class="text-color-theme size-14 mb-0">
                          Product Paket 1
                        </p>
                        <p class="size-14">INV/020623/0000001</p>
                      </div>
                      <div class="col align-self-center text-end">
                        <p class="size-14 mb-0 fw-bold">Rp 20.000.000</p>
                        <p class="size-10-9">selasa, 02-06-2023</p>
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
                        <p class="text-color-theme size-14 mb-0">
                          Product Paket 2
                        </p>
                        <p class="size-14">INV/020623/0000002</p>
                      </div>
                      <div class="col align-self-center text-end">
                        <p class="size-14 mb-0 fw-bold">Rp 500.000</p>
                        <p class="size-10-9">Kamis, 19-06-2023</p>
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
                        <p class="text-color-theme size-14 mb-0">
                          Product Paket 3
                        </p>
                        <p class="size-14">INV/020623/0000003</p>
                      </div>
                      <div class="col align-self-center text-end">
                        <p class="size-14 mb-0 fw-bold">Rp 300.000</p>
                        <p class="size-10-9">Senin, 09-07-2023</p>
                      </div>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          {/* tutup tab 3 Pembelian page */}
        </div>
      </div>
    </>
  );
}
export default TabPembelian;
