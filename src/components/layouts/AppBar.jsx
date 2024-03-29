import React from "react";

const appBar = () => {
  return (
    <header class='header position-fixed'>
      <div class='row'>
        <div class='col-auto'>
          <a
            href='javascript:void(0)'
            target='_self'
            class='btn btn-light btn-44 menu-btn'>
            <i class='bi bi-list'></i>
          </a>
        </div>
        <div class='col align-self-center text-center'>
          <div class='logo-small'>
            <img src='assets/img/logo.png' alt='' />
            <h5>FiMobile</h5>
          </div>
        </div>
        <div class='col-auto'>
          <a
            href='notifications.html'
            target='_self'
            class='btn btn-light btn-44'>
            <i class='bi bi-bell'></i>
            <span class='count-indicator'></span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default appBar;
