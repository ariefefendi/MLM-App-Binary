import React, { useEffect, useState } from "react";
import Header from "../../components/layouts/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DataList from "../../components/material/learn/DataList";

function SettingPage() {
  const [DataModel, setDataModel] = useState([]);

  const GetDataAll = () => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
    }).then(function (res) {
      console.log(res.data);
      var dataloop = res.data;
      setDataModel(dataloop);
    });
  };

  useEffect(() => {
    GetDataAll();
  }, []);

  return (
    <>
      <main
        className="container-fluid h-100"
        style={{ minHeight: "567px", paddingTop: "85.7188px" }}
      >
        <div className="row h-100 overflow-auto">
          <header className="header position-fixed">
            <div className="row">
              <Header
                material={{
                  title: "Learn Loop",
                  bi_icon: "bi bi-arrow-left",
                  link: "/dashboard",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>
          <div className="main-container container">
            {/* <div className="row">
                            <div className="col-12">
                                <div className="card shadow-sm mb-4">
                                    <ul className="list-group list-group-flush bg-none">
                                        {DataModel.map((a, key) => {
                                            return (
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
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div> */}
            {/* <DataList
                            RecordCard={DataModel}
                        >
                        </DataList> */}

            <DataList
              RecordCard={{
                DataAll: DataModel,
              }}
            ></DataList>
          </div>
        </div>
      </main>
    </>
  );
}

export default SettingPage;
