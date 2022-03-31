import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'react-bootstrap';
import '../css/form.css';
export class Form extends Component {
    constructor(props){
      
        super(props)
        const {product_name , category , price  , quantity , expirydate ,supplier_email , btn_txt}= this.props;
        this.state={product_name:product_name,
                  category: category,
                  price:price,
                  quantity: quantity,
                expirydate: expirydate,
              supplier_email:supplier_email,
            btn_txt : btn_txt};

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
    this.setState({
      [event.target.name] : event.target.value});
    }
  
    

  render() {
      
    return (
      <div class="my-form">
        <form action="" >
            <h3>Product Details</h3>

            <label for="product_name" className='form-label'>Product Name</label>
            <input type="text" value={this.state.product_name}  name="product_name" onChange={this.handleInputChange}/>

            <label for="category" className='form-label'>Category </label>
            <select name="category"  onChange={this.handleInputChange}>
              <option value={this.state.category}>{this.state.category}</option>
              <option value="Dairy">Dairy</option>
              <option value="Meat">Meat</option>
            </select>


            <div>
            <label for="price" className='form-label'>Price</label>
            </div>
            <input type="number" value={this.state.price}  name="price" onChange={this.handleInputChange}/>
            
            <div>
            <label className='form-label' for="quantity">Quantity</label>
            </div>
            <input type="number" value={this.state.quantity}  name="quantity" onChange={this.handleInputChange}/>

            <label for="expirydate" className='form-label'>Expiry Date</label>
            <input type="date" value={this.state.expirydate}  name="expirydate" onChange={this.handleInputChange}/>

            <label for="supplier_email" className='form-label' >Supplier Email Id</label>
            <input type="Eamil" value={this.state.supplier_email}  name="supplier_email" onChange={this.handleInputChange}/>
            <br></br>
            <div className='d-grid gap-2 button'>
            
            <Button variant="outline-dark" size="lg" type="submit">{this.state.btn_txt}</Button>{' '}
            </div>
        </form>
      </div>
    )
  }
}

export default Form