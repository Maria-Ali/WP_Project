import React, { Component } from 'react';
import '../App.css';
import Footer from '../reuse/Footer';
import Login from './Login';

class Try extends Component{
  render(){
    return (
      <div >
        {/* <Footer></Footer> */}
        <Login></Login>
      </div>
    );
  }
}

export default Try;