// NOTE :
// #5.1 Fetching data dengan useEffect.
// FILTERED
// fungsi = hampir sama dengan component
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import {Button, Form, FloatingLabel } from 'react-bootstrap';

// import ReactDOM from 'react-dom'


function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [accepted, setAccepted] = useState(false);

  const getUser = async () => {
    try {
      let res = await Axios.get(`https://jsonplaceholder.typicode.com/users`)
        let user = res.data;
        user.length > "1" ? setUser(user) : setUser([user])
      } catch (e) {
        console.log(e.message);
      }
    }
    
       // function destroy Access
       function destroyAccess() {
        sessionStorage.clear();
        console.log(sessionStorage.getItem('Status', true));
        navigate("/", { replace: true });
      }

    // function acceptPolicy
    const acceptPolicy = () => {
        try { 
          let status = sessionStorage.getItem('Status', true);
          if(status != 200){ navigate("/", { replace: true }); }
          console.log("status :"+status);
        }
        catch(err) {
          let Message = sessionStorage.getItem('Message', true);
          sessionStorage.setItem('Message', Message);
          navigate("/", { replace: true })
        }       
    }
    
    // useEffect / ready function.
    useEffect(() => {
      acceptPolicy()
      getUser()
    },[])

    return (
      <div className="container my-3" >
      <div className="row justify-content-center">
      <div className="col-md-8">
        <h1>Hello Page Profile!</h1>
        <Button onClick={destroyAccess} variant="default text-white rounded-3 py-2" size="sm">
          Destroy Access
        </Button>
      </div>
      </div>
      </div>
    )

  }

  export default App;
