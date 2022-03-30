import {Component } from 'react';
import './Login.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap';
import Footer from '../reuse/Footer';
class Login extends Component {
    
    render() { 
        return (
            <div className="back-container" style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg.jpg'})` ,
                // backgroundPosition: 'center',
                backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',
       
              }}>
                <div className='login-container'>
                <h1>Login</h1>
                    <Row>
                        <Col xs={5}>
                            {/* <form>
                                <label>Username</label><br></br>
                                <input type= "text" required></input><br></br>
                                <label>Password</label><br></br>
                                <input type="password"></input><br></br>
                            </form> */}
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text> */}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group> */}
                                <Button variant="primary" type="submit" className='btn-submit'>
                                    Submit
                                </Button>
                                </Form>
                        </Col>
                        <Col><div className='hr'></div></Col>
                        <Col xs={5}>
                            <div><img className='log-img img-fluid' src={process.env.PUBLIC_URL + '/images/s.jpg'} alt="login" /></div>
                        </Col>
                    </Row>
                </div>
                <Footer></Footer>
            </div>    
        
        );
    }
}
 
export default Login;