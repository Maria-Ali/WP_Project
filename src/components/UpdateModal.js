
import React , { useEffect, useState , useStrict } from 'react'
import { Modal, Button } from "react-bootstrap";


const UpdateModal = ({closeModal , old_product_name , old_category , old_price  , old_quantity , old_expirydate ,old_supplier_emailid , loadData}) => {
const [prod , updateProd] = useState({
  product_name : old_product_name,
  category : old_category,
  price : old_price,
  quantity : old_quantity,
  expirydate : old_expirydate,
  supplier_emailid : old_supplier_emailid
})
const [isOpen , setVisibility] = useState(true)



// Example starter JavaScript for disabling form submissions if there are invalid fields
useEffect(()=>{
'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
} ,[])
  


const UpdateData  = async(e) =>{
  e.preventDefault();
  const{product_name , category , price, quantity, expirydate , supplier_emailid} = prod
  alert(product_name +" "+ category + " " +price + " " +quantity + " " + expirydate+ " " + supplier_emailid)
  
 
   const res =  await fetch(`http://localhost:3000/updateProduct/${old_product_name}`,{
        method : 'PUT',
        headers:{
          'Accept' : 'application/json',
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify({product_name ,category ,price,quantity,expirydate , supplier_emailid})
      });
      const data =  await res.json();
      if(res.status===422 || !data){
        window.alert("Invalid Data");
        console.log("Invalid Data");
      }
      else{
         loadData(e)
         closeModal(false)
         window.alert("Product Updated Successfully");
        console.log("Product Updated Successfully");
      }

}

  return (
   <>
     <Modal show={isOpen} onHide={()=>{closeModal(false)}}>
  <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
  </Modal.Header>
  <Modal.Body>




    <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-6">
    <label for="validationCustom01" class="form-label">Product Name</label>
    <input type="text" class="form-control" id="validationCustom01" value={prod.product_name} required onChange={e=>updateProd({...prod , product_name:e.target.value})}/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  
  <div class="col-md-5">
    <label for="validationCustom02" class="form-label">Category</label>
    <select class="form-select" id="validationCustom02" onChange={e=>updateProd({...prod , category:e.target.value})} required>
      <option selected>Meat</option>
      <option>Dairy</option>
      <option>Frozen</option>
      <option>Bevrages</option>
      <option>Snacks</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid category.
    </div>
  </div>

  
  <div class="col-md-3">
    <label for="validationCustom03" class="form-label">Price</label>
    <input type="number" class="form-control" id="validationCustom03" value={prod.price} onChange={e=>updateProd({...prod , price:e.target.value})} required />
    <div class="invalid-feedback">
      Please provide a valid Price.
    </div>
  </div>

  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">Quantity</label>
    <input type="number" class="form-control" id="validationCustom04" onChange={e=>updateProd({...prod , quantity:e.target.value})} value = {prod.quantity} required />
    <div class="invalid-feedback">
      Please provide a valid Quantity.
    </div>
  </div>


<div class="col-md-6">
    <label for="validationCustom05" class="form-label">Date</label>
    <input type="date" class="form-control" id="validationCustom05"  onChange={e=>updateProd({...prod , expirydate:e.target.value})} required />
    <div class="invalid-feedback">
      Please provide a valid Date.
    </div>
  </div>
  

  <div class="col-md-8 ">
    <label for="validationCustom06" class="form-label">Supplier Email</label>
    <input type="email" class="form-control " id="validationCustom06" value={prod.supplier_emailid} required onChange={e=>updateProd({...prod , supplier_emailid:e.target.value})}/>
    <div class="invalid-feedback">
      Please provide a Email.
    </div>
  </div>


  


  <div class="col-12">
    <button class="btn btn-primary" type="submit" onClick={UpdateData} >Update</button>
  </div>
</form>



    

  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={()=>{closeModal(false)}}>
      Close
    </Button>

     
  </Modal.Footer>
</Modal>
  </>
  

  )
}

export default UpdateModal