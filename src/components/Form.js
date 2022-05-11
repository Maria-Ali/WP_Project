import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'react-bootstrap';
import '../css/form.css';
import { CompareArrowsOutlined } from '@material-ui/icons';
export class Form extends Component {
    constructor(props){
      
        super(props)
        const {product_name , category , price  , quantity , expirydate ,supplier_emailid , btn_txt , method , url}= this.props;
        this.state={product_name:product_name,
          old_product_name :product_name,
                  category: category,
                  price:price,
                  quantity: quantity,
                expirydate: expirydate,
              supplier_emailid:supplier_emailid,
            btn_txt : btn_txt,
            method : method,
            url : url
          };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitClick = this.submitClick.bind(this);
        this.createProduct = this.createProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }

    handleInputChange(event) {
    this.setState({
      [event.target.name] : event.target.value});
    }

   createProduct = async (e) =>
    {
      e.preventDefault();
      const {product_name , category , price  , quantity , expirydate ,supplier_emailid}=this.state;
     
      const res =  await fetch(`http://localhost:3000/createProduct`,{
        method : 'POST',
        headers:{
          'Accept' : 'application/json',
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify({product_name ,category ,price,quantity,expirydate ,supplier_emailid})
      });
      const data =  await res.json();
      if(res.status===422 || !data){
        window.alert("Invalid Data");
        console.log("Invalid Data");
      }
      else{
         window.alert("Product Created Successfully");
        console.log("Product Created Successfully");
      }

    }





    updateProduct = async (e)=>{
          const {product_name , category , price  , quantity , expirydate ,supplier_emailid}=this.state;

      const res =  await fetch('http://localhost:3000/updateProduct/' + this.state.old_product_name,{
        method : 'PUT',
        headers:{
          'Accept' : 'application/json',
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify({product_name ,category ,price,quantity,expirydate ,supplier_emailid})
      });
      const data =  await res.json();
      if(res.status===422 || !data){
        window.alert("Invalid Data");
        console.log("Invalid Data");
      }
      else{
         window.alert("Product Created Successfully");
        console.log("Product Created Successfully");
      }
    }

    submitClick(event)
    {
      if(!this.email.includes('@')){
        alert("Invalid Email");
      }
      else{

      if (this.state.method==="post"){
        this.createProduct(event);
      }
      else{
        this.updateProduct(event);
      }
    }
    }

  render() {
      
    return (
      <div class="my-form">
        <form method={this.state.method}>
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
            <input type="Eamil" value={this.state.supplier_emailid}  name="supplier_emailid" onChange={this.handleInputChange}/>
            <br></br>
            <div className='d-grid gap-2 button'>
            <Button variant="outline-dark" size="lg" type="submit" onClick={this.submitClick}>{this.state.btn_txt}</Button>{' '}
            </div>
        </form>
      </div>
    )
  }
}

export default Form