import React, { useEffect, useState } from "react";
import FormWizard from "react-form-wizard-component";

import Header from "../../components/layouts/Header";

import "react-form-wizard-component/dist/style.css";
import "./css/wizardExample.css";
import $ from "jquery";

function ValidateTab() {
  const [firstTabInput, setFirstTabInput] = useState("");
  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };
  // check validate tab
  const checkValidateTab = () => {
    console.log(firstTabInput);
    if (firstTabInput === "") {
      return false;
    }
    return true;
  };
  // error messages
  const errorMessages = () => {
    // you can add alert or console.log or any thing you want
    alert("Please fill in the required fields");
  };

  const removeWizardProgress = () => {
    $("div.wizard-progress-with-circle").addClass("d-none");
    $("ul.form-wizard-steps").addClass("d-none");
    console.log("disabled form-wizard-steps");
  };

  useEffect(() => {
    // setMode('list')
    removeWizardProgress();
  }, []);

  return (
    <>
      <main
        className='container-fluid h-100 pt-3'
        style={{ minHeight: "567px", paddingTop: "85.7188px" }}>
        <div className='row h-100 overflow-auto'>
          <Header
            material={{
              title: "Register Page",
              bi_icon: "bi bi-arrow-left",
              link: "/loginPage",
              classLink: "btn btn-light btn-44 back-btn",
              logoVisible: false,
              iconNotifVisible: false,
              linkNotif: "",
            }}
          />
          
          <FormWizard onComplete={handleComplete}>
            {/* Form Ke-1 */}
            <FormWizard.TabContent>
              <h3>First Form</h3>
              <p>Some content for the first tab</p>
              <label>
                Required Field <span className='required-label'>*</span>
              </label>
              <br />
              <input
                className='form-control'
                type='text'
                value={firstTabInput}
                onChange={(e) => setFirstTabInput(e.target.value)}
              />
            </FormWizard.TabContent>

            {/* Form Ke-2 */}
            <FormWizard.TabContent
              isValid={checkValidateTab()}
              validationError={errorMessages}>
              <h3>Second Form </h3>
              <p>Some content for the second tab</p>
            </FormWizard.TabContent>

            <FormWizard.TabContent
              isValid={checkValidateTab()}
              validationError={errorMessages}>
              <h3>Second dwadwafdwafdwad </h3>
              <p>Some content for the second tab</p>
            </FormWizard.TabContent>

            {/* Form Ke-3 */}
            <FormWizard.TabContent>
              <h3>Last Form </h3>
              <p>Some content for the last tab</p>
            </FormWizard.TabContent>
            {/*  */}
          </FormWizard>
        </div>
      </main>
    </>
  );
}

export default ValidateTab;
