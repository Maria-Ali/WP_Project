import '../css/Login.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import {Button, Container} from 'react-bootstrap';
import Footer from '../components/Footer';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HomePage } from './HomePage';
import Login from './Login';
// import { Redirect } from 'react-router-dom';


export default function Logout() {
    sessionStorage.clear()
  return (
    <Login/>
);
}
