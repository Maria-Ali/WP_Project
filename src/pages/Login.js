import '../css/Login.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import {Button, Container} from 'react-bootstrap';
import Footer from '../components/Footer';
import React, { useState } from 'react';


export default function Login(props) {
  
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
        let a ='@';
        // let emailC = email;
        if ( !email || email === '') newErrors.email = 'required';
        else if(!email.includes('@') ) {
          newErrors.email = 'Incorrect Format';
        }
        // password errors
        if ( !password || password === '' ) newErrors.password = 'cannot be blank!';
        else if ( password.length < 4 ) newErrors.password = 'password must be atleast 8 characters!';

        return newErrors
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
    } else {
      // No errors! Put any logic here for the form submission!
      alert('Thank you for your feedback!')
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
                      
                      <Button variant="primary" type="submit" className='btn-submit'>
                          Submit
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
// import './Login.css';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import 'bootstrap/dist/css/bootstrap.css';
// import Form from 'react-bootstrap/Form'
// import {Button, Container} from 'react-bootstrap';
// import Footer from '../reuse/Footer';
// import React, { useState } from 'react';
// const { Formik } = formik;

// const schema = yup.object().shape({
//   firstName: yup.string().required(),
//   lastName: yup.string().required(),
//   username: yup.string().required(),
//   city: yup.string().required(),
//   state: yup.string().required(),
//   zip: yup.string().required(),
//   terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
// });

// export default function Login() {
//   return (
//     <Formik
//       validationSchema={schema}
//       onSubmit={console.log}
//       initialValues={{
//         firstName: 'Mark',
//         lastName: 'Otto',
//         username: '',
//         city: '',
//         state: '',
//         zip: '',
//         terms: false,
//       }}
//     >
//       {({
//         handleSubmit,
//         handleChange,
//         handleBlur,
//         values,
//         touched,
//         isValid,
//         errors,
//       }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Form.Group as={Col} md="4" controlId="validationFormik01">
//               <Form.Label>First name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="firstName"
//                 value={values.firstName}
//                 onChange={handleChange}
//                 isValid={touched.firstName && !errors.firstName}
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormik02">
//               <Form.Label>Last name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="lastName"
//                 value={values.lastName}
//                 onChange={handleChange}
//                 isValid={touched.lastName && !errors.lastName}
//               />

//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormikUsername">
//               <Form.Label>Username</Form.Label>
//               <InputGroup hasValidation>
//                 <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                 <Form.Control
//                   type="text"
//                   placeholder="Username"
//                   aria-describedby="inputGroupPrepend"
//                   name="username"
//                   value={values.username}
//                   onChange={handleChange}
//                   isInvalid={!!errors.username}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.username}
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>
//           </Row>
//           <Row className="mb-3">
//             <Form.Group as={Col} md="6" controlId="validationFormik03">
//               <Form.Label>City</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="City"
//                 name="city"
//                 value={values.city}
//                 onChange={handleChange}
//                 isInvalid={!!errors.city}
//               />

//               <Form.Control.Feedback type="invalid">
//                 {errors.city}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik04">
//               <Form.Label>State</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="State"
//                 name="state"
//                 value={values.state}
//                 onChange={handleChange}
//                 isInvalid={!!errors.state}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.state}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik05">
//               <Form.Label>Zip</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Zip"
//                 name="zip"
//                 value={values.zip}
//                 onChange={handleChange}
//                 isInvalid={!!errors.zip}
//               />

//               <Form.Control.Feedback type="invalid">
//                 {errors.zip}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>
//           <Form.Group className="mb-3">
//             <Form.Check
//               required
//               name="terms"
//               label="Agree to terms and conditions"
//               onChange={handleChange}
//               isInvalid={!!errors.terms}
//               feedback={errors.terms}
//               feedbackType="invalid"
//               id="validationFormik0"
//             />
//           </Form.Group>
//           <Button type="submit">Submit form</Button>
//         </Form>
//       )}
//     </Formik>
//   );
// }