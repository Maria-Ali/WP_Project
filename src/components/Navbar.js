
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar , Form , FormControl , Button } from 'react-bootstrap';
import '../css/Navbar.css';
import Modal from 'react-bootstrap/Modal';
import {LinkContainer} from 'react-router-bootstrap'
import SearchModal from './SearchModal';
import UpdateModal from './UpdateModal';
// import {SearchModal} from './SearchModal'

function MyNavbar({loadData, deleteData}) {
  // const [lgShow, setLgShow] = useState(false);
  const [ searchName, setSearchName ] = useState({});
  const [ prod, setProd ] = useState({
    product_name : '',
    category : '',
    price : '',
    quantity : '',
    expirydate :'',
    supplier_emailid : ''
  })
  const [ openState, setOpenState] = useState(false);

  const setField = (field, value) => {
        setSearchName({value})}
 
  // const onSearch = (e,val) => {
  //     setOpenState(val);
  //   searchProduct(e);
  // }
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
        console.log("prodalid Data");
        alert('The product you searched for does not exist!')
      }
      else{
        console.log(data);
        prod.product_name = data['message']['product_name'];
        
        prod.quantity = data['message']['quantity'];
        // product_name : data['message']['product_name']
        prod.category = data['message']['category'];
        prod.price = data['message']['price'];
        prod.expirydate = data['message']['expirydate'];
        prod.supplier_emailid = data['message']['supplier_emailid']
        
        setOpenState(true);
      }
    }
  return (
    <div className='App'>
      <Navbar bg="info" variant="light" fixed="top" expand="lg">
        <Navbar.Brand>
          <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="Icon" width="40px" height="40px"/>
          prodENTORY MS
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className="container-fluid">
            <LinkContainer to="/CreateProduct">
          <Nav.Link href="CreateProduct">Create_Product</Nav.Link>
          </LinkContainer>
          
          {/* <Nav.Link href="Analysis">prodentory_Analysis</Nav.Link>
          <Nav.Link href="Report">prodentory_Report</Nav.Link>
          <Nav.Link href="Tracking">prodentory_Tracking</Nav.Link>
          <Nav.Link href="Bills">Track_Bills</Nav.Link> */}
        </Nav>

        <Form className="d-flex container-fluid">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={e => setField('search',e.target.value)}
         
        />
        <Button variant="info" onClick={e => searchProduct(e)}>Search</Button>
        {openState ? <UpdateModal
        closeModal={setOpenState} 
        old_product_name={prod.product_name} 
        old_category={prod.category} 
        old_price={prod.price} 
        old_quantity={prod.quantity} 
        old_expirydate={prod.expirydate} 
        old_supplier_emailid={prod.supplier_emailid} 
        loadData={loadData}
        deleteData={deleteData}
        /> : null}
                
        
      </Form>
      <Nav className="container-fluid">
        <Nav.Item className="ms-auto">
          <LinkContainer to="/Logout">
              <Nav.Link href="Logout">Logout</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
      </Navbar.Collapse>
        
      </Navbar>
      
    </div>
  )
}

export default MyNavbar;