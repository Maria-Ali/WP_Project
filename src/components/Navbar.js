
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar , Form , FormControl , Button } from 'react-bootstrap';
import '../css/Navbar.css';
import Modal from 'react-bootstrap/Modal';
import {LinkContainer} from 'react-router-bootstrap'

function MyNavbar() {
  const [lgShow, setLgShow] = useState(false);
  const [ searchName, setSearchName ] = useState({});
  const [ prod, setProd ] = useState({});
  // const setProdDeets = (field, value) => {
  //   setForm({
  //     ...form,
  //     [field]: value
  //   })}
  const setField = (field, value) => {
        setSearchName({value})}
  // const setName = (value) => {
  //   setProdName({value})}
  const searchProduct = async (e) =>
    {
      e.preventDefault();
      // let name = searchName.name;
      const url = `http://localhost:3000/searchProduct/${searchName.value}`  ;
      console.log(url);
      const res =  await fetch(url  ,{
        method : 'GET',
        headers:{
          'Accept' : 'application/json',
          'Content-Type' : 'application/json'
        },
      });
      const data =  await res.json();
      if(res.status===422 || !data){
        console.log("Invalid Data");
      }
      else{
        // console.log(data);
        setProd(data);
        setLgShow(true);
        // const{category ,createdAt,expirydate, price,product_name,quantity, supplier_emailid, updatedAt,__v,_id} = this.data;
        // console.log(data['message']['product_name']);
        // setName(data['message']['product_name']);
      }
    }
    const onSearch = (e) => {
      if(searchName !== ''){
        searchProduct(e);
        
      }
    }
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
          onChange={e => setField('search',e.target.value)}
         
        />
        <Button variant="info" onClick={e => onSearch(e)}>Search</Button>
        
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

export default MyNavbar;