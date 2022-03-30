import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'react-bootstrap';
import '../css/form.css';
export class Form extends Component {
    constructor(props){
        super(props)
    }
  render() {
      const {product_name , category , price  , quantity , expirydate ,supplier_email} = this.props;
    return (
      <div class="my-form">
        <form action="">
            <h3>Product Details</h3>
            <label for="product_name" className='form-label'>Product Name</label>
            <input type="text" placeholder={product_name} className='form-control' name="product_name"/>
            <p >Category </p>
            <select name="category">
              <option value={category}>{category}</option>
              <option value="Dairy">Dairy</option>
              <option value="Meat">Meat</option>
            </select>
            <p >Price</p>
            <input type="number" placeholder={price}  name="price"/>
            <p >Quantity</p>
            <input type="number" placeholder={quantity}  name="quantity"/>
            <p>Expiry Date</p>
            <input type="date" placeholder={expirydate}  name="expirydate"/>
            <p >Supplier Email Id</p>
            <input type="Eamil" placeholder={supplier_email}  name="supplier_email"/>
            <br></br>
            <div className='d-grid gap-2 button'>
            <Button variant="outline-dark" size="lg">Create</Button>{' '}
            </div>
        </form>
      </div>
    )
  }
}

export default Form