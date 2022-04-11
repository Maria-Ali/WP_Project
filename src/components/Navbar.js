import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar , Form , FormControl , Button } from 'react-bootstrap';
import '../css/Navbar.css';
import {LinkContainer} from 'react-router-bootstrap'

function MyNavbar() {
  return (
    <div className='App'>
      <Navbar bg="info" variant="light" fixed="top" expand="lg">
        <Navbar.Brand>
          <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="Icon" width="40px" height="40px"/>
          INVENTORY MS
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className="container-fluid">
            <LinkContainer to="/CreateProduct">
          <Nav.Link href="CreateProduct">Create_Product</Nav.Link>
          </LinkContainer>
          
          <Nav.Link href="Inventory_Analysis">Inventory_Analysis</Nav.Link>
          <Nav.Link href="Inventory_Report">Inventory_Report</Nav.Link>
          <Nav.Link href="Inventory_Tracking">Inventory_Tracking</Nav.Link>
          <Nav.Link href="Inventory_Bills">Track_Bills</Nav.Link>
        </Nav>

        <Form className="d-flex container-fluid">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
         
        />
        <Button variant="info">Search</Button>
      </Form>
      <Nav className="container-fluid">
        <Nav.Item className="ms-auto">
          <Nav.Link href="LandingPage" className='logout' >Logout</Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar.Collapse>
        
      </Navbar>
    </div>
  )
}

export default MyNavbar