import { React, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";


function App(props) {
  const navigate = useNavigate();
  let R = props.RecordCard;

  const [Data, setData] = useState({
    Title: R.Title,
    Nominal: R.Nominal,
    DueDate: R.DueDate,
    IconCard: R.IconCard,
  });

  return (
    <>
      <div className="row mt-0 mb-3">
        <div className="col-12 px-0">
          <ul className="list-group list-group-flush bg-none">
            <li className="list-group-item border-none py-2">
              <div className="card"  onClick={() => navigate(R.Link)}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-auto align-self-center">
                      <div className="avatar avatar-40 shadow rounded-10 ">
                        <img src={Data.IconCard} alt="" />
                      </div>
                    </div>
                    <div className="col align-self-center px-0">
                      <p className="text-color-theme mb-0">{Data.Title}</p>
                      <p className="text-muted size-12">Rp. {Data.Nominal}</p>
                    </div>
                    <div className="col-2 align-self-center text-end px-0">
                      <p className="mb-0">&nbsp;</p>
                      {/* ex.{Data.DueDate} */}
                      <span className="badge rounded-pill px-2 fst-italic size-12 fw-lighter fst-italic text-dark bg-light">
                        {/* Used */}
                        ex.{Data.DueDate}
                      </span>
                    </div>
                    <div className="col-auto align-self-center px-2">
                      <a href="transaction-detail.html">
                        <i className="bi bi-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
