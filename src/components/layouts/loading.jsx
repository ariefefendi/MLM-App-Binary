import React from 'react';

import logo from "../../assets/img/logo.png";

function loading(props) {
  let R = props.MainModel;
    return (
        <>
             <div data-cy="loader section" className="container-fluid loader-wrap">
                    <div className="row h-100">
                        <div className="col-10 col-md-6 col-lg-5 col-xl-3 mx-auto text-center align-self-center">
                            <div className="loader-cube-wrap loader-cube-animate mx-auto">
                                <img src={logo} alt="Logo"/>
                            </div>
                            <p className="mt-4">Processing<br/><strong>Please wait...</strong></p>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default loading
