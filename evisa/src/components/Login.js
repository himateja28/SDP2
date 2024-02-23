import React from 'react'
import axios from 'axios'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    function handleLogin(){
        axios.post('http://localhost:8000/login',{
            un:document.getElementsByName('un')[0].value,
            pwd:document.getElementsByName('pwd')[0].value
        }).then((res)=>{
            if(res.data==1)
            {
              navigate('/home')
            }
            if(res.data==0)
            {
              alert("Check your credentails")
            }
        })
    }
    function handleSignup()
    {
        console.log('signup clicked')
        navigate('/register');
    }
  return (
    <>
      <h2>Online Evisa Platform </h2>
    <MDBContainer fluid className="p-3 my-5 border-red-600" >


      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='2' md='4'>


          <MDBInput wrapperClass='mb-2' label='Email address' name='un' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' name='pwd' id='formControlLg' type='password' size="lg"/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg"onClick={handleLogin}>Sign in</MDBBtn>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}} onClick={handleSignup}>
            Register
          </MDBBtn>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </>
  )
}

export default Login
