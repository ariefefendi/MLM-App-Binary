import React from "react";

import "../../../activity/mainpage/css/Profil.css";

function UserList(props) {
  var R = props.habli;
//   const [habli, kira] = useState({
//     kirara: R.DataAll
// });
  console.log(R)

  return (
    <>
      <div className="row">
        {/* <ul>
      {R.map((z) => (
        <li>
            <p>{z.name}</p>
        </li>
      ))}
      </ul> */}
        <div className="col-12">
          <div className="card shadow-sm mb-4">
            <ul className="list-group list-group-flush bg-none">
            {R.map((a) => (
              <li className="list-group-item">
                <div className="row">
                  <div className="col-auto">
                    <figure className="avatar avatar-50 rounded-10 shadow-sm">
                      <img src="assets/img/user1.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="col px-0">
                    <p>
                      <small className="text-muted">Double Diamond</small>
                      <br />
                      {a.name}
                    </p>
                  </div>
                  <span className="badge shadow-sm-bg rounded-pill px-2 fw-lighter fst-italic text-light bg-success">
                    Financial Freedom
                  </span>
                </div>
              </li>
              ))}
              {/* <li className="list-group-item">
                <div className="row">
                  <div className="col-auto">
                    <figure className="avatar avatar-50 rounded-10 shadow-sm">
                      <img src="assets/img/user2.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="col px-0">
                    <p>
                      <small className="text-muted">One Star</small>
                      <br />
                      muhammad habli khuqma
                    </p>
                  </div>
                  <span className="badge shadow-sm-bg1 rounded-pill px-2 fw-lighter fst-italic text-light bg-secondary">
                    Registration
                  </span>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row">
                  <div className="col-auto">
                    <figure className="avatar avatar-50 rounded-10 shadow-sm">
                      <img src="assets/img/user2.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="col px-0">
                    <p>
                      <small className="text-muted">One Star</small>
                      <br />
                      muhammad habli khuqma
                    </p>
                  </div>
                  <span className="badge shadow-sm-bg1 rounded-pill px-2 fw-lighter fst-italic text-light bg-secondary">
                    Registration
                  </span>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row">
                  <div className="col-auto">
                    <figure className="avatar avatar-50 rounded-10 shadow-sm">
                      <img src="assets/img/user1.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="col px-0">
                    <p>
                      <small className="text-muted">Diamond</small>
                      <br />
                      Dimas Nurcahyo
                    </p>
                  </div>
                  <span className="badge shadow-sm-bg rounded-pill px-2 fw-lighter fst-italic text-light bg-success">
                    Financial Freedom
                  </span>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserList;
