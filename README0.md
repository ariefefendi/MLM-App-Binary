## Install Hanko Elements
  npm i @teamhanko/hankoelements

## Install js-Cookies
  npm i js-Cookie

## Install React-router-dom
  npm i react-router-dom

## Import elements
  import Cookies from 'js-cookie';
  import { useNavigate } from "react-router-dom";
  import { register } from "@teamhanko/hanko-elements";
  import styles from '../assets/css/hanko.module.css';

## Get the JWT from Cookie
  Cookies.get('hanko')

## Delete Cookie (For Logout)
  Cookies.delete('hanko')
