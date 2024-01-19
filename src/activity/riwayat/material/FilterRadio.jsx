import React from "react";

function FilterRadio(props, { OnchangeRadioFilter }) {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div class="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="flexRadioDefault1" onChange={OnchangeRadioFilter} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Radio 1
                                </label>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6">
                            <div class="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="flexRadioDefault2" onChange={OnchangeRadioFilter} />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Radio 2
                                </label>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6">
                            <div class="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="flexRadioDefault3" onChange={OnchangeRadioFilter} />
                                <label className="form-check-label" htmlFor="flexRadioDefault3">
                                    Radio 3
                                </label>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6">
                            <div class="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" value="flexRadioDefault4" onChange={OnchangeRadioFilter} />
                                <label className="form-check-label" htmlFor="flexRadioDefault4">
                                    Radio 4
                                </label>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6">
                            <div class="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" value="flexRadioDefault5" onChange={OnchangeRadioFilter} />
                                <label className="form-check-label" htmlFor="flexRadioDefault5">
                                    Radio 5
                                </label>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6">
                            <div class="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" value="flexRadioDefault6" onChange={OnchangeRadioFilter} />
                                <label className="form-check-label" htmlFor="flexRadioDefault6">
                                    Radio 6
                                </label>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6">
                            <div class="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7" value="flexRadioDefault7" onChange={OnchangeRadioFilter} />
                                <label className="form-check-label" htmlFor="flexRadioDefault7">
                                    Radio 7
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FilterRadio;
