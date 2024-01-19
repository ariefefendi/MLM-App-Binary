import React from 'react';
const helpers = {
  // check token. 
  checkTokenAuth: function() {
    // get sessionStorage for Token
    let SessToken = sessionStorage.getItem("token", true);
    let statusToken = "";
    (SessToken != null) ? statusToken = true : statusToken = false;
    return statusToken;
  }
}
export default helpers;