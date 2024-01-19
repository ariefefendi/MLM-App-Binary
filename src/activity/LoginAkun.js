import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const navigate = useNavigate();
  const [dataModel, setDataModel] = useState([
    {
      email: "",
      password: "",
    },
  ]);
  function handleChange(e) {
    setDataModel({ ...dataModel, [e.target.name]: e.target.value });
  }

  const login = () => {
    var config = {
      method: "post",
      url: "http://apiabsensi.whusnet.com/api/Login/auth",
      headers: { "Content-Type": "multipart/form-data" },
      data: dataModel,
    };
    axios(config)
      .then(function (res) {
        console.log(res);
        let Status = res.data.status;
        let Message = res.data.Message;
        let IDUSER_ABSENSI = res.data.Record["IDUSER_ABSENSI"];
        let IDUSER = res.data.Record["IDUSER"];
        let NAMACABANG = res.data.Record["NAMACABANG"];
        let EMAILLOGIN = res.data.Record["EMAIL"];

        let NAMALENGKAP = res.data.UserAdmin["NAMA"];
        let ALAMAT = res.data.UserAdmin["ALMT"];
        let EMAIL = res.data.UserAdmin["EMAIL"];
        let HP = res.data.UserAdmin["HP"];
        let JABATAN = res.data.UserAdmin["JABATAN"];

        // loged in, Redirect to dashboard
        // Create Session.
        sessionStorage.setItem("Status", Status);
        sessionStorage.setItem("Message", Message);
        sessionStorage.setItem("IDUSER_ABSENSI", IDUSER_ABSENSI);
        sessionStorage.setItem("IDUSER", IDUSER);
        sessionStorage.setItem("EMAIL_LOGIN", EMAILLOGIN);
        sessionStorage.setItem("EMAIL", EMAIL);
        sessionStorage.setItem("NAMALENGKAP", NAMALENGKAP);
        sessionStorage.setItem("HP", HP);
        sessionStorage.setItem("ALAMAT", ALAMAT);
        sessionStorage.setItem("NAMA_PERUSAHAAN", NAMACABANG);
        sessionStorage.setItem("JABATAN", JABATAN);

        Status == 200
          ? navigate("/Dashboard", { replace: true })
          : toast("Status : " + Message);
      })
      .catch(function (error) {
        toast("Status : " + error);
      });
  };

  return (
    <div className="container-fluid">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="row">
        <div className="col-12 px-0">
          <div className="bg-default bg-gradient rounded-bottom p-4 py-5">
            <p className="h5 text-center text-white py-5 lt-spacing">
              NKS App
            </p>
          </div>
        </div>

        <div
          data-cy="form-login"
          className="col-12 px-0 z-index-1 position-absolute mt-11"
        >
          <div className="bg-white bg-gradient rounded-4 shadow p-3 py-3 mx-4 mb-4">
            <p className="h6 text-center text-default py-4 mt-0 lt-spacing">
              Login Akun
            </p>
            <FloatingLabel controlId="floatingInputGrid" label="Email address">
              <Form.Control
                type="text"
                onChange={handleChange}
                name="email"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <Form.Text id="passwordHelpBlock" muted>
              Login dengan email yang terdaftar.
            </Form.Text>

            <FloatingLabel
              className="mt-4"
              controlId="floatingInputGrid"
              label="Password"
            >
              <Form.Control
                type="password"
                onChange={handleChange}
                name="password"
                placeholder="1234"
              />
            </FloatingLabel>
            <Form.Text id="passwordHelpBlock" muted>
              Password harus 8-20 panjangnya , kombinasi huruf Besar Dan Angka.
            </Form.Text>

            <div className="text-center mt-5 d-grid gap-2">
              <a href="#" className="text-decoration-none link-secondary mb-2">
                Lupa password?
              </a>
              <Button
                onClick={login}
                variant="default text-white rounded-3 py-2"
                size="sm"
              >
                Masuk
              </Button>
              <a href="#" className="text-decoration-none link-secondary mt-2">
                Tidak memiliki akun?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
