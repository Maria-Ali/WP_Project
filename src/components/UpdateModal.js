
import React , { useState } from 'react'
import { Modal, Button } from "react-bootstrap";


const UpdateModal = ({closeModal , product_name , category , price  , quantity , expirydate ,supplier_emailid}) => {
const [prod , updateProd] = useState({})
const [isOpen , setVisibility] = useState(true)




  return (
   <>
     <Modal show={isOpen} onHide={()=>{closeModal(false)}}>
  <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    

  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={()=>{closeModal(false)}}>
      Close
    </Button>

     <Button variant="secondary" onClick={()=>{closeModal(false)}}>
      Update
    </Button>
  </Modal.Footer>
</Modal>
  </>
  

  )
}

export default UpdateModal