import '../css/Login.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import {Button, Container} from 'react-bootstrap';
import Footer from '../components/Footer';
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HomePage } from './HomePage';


export default function Login({ setToken }) {
  // const navigate = useNavigate();
  // const history = useHistory();
    const [validated, setValidated] = useState(false);
    const [ form, setForm ] = useState({});
    const [ errors, setErrors ] = useState({});

    const setField = (field, value) => {
        setForm({
          ...form,
          [field]: value
        })
        // Check and see if errors exist, and remove them from the error object:
        if ( !!errors[field] ) setErrors({
          ...errors,
          [field]: null
        })
    }
    
    const findFormErrors = () => {
        const { email,password } = form;
        const newErrors = {};
        // email errors
        if ( !email || email === '') newErrors.email = 'required';
        else if(!email.includes('@') ) {
          newErrors.email = 'Incorrect Format';
        }
        // password errors
        if ( !password || password === '' ) newErrors.password = 'cannot be blank!';
        else if ( password.length < 4 ) newErrors.password = 'password must be atleast 8 characters!';

        return newErrors
    }
    const checkLogin = () =>{
      const { email,password } = form;
      if(email == "admin@nu.edu.pk" && password == "admin"){
        let token = 'test'
        setToken(token);
        // navigate('/HomePage');
        // return  <HomePage /> ;
      }
      else{
        alert('error');
      }
    }
    
    const handleSubmit = (event) => {
      event.preventDefault()
      // get our new errors
      const newErrors = findFormErrors()
      // Conditional logic:
      if ( Object.keys(newErrors).length > 0 ) {
        // We got errors!
        setErrors(newErrors)
        // console.log(errors.email);
      } 
      else {
       checkLogin();
        // No errors! Put any logic here for the form submission!
        // alert('Thank you for your feedback!');
       
      }
    };
  return (
    <div className="back-container" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg.jpg'})` ,
        backgroundSize: 'cover'}}>
      <Container>
        <div className='login-container'>
          
        <h1>Login</h1>
        
            <Row>
              <Col xs={6} className='col-2'>
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control required type="email" placeholder="Enter Email"
                          onChange={e => setField('email',e.target.value)}
                          isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type='invalid'>
                              { errors.email }
                      </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control required type="password" placeholder="Password"
                          onChange={e => setField('password',e.target.value)}
                          isInvalid={!!errors.password}
                      />
                      <Form.Control.Feedback type='invalid'>
                              { errors.password }
                      </Form.Control.Feedback>
                      </Form.Group>
                      
                      <Button variant="primary" type="submit" className='btn-submit' >
                          Login
                      </Button>
                      </Form>
              </Col>
              <Col xs={5} className='col-1'>
                      <div><img className='log-img img-fluid' src='https://blush.design/api/download?shareUri=4EXm1oz--Ht_PfiB&c=Clothes_0%7Effbcbf_Hair_0%7Effe5b5_Skin_0%7Ead603f&w=800&h=800&fm=png' alt="login" /></div>
                      {/* {process.env.PUBLIC_URL + '/images/s.jpg'} */}
                      {/* <div><img className='log-img img-fluid' src={process.env.PUBLIC_URL + '/images/uncle1.png'} alt="login" /></div> */}
              </Col>
                {/* <Col><div className='hr'></div></Col> */}
                
            </Row>
        </div>
        </Container>
        <Footer></Footer>
    </div>    

);
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}