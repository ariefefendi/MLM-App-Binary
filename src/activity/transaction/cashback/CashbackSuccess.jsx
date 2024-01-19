import React, { useState } from "react";
import Header from "../../../components/layouts/Header";

function CashbackSuccess() {
    return (
        <>
            <main
                className="body-scroll h-100 inline-block"
                data-page="users"
                style={{ minHeight: "100%", paddingTop: "85.7188px" }}
            >
                <div className="container-fluid h-100 has-header">
                    <div className="main-container">
                        <div className='row mt-0 mb-3'>

                            <div className="col-10 col-md-6 col-lg-5 col-xl-3 mx-auto align-self-center text-center py-4">
                                <img src={require("../../mainpage/img/thankyou.png")} alt="" />
                                <h1 className="mb-4 text-color-theme">Successful!</h1>
                                <p className="text-muted mb-4">You have successfully debited amount from your maestro card ends with the</p>

                                <div className="card mb-4 text-start">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-auto">
                                                <div className="avatar avatar-44 shadow-sm rounded-10 bg-warning text-white">
                                                    <i className="bi bi-star vm"></i>
                                                </div>
                                            </div>
                                            <div className="col align-self-center ps-0">
                                                <p className="mb-0 size-12 text-muted">Bonus Points Received</p>
                                                <p>40pts</p>
                                            </div>
                                            <div className="col-auto align-self-center">
                                                <i className="bi bi-chevron-right text-muted"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a href="index.html" target="_self" className="btn btn-lg btn-default w-100 shadow">Back to Home</a>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default CashbackSuccess;


