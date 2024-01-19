import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import helpers from "../../../components/helpers/helpers";

import Header from "../../../components/layouts/Header";

function PembelianRo() {
  const checklists = [
    {
      IdProduct: "PR000001",
      Img: require("../../mainpage/img/product/1.jpg"),
      Title: "Tas Kulit",
      Subtitle: "Tas murah dan berkualitas tinggi",
    },
    {
      IdProduct: "PR000002",
      Img: require("../../mainpage/img/product/1.jpg"),
      Title: "Tas Kulit 2",
      Subtitle: "Tas murah dan berkualitas tinggi",
    },
    {
      IdProduct: "PR000003",
      Img: require("../../mainpage/img/product/1.jpg"),
      Title: "Tas Kulit 3",
      Subtitle: "Tas murah dan berkualitas tinggi",
    },
    {
      IdProduct: "PR000004",
      Img: require("../../mainpage/img/product/1.jpg"),
      Title: "Tas Kulit 4",
      Subtitle: "Tas murah dan berkualitas tinggi",
    },
  ];
  const [checkedModelList, setCheckedModelList] = useState([]);
  const navigate = useNavigate();

  // check auth
  const checkAuth = () => {
    //check get storage
    // console.log(sessionStorage.getItem("token", true));
    let check = helpers.checkTokenAuth();
    check != true ? navigate("/loginpage") : console.log("Allow this Page");
  };

  const onChangeModel = (e) => {
    const ischecked = e.target.checked;
    const dataid = e.target.dataset.id;
    if (ischecked === true) {
      setCheckedModelList((prevalue) => [...prevalue, dataid]);
    } else {
      const resultfilter = checkedModelList.filter((d, index) => {
        return d !== dataid;
      });
      setCheckedModelList(resultfilter);
    }
  };

  // Checkbox Checkedinput lists array
  console.log(checkedModelList);

  const formSubmitEvent = (e) => {
    e.preventDefault();

    // Result On Submit Click
    // console.log(checkedModelList);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      <main
        className="body-scroll h-100 inline-block"
        data-page="users"
        style={{ minHeight: "100%", paddingTop: "85.7188px" }}
      >
        <div className="container-fluid h-100 has-header">
          <header className="header position-fixed">
            <div className="row">
              <Header
                material={{
                  title: "Pembelian Paket",
                  bi_icon: "bi bi-arrow-left",
                  link: "/ListOrderRo",
                  classLink: "btn btn-light btn-44 back-btn",
                  logoVisible: false,
                  iconNotifVisible: false,
                  linkNotif: "/tes",
                }}
              />
            </div>
          </header>
          <div className="main-container">
            <div className="row mt-0 mb-3">
              <div className="col-12 col-md-12">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-auto align-self-center">
                        <div className="avatar avatar-60 bg-danger-light text-danger rounded-10 ">
                          <i className="bi bi-building   fs-4 mb-2"></i>
                        </div>
                      </div>
                      <div className="col align-self-center px-0">
                        <p className="text-color-theme mb-0">Reaped Order</p>
                        <p className="text-muted size-12">
                          Anda akan melakukan reaped order
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {checklists.map((dvalue, index) => {
                return (
                  <div className="col-6 col-md-6 col-lg-4">
                    <div className="card mb-3">
                      <input
                        type="checkbox"
                        className="position-absolute custom-position custom-control-input checkbox-input checkbox__input"
                        id={dvalue.Title}
                        data-id={dvalue.IdProduct}
                        value={dvalue.IdProduct}
                        onChange={onChangeModel}
                        checked={checkedModelList.includes(dvalue.IdProduct)}
                      />
                      <span class="checkbox__inner position-absolute custom-position"></span>
                      <label className="card-body" htmlFor={dvalue.Title}>
                        <div className="row">
                          <div className="col-12">
                            <div
                              className="h-customsize shadow-sm rounded-10 coverimg mb-3"
                              style={{ backgroundImage: `url(${dvalue.Img})` }}
                            ></div>
                          </div>
                          <div className="col align-self-center">
                            <p className="text-color-theme mb-1">
                              {dvalue.Title}
                            </p>
                            <p className="text-muted small">
                              {dvalue.Subtitle}
                            </p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="position-fixed bottom-0 end-15">
              <Link to="/RoTo">
                <button
                  type="button"
                  className="btn btn-primary w-100 h-100 mb-3"
                >
                  lanjut <i class="bi bi-chevron-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <style>{`
            .h-customsize{
                height : 101px;
            }
            @media screen and (min-width: 768px) {
                .h-customsize {
                    height: 305px;
                }
            }
            .custom-position{
                top : 10px;
                right : 10px;
            }
            .checkbox__inner {
                display: inline-block;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: transparent no-repeat center;
            }
            .checkbox__input{
                opacity : 0;
            }
            .checkbox__input:checked + .checkbox__inner {
                border-color: #52C6C4;
                background-color: #52C6C4;
                background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='14px' height='10px' viewBox='0 0 14 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 59.1 (86144) - https://sketch.com --%3E%3Ctitle%3Echeck%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='ios_modification' transform='translate(-27.000000, -191.000000)' fill='%23FFFFFF' fill-rule='nonzero'%3E%3Cg id='Group-Copy' transform='translate(0.000000, 164.000000)'%3E%3Cg id='ic-check-18px' transform='translate(25.000000, 23.000000)'%3E%3Cpolygon id='check' points='6.61 11.89 3.5 8.78 2.44 9.84 6.61 14 15.56 5.05 14.5 4'%3E%3C/polygon%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                background-size: 14px 10px;
            }
            .end-15{
                right : 15px !important;
            }
            `}</style>
    </>
  );
}

export default PembelianRo;
