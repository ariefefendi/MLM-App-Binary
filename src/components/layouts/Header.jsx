import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

function Header(props) {
  let R = props.material;
  const [show, setShow] = useState(false);

  const changeTheme = () => {
    console.log("tes");
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src='holder.js/20x20?text=%20'
              className='rounded me-2'
              alt=''
            />
            <strong className='me-auto'>Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </Col>
    </Row>;
  };

  const ShowAlert = (variant) => {
    <></>;
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className='row pe-0'>
        <div className='col-auto'>
          <Link to={R.link} className={R.classLink}>
            <i className={R.bi_icon}></i>
          </Link>
        </div>
        <div className='col align-self-left text-left ps-0'>
          <div className='logo-small'>
            {R.logoVisible ? <img src='assets/img/logo.png' alt='' /> : ""}
            <h5>{R.title}</h5>
          </div>
        </div>

        {R.iconNotifVisible ? (
          <>
            <div className='col-auto pe-0'>
              <div
                className='btn btn-light'
                style={{ height: "40px", width: "56px" }}>
                <div className='form-check form-switch'>
                  <input
                    onClick={changeTheme}
                    className='form-check-input'
                    type='checkbox'
                    id='flexSwitchCheckDefault'
                  />
                </div>
              </div>
            </div>

            <div className='col-auto pe-0'>
              <a
                href={R.linkNotif}
                target='_self'
                className='btn btn-light btn-44'>
                <i className='bi bi-bell'></i>
                <span className='count-indicator'></span>
              </a>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Header;
