import { React, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function App(props) {
  const navigate = useNavigate();
  let R = props.RecordCard;

  const [Data, setData] = useState({
    Title: R.Title,
    Nominal: R.Nominal,
    Date: R.Date,
    IconCard: R.IconCard,
  });

  return (
    <>
      <li className="list-group-item border-none py-2">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-auto">
                <div className="avatar avatar-40 shadow rounded-10">
                  <img src={R.IconCard} alt="" />
                </div>
              </div>
              <div className="col-auto align-self-center px-0">
                <p className="text-color-theme mb-0">{Data.Title}</p>
                <p className="text-muted size-12 fst-italic">{Data.Date}</p>
              </div>
              <div className="col align-self-center text-end ps-0">
                <p className="mb-0 text-muted fw-bold">{Data.Nominal}</p>
                <p className="text-muted size-12">&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default App;
