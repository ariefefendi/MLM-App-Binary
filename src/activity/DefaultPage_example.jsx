import React from "react";
import Header from "../components/layouts/Header";
import { useNavigate } from "react-router-dom";

const SettingPage = () => {
  const navigate = useNavigate();

  function navigateTo() {
    navigate("/Dashboard", { replace: true });
  }

  return (
    <>
      <main
        className='container-fluid h-100'
        style={{ minHeight: "660px", paddingTop: "85.7188px" }}>
        <div className='row h-100 overflow-auto'>
          <header className='header position-fixed'>
            <div className='row'>
              <Header
                material={{
                  title: "Setting Page",
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
        </div>
      </main>
    </>
  );
};

export default SettingPage;
