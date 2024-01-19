import React, { useEffect, useState } from "react";

import Header from "../../components/layouts/Header";
import AllAnggota from "./material/MaterialAllAnggota";

function AllAnggotaProfilePage() {
  return (
    <>
      <main
        className="body-scroll h-100 inline-block"
        data-page="users"
        style={{ minHeight: "100%", paddingTop: "85.7188px" }}
      >
        <div className="h-100 has-header">
          <header className="header position-fixed">
            <div className="row">
              <Header
                material={{
                  title: "All Anggota",
                  bi_icon: "bi bi-arrow-left",
                  link: "/profilpage",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>

          <div className="main-container container">
            {/* <!-- Search --> */}
            <AllAnggota
            />

          </div>
        </div>
      </main>
    </>
  );
}

export default AllAnggotaProfilePage;
