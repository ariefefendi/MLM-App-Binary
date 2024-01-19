import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../mainpage/css/Profil.css";

import Header from "../../components/layouts/Header";
import UserList from "../../components/material/learn/userList";

function ProfilPage() {
  const [habli, userList] = useState([]);

  const getdataall = () => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
    }).then(function (res) {
    //   console.log(res.data);
      var habli = res.data;
      userList(habli);
    });
  };

  useEffect(() => {
    getdataall();
  }, []);

  return (
    <>
      <main
        className="body-scroll h-100 inline-block"
        data-page="users"
        style={{ minHeight: "100%", paddingTop: "85.7188px" }}
      >
        <div className="container-fluid h-100 has-header">
          <header className="header position-fixed">
            <div className="row">
              <Header
                material={{
                  title: "Profil Pengguna",
                  bi_icon: "bi bi-arrow-left",
                  link: "",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>

          {/* card memberlist */}
          {/* <UserList
            habli={{
              dataall: habli,
            }}
          /> */}

          <UserList
            habli= {habli}
          />
        </div>
      </main>
      <style>{`
      .px-1-3 {
        padding-right:1.3rem !important;
        padding-left:1.3rem !important;
      }
      `}</style>
    </>
  );
}

export default ProfilPage;
