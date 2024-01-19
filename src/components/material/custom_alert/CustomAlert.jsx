import { React, useState } from "react";
// confirm alert
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function App(props) {
    return (
        <>
            <div className='card w-dialogsize position-fixed bottom-15 start-50 translate-middle-x'>
                <div className='card-body'>
                    <div className='row'>
                        <div className="col-12 col-lg-12 col-md-12 text-center mb-3">
                            <h6>{props.title}</h6>
                            <span>{props.subtitle}</span>
                        </div>
                        <div className="col-1 col-lg-1col-md-1text-center"></div>
                        <div className="col-4 col-lg-4 col-md-4 text-center">
                            {props.children}
                        </div>
                        <div className="col-2  col-lg-2 col-md-2 text-center"></div>
                        <div className="col-4 col-lg-4 col-md-4 text-center">
                            <button type="button" onClick={props.close} className="btn btn-danger w-100">
                                {props.closetext}
                            </button>
                        </div>
                        <div className="col-1 col-lg-1col-md-1text-center"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
