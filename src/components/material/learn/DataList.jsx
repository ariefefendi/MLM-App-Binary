import { React, useState } from "react";

function DataList(props) {
  // stuktur pemahaman props
  // let R = props.RecordCard;

  // struktur yang diterapkan
  let R = props.RecordCard;
  const [Data, setData] = useState({
    DataRecord: R.DataAll,
  });
  console.log(props.RecordCard.DataAll);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm mb-4">
            <ul className="list-group list-group-flush bg-none">
              {Data.DataRecord.map((a, key) => {
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <figure className="avatar avatar-50 rounded-10 shadow-sm">
                        <img src="assets/img/user1.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="col px-0">
                      <p>
                        <small className="text-muted">{a.email}</small>
                        <br />
                        {a.name}
                      </p>
                    </div>
                    <span className="badge shadow-sm-bg rounded-pill px-2 fw-lighter fst-italic text-light bg-success">
                      {a.username}
                    </span>
                  </div>
                </li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataList;
