import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import $ from "jquery";
import "react-form-wizard-component/dist/style.css";
import FormWizard from "react-form-wizard-component";
import { Link } from "react-router-dom";

import "./css/Registerpage.css";

import Header from "../../components/layouts/Header";

function RegisterPage() {
  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };

  const backTemplate = (handlePrevious) => {
    return (
      <button
        type="button"
        className="btn btn-primary h-50 previous"
        onClick={handlePrevious}
      >
        previous
      </button>
    );
  };

  const removeWizardProgress = () => {
    $("div.wizard-progress-with-circle").addClass("d-none");
    $("ul.form-wizard-steps").addClass("d-none");
    $("div.wizard-header").addClass("d-none");

    // align button wizard
    $("div.wizard-card-footer.clearfix").addClass("justify-content-end");
    $("div.wizard-card-footer.clearfix").addClass("width: 76.5%");
    $("div.wizard-tab-content").addClass("pb-0");
    console.log("disabled form-wizard-steps");
  };

  useEffect(() => {
    // setMode('list')
    removeWizardProgress();
  }, []);

  return (
    <>
      {/* page-1 */}
      <main
        data-cy="page one - registerForm"
        className="body-scroll d-flex flex-column h-100"
        style={{ minHeight: "100%", paddingTop: "85.7188px" }}
      >
        <div className="h-100">
          <div className="col-12 col-md-12 col-lg-5 col-xl-12 mx-auto align-self-left logo-text-left">
            <div className="row h-100 overflow-auto">
              <header className="header position-fixed">
                <div className="row">
                  <Header
                    material={{
                      title: "Register",
                      bi_icon: "bi bi-arrow-left",
                      link: "/LoginPage",
                      classLink: "btn btn-light btn-44 back-btn",
                      logoVisible: false,
                      iconNotifVisible: false,
                      linkNotif: "/tes",
                    }}
                  />
                </div>
              </header>
            </div>
            <FormWizard
              shape="circle"
              color="#2196f3"
              onComplete={handleComplete}
              backButtonTemplate={backTemplate}
              nextButtonTemplate={(handleNext) => (
                <button
                  type="button"
                  className="btn btn-primary h-50 next"
                  onClick={handleNext}
                >
                  Next
                </button>
              )}
              finishButtonTemplate={(handleComplete) => (
                <Link to={"/LoginPage"}>
                <button
                  type="button"
                  className="btn btn-primary h-100 w-100 next"
                  onClick={handleComplete}
                >
                  Finish
                </button>
                </Link>
              )}
            >
              <FormWizard.TabContent>
                <div className="col-12 col-md-6 col-lg-5 col-xl-3 mx-auto py-4 logo-text-center">
                  <div className="logo-small">
                    <img src="./assets/img/logo.png" alt="" />
                    <h5 className="logo-color">NKS</h5>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-5 col-xl-3 mx-auto btn-text-right py-4 pb-0">
                  <form className="was-validated align-items-center">
                    <div className="form-floating is-valid mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="NIK"
                        id="username"
                      />
                      <label for="NIK">NIK</label>
                    </div>
                    <div className="form-floating is-valid mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        id="emailphone"
                      />
                      <label for="Name">Name</label>
                    </div>
                    <div className="form-floating is-valid mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="no. hp"
                        id="password"
                      />
                      <label for="no. hp">no. hp</label>
                    </div>
                    <div className="form-floating is-valid mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        id="password"
                      />
                      <label for="no. hp">Email</label>
                    </div>
                    <div className="form-floating is-valid mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="no. hp"
                        id="password"
                      />
                      <label for="no. hp">Rekening</label>
                    </div>
                    <Form.Group controlId="formFileLg" className="mb-3">
                      <Form.Control type="file" size="lg" />
                    </Form.Group>
                    <Form.Group controlId="formFileLg" className="mb-3">
                      <Form.Control type="file" size="lg" />
                    </Form.Group>
                  </form>
                </div>
              </FormWizard.TabContent>

              {/* page-2 */}
              <FormWizard.TabContent>
                <div className="col-12 col-md-6 col-lg-5 col-xl-3 mx-auto py-4 logo-text-center">
                  <div className="logo-small">
                    <img src="./assets/img/logo.png" alt="" />
                    <h5 className="logo-color">NKS</h5>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 col-xl-3 mx-auto py-4 pb-0">
                  <form className="was-validated align-items-center">
                    <div className="form-floating is-valid mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="NIK"
                        id="username"
                      />
                      <label for="NIK">Wilayah</label>
                    </div>
                    <div className="form-floating is-valid mb-3">
                      <textarea
                        type="text"
                        className="form-control"
                        rows="4"
                        id="username"
                      />
                      <label for="NIK">Alamat</label>
                    </div>
                  </form>
                </div>
              </FormWizard.TabContent>

              {/* page-3 */}
              <FormWizard.TabContent>
                <div className="col-12 col-md-6 col-lg-5 col-xl-3 mx-auto py-4 logo-text-center">
                  <div className="logo-small">
                    <img src="./assets/img/logo.png" alt="" />
                    <h5 className="logo-color">NKS</h5>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 col-xl-3 mx-auto btn-text-right pt-4 pb-0">
                  <form className="was-validated align-items-center">
                    <div className="form-floating is-valid mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        id="username"
                      />
                      <label for="NIK">Username</label>
                    </div>
                    <div className="form-floating is-valid mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                        id="emailphone"
                      />
                      <label for="Name">Password</label>
                    </div>
                    <div className="form-floating is-valid mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Confirm Password"
                        id="password"
                      />
                      <label for="no. hp">Confirm Password</label>
                    </div>
                  </form>
                </div>
              </FormWizard.TabContent>
            </FormWizard>
          </div>
        </div>
      </main>
    </>
  );
}

export default RegisterPage;
