import React, { Component } from 'react'
import MyNavbar from '../components/Navbar'
import UpdateModal from '../components/UpdateModal';
import '../css/homepage.css'

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {inventory : [],
                  openModal : false}
    this.loadData = this.loadData.bind(this);
 }
  componentDidMount() {
    window.addEventListener('load', this.loadData);
 }

  componentWillUnmount() { 
   window.removeEventListener('load', this.loadData) 
   this.setState({openModal : false}) 
 }

 
 loadData = async (e) =>
    {
     
      const res =  await fetch(`http://localhost:3000/getAllDocuments`,{
        method : 'GET',
        headers:{
          'Accept' : 'application/json',
          'Content-Type' : 'application/json'
        }
      });
      const data =  await res.json();
      this.setState({
      inventory : data.message});
    }


    DeleteData = async (product_name) =>{
      console.log(product_name);
       const res =  await fetch(`http://localhost:3000/Delete/${product_name}`,{
        method : 'DELETE',
        headers:{
          'Accept' : 'application/json',
          'Content-Type' : 'application/json'
        }
      });
      const data =  await res.json();
      this.loadData();
      
    }

     ModalOpen = (val) =>{
        this.setState({openModal : val})
      }

    

    

  render() {
    return (
      <div>
        <MyNavbar/>
        <div className='set'>

        </div>
        <div className="table-responsive-md">
          <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Category</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Expiry Date</th>
      <th scope="col">Supplier Email</th>
    </tr>
  </thead>
  <tbody>
   {this.state.inventory.map((inv, index) => (  
              <tr data-index={index}>  
                <td>{index+1}</td>  
                <td>{inv.product_name}</td>  
                <td>{inv.category}</td>
                <td>{inv.price}</td>  
                <td>{inv.quantity}</td>  
                <td>{new Date(inv.expirydate).toLocaleDateString()}</td>
                <td>{inv.supplier_emailid}</td>  

                <td><button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#myModal" onClick={()=>{this.ModalOpen(true)}} >Update</button></td>
                
                
                {this.state.openModal ? <UpdateModal closeModal={this.ModalOpen} old_product_name={inv.product_name} old_category={inv.category} old_price={inv.price} old_quantity={inv.quantity} old_expirydate={inv.expirydate} old_supplier_emailid={inv.supplier_emailid}/> : null}
                
            
                 <td><button type="button" class="btn btn-outline-primary" onClick={()=>{this.DeleteData(inv.product_name)}}>Delete</button></td>
              </tr>  
            ))}  
  </tbody>
</table>
        </div>
        
 
      </div>
      
      
      
      
      
      

    )
  }
}

export default HomePage