import React from "react";

function TabReward(props) {
  let R = props.RecordCard;

  return (
    <>
      <div class="tab-pane fade show active" id="Reward" role="tabpanel">
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
                    <p class="size-16 mb-0 fw-bold">Rp.200.000</p>
                    <p class="text-color-theme size-14">Upgrade Paket 1</p>
                  </div>
                  <div class="col align-self-center text-end">
                    <p class="text-muted mb-0 fst-italic size-13-5">
                      selasa, 02-06-2023
                    </p>
                    <p class="text-muted size-14">( 1 Posisi )</p>
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
                    <p class="size-16 mb-0 fw-bold">Rp 500.000</p>
                    <p class="text-color-theme size-14">Upgrade Paket 3</p>
                  </div>
                  <div class="col align-self-center text-end">
                    <p class="text-muted mb-0 fst-italic size-13-5">
                      Kamis, 19-06-2023
                    </p>
                    <p class="text-muted size-14">( 3 Posisi )</p>
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
                    <p class="size-16 mb-0 fw-bold">Rp 1.000.000</p>
                    <p class="text-color-theme size-14">Upgrade Paket 7</p>
                  </div>
                  <div class="col align-self-center text-end">
                    <p class="text-muted mb-0 fst-italic size-13-5">
                      Selasa, 19-06-2023
                    </p>
                    <p class="text-muted size-14">( 7 Posisi )</p>
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
                    <p class="size-16 mb-0 fw-bold">Rp 2.000.000</p>
                    <p class="text-color-theme size-14">Upgrade Paket 15</p>
                  </div>
                  <div class="col align-self-center text-end">
                    <p class="text-muted mb-0 fst-italic size-13-5">
                      Senin, 09-07-2023
                    </p>
                    <p class="text-muted size-14">( 15 Posisi )</p>
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
                    <p class="size-16 mb-0 fw-bold">Rp 4.000.000</p>
                    <p class="text-color-theme size-14">Upgrade Paket 31</p>
                  </div>
                  <div class="col align-self-center text-end">
                    <p class="text-muted mb-0 fst-italic size-13-5">
                      Minggu, 19-07-2023
                    </p>
                    <p class="text-muted size-14">( 31 Posisi )</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default TabReward;
