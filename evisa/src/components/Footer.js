import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='primary' className='text-white text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='10' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Online E-visa Platform</h5>

            <p>
             Paper less visa services available here...
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Quick Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='/home' className='text-white'>
                  Home
                </a>
              </li>
              <li>
                <a href='/apply' className='text-white'>
                  Apply
                </a>
              </li>
              <li>
                <a href='/register' className='text-white'>
                  Register
                </a>
              </li>
              <li>
                <a href='/check' className='text-white'>
                  Check Status
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Links</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='/' className='text-white'>
                  Login
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 2
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
      </div>
    </MDBFooter>
  );
} 