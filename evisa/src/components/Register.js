import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar2';

import {  MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBCardImage,MDBInput,MDBIcon,MDBCheckbox} from 'mdb-react-ui-kit';
function Register() {
    const navigate = useNavigate();
    const handleSubmit = () => {
      axios.post('http://localhost:8000/newuser',{
        name:document.getElementById('un').value,
        email:document.getElementById('email1').value,
        password:document.getElementById('pwd').value
      }).then((res)=>{
        if(res.data==1)
        {
          navigate('/')
        }
      })
    }
  return (
    <div style={{backgroundColor:"rgba(245, 247,250, 1)"}}>
        <Navbar2/>
      <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
        <br />
        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

        <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput label='Your Name' id='un' type='text' className='w-100'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Your Email' id='email1' type='email'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput label='Password' id='pwd' type='password'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput label='Repeat your password' id='form4' type='password'/>
        </div>

        <div className='mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
        </div>

        <MDBBtn className='mb-4' size='lg' onClick={handleSubmit}>Register</MDBBtn>

      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer>
    </div>
  )
}

export default Register
