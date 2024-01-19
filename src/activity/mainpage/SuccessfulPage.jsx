import React, { useEffect, useState } from "react";

function SuccessfulPage() {
  return (
    <>
      <main
        className="body-scroll h-100 inline-block"
        data-page="users"
        style={{ minHeight: "100%", paddingTop: "85.7188px" }}
      >
        <div className="h-100 has-header">
          <div class="main-container container">
            <div class="row h-100 ">
              <div class="col-12 col-md-6 col-lg-5 col-xl-3 mx-auto py-4 text-center align-self-center">
                <figure class="mw-100 text-center mb-3">
                  <img
                    src={require("./img/intro3.png")}
                    alt=""
                    class="mw-100"
                  />
                </figure>
                <h1 class="mb-0 text-color-theme">Successful!</h1>
                <p class="text-muted mb-4">
                  You have successfully debited amount from your maestro card
                  ends <br/>
                  with the number XX365. Transaction ID: 58552544MAX2541
                </p>
                <a
                  href="index.html"
                  target="_self"
                  class="btn btn-default btn-lg"
                >
                  Back To Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SuccessfulPage;
