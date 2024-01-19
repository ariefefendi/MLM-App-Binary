import React from "react";

import "../css/Profil.css";

function UserList(props) {
  let R = props.RecordCard;
  console.log();

  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="card shadow-sm mb-4">
            <ul class="list-group list-group-flush bg-none">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-auto">
                    <figure class="avatar avatar-50 rounded-10 shadow-sm">
                      <img src="assets/img/user1.jpg" alt="" />
                    </figure>
                  </div>
                  <div class="col px-0">
                    <p>
                      Ryan Cahyadi
                      <br />
                      <span class="badge shadow-sm-bg rounded-pill px-2 fw-lighter fst-italic text-light bg-success">
                        Financial Freedom
                      </span>
                    </p>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-auto">
                    <figure class="avatar avatar-50 rounded-10 shadow-sm">
                      <img src="assets/img/user2.jpg" alt="" />
                    </figure>
                  </div>
                  <div class="col px-0">
                    <p>
                      muhammad habli khuqma
                      <br />
                      <span class="badge shadow-sm-bg1 rounded-pill px-2 fw-lighter fst-italic text-light bg-secondary">
                        Registration
                      </span>
                    </p>
                  </div>
                </div>
              </li>
              
              <li class="list-group-item">
                <div class="row">
                  <div class="col-auto">
                    <figure class="avatar avatar-50 rounded-10 shadow-sm">
                      <img src="assets/img/user2.jpg" alt="" />
                    </figure>
                  </div>
                  <div class="col px-0">
                    <p>
                      muhammad habli khuqma
                      <br />
                      <span class="badge shadow-sm-bg1 rounded-pill px-2 fw-lighter fst-italic text-light bg-secondary">
                        Registration
                      </span>
                    </p>
                  </div>
                </div>
              </li>

              <li class="list-group-item">
                <div class="row">
                  <div class="col-auto">
                    <figure class="avatar avatar-50 rounded-10 shadow-sm">
                      <img src="assets/img/user1.jpg" alt="" />
                    </figure>
                  </div>
                  <div class="col px-0">
                    <p>
                      Dimas Nurcahyo
                      <br />
                      <span class="badge shadow-sm-bg rounded-pill px-2 fw-lighter fst-italic text-light bg-success">
                        Financial Freedom
                      </span>
                    </p>
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
export default UserList;
