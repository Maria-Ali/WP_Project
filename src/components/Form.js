import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'react-bootstrap';
import '../css/form.css';
export class Form extends Component {
    constructor(props){
        super(props)
    }
  render() {
      const {product_name , category , price  , quantity , expirydate ,supplier_email , btn_txt} = this.props;
    return (
      <div class="my-form">
        <form action="">
            <h3>Product Details</h3>

            <label for="product_name" className='form-label'>Product Name</label>
            <input type="text" value={product_name}  name="product_name"/>

            <label for="category" className='form-label'>Category </label>
            <select name="category" >
              <option value={category}>{category}</option>
              <option value="Dairy">Dairy</option>
              <option value="Meat">Meat</option>
            </select>


            <div>
            <label for="price" className='form-label'>Price</label>
            </div>
            <input type="number" value={price}  name="price"/>
            
            <div>
            <label className='form-label' for="quantity">Quantity</label>
            </div>
            <input type="number" value={quantity}  name="quantity"/>

            <label for="expirydate" className='form-label'>Expiry Date</label>
            <input type="date" value={expirydate}  name="expirydate"/>

            <label for="supplier_email" className='form-label' >Supplier Email Id</label>
            <input type="Eamil" value={supplier_email}  name="supplier_email"/>
            <br></br>
            <div className='d-grid gap-2 button'>
            <Button variant="outline-dark" size="lg">{btn_txt}</Button>{' '}
            </div>
        </form>
      </div>
    )
  }
}

export default Form