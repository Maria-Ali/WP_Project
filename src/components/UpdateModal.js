
import React , { useState } from 'react'
import { Modal, Button } from "react-bootstrap";


const UpdateModal = ({closeModal , product_name , category , price  , quantity , expirydate ,supplier_emailid}) => {
const [prod , updateProd] = useState({})
const [isOpen , setVisibility] = useState(true)



const Check = () => {
  
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
  console.log("hell");

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
    <input type="text" class="form-control" id="validationCustom01" value={product_name} required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  
  <div class="col-md-5">
    <label for="validationCustom02" class="form-label">Category</label>
    <select class="form-select" id="validationCustom02" required>
      <option>Meat</option>
      <option>Dairy</option>
      <option>Frozen</option>
      <option>Bevrages</option>
      <option>Snacks</option>
    </select>
    <div class="text-danger">
      Please select a valid category.
    </div>
  </div>

  
  <div class="col-md-3">
    <label for="validationCustom03" class="form-label">Price</label>
    <input type="number" class="form-control" id="validationCustom03" required />
    <div class="text-danger">
      Please provide a valid Price.
    </div>
  </div>

  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">Quantity</label>
    <input type="number" class="form-control" id="validationCustom04" required />
    <div class="text-danger">
      Please provide a valid Quantity.
    </div>
  </div>


<div class="col-md-6">
    <label for="validationCustom05" class="form-label">Date</label>
    <input type="date" class="form-control" id="validationCustom05" required />
    <div class="text-danger">
      Please provide a valid Date.
    </div>
  </div>

  <div class="col-md-8">
    <label for="validationCustom06" class="form-label">Supplier Email</label>
    <input type="email" class="form-control" id="validationCustom06" required />
    <div class="text-danger">
      Please provide a Email.
    </div>
  </div>


  


  <div class="col-12">
    <button class="btn btn-primary" type="submit" onClick={Check}>Update</button>
  </div>
</form>



    

  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={()=>{closeModal(false)}}>
      Close
    </Button>

     <Button variant="secondary" onClick={Check}>
      Update
    </Button>
  </Modal.Footer>
</Modal>
  </>
  

  )
}

export default UpdateModal