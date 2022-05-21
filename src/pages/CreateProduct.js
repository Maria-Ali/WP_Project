
import React from 'react'
import Form from '../components/Form';
import '../css/createproduct.css';



export default function CreateProduct(props) {
  return (
    <div className="body">

      <div className='child1'>

          <div className='logo-container'>
           <img src={process.env.PUBLIC_URL + '/images/biglogo.png'} alt="Icon"/>
           </div>
           <div className='title'>We're in the business of growing yours.</div>
           <br/>
          <div className='line'></div>
           <div className='description'><p>Easily manage your inventory by just typing in the data , we're here to manage and store it for you , efficiently as we aim to make your profits high. GoodLuck!</p></div>
          
      </div>
    <div class="child2">
    <div className='form-container'>
     <Form   className='form'/>  
    </div>
    </div>
    </div>
      
    

  )
}
