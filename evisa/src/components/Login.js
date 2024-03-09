import axios from 'axios'
import { MDBContainer, MDBCol, MDBRow, MDBBtn,MDBIcon, MDBInput, MDBCheckbox} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import pic from '../assests/avatar.png'
import Navbar2 from './Navbar2';
// import Role from './Role';
function Login({store}) {
    const navigate = useNavigate(null);
    function handleLogin(){
      const user = document.getElementById('email1').value
        axios.post('http://localhost:8000/login',{
            un:document.getElementById('email1').value,
            pwd:document.getElementById('pwd').value
        }).then((res)=>{
            if(res.data=='1')
            {
              navigate('/home')
              // localStorage.setItem('username',user)
              // localStorage.setItem('role','user')
              store.dispatch({"type": "login","data":{"un":user,"role":"user"}})
            }
            if(res.data=='2')
            {
              navigate('/sider')
              store.dispatch({"type": "login","data":{"un":user,"role":"emp"}})
              // ProctectedRoute('emp')
            }
            if(res.data=='0')
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
    < div style={{backgroundColor:"rgba(245, 247,250, 1)"}}>
      
      <Navbar2/>
    <MDBContainer fluid className="p-3 my-5 border-red-600" >


      <MDBRow>
        <MDBCol col='6' md='5'>
          <img src={pic} class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='2' md='4'>
          <br /><br /><br />
          <br />
          <br />
          <br />
          <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Your Email' id='email1' type='email'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput label='Password' id='pwd' type='password'/>
        </div>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 m-1 w-100 " size="lg"onClick={handleLogin}>Login</MDBBtn>

          <MDBBtn className="mb-4 m-1 w-100 " size="lg" style={{backgroundColor: '#3b5998'}} onClick={handleSignup}>
            Register
          </MDBBtn>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  )
}

export default Login
