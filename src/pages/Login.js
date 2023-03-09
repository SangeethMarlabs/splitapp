import React, { useState } from 'react'
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist';

function Login() {
    const [emailData, SetemailData] = useState([]);
    const [passData, SetpassData] = useState([]);
    let navigate = useNavigate();
    const routeChange = () => { navigate('/home'); }

    function passOnchange(e) { SetpassData(e.target.value); }
    function emailOnchange(e) { SetemailData(e.target.value); }

    function CheckLogin() {
// To store data
//localStorage.setItem('userName', 'Guest');
// To retrieve data
//alert(localStorage.getItem('Name'));
// To store data
//localStorage.setItem('Name', 'Shanavas');
// To retrieve data
//alert(localStorage.getItem('Name'));

// To clear a specific item
//localStorage.removeItem('Name');
//alert(localStorage.getItem('Name'));
// To clear the whole data stored in localStorage
//localStorage.clear();
localStorage.setItem('userName', 'Guest');
        axios.get('https://localhost:44315/User/CheckLogin', {
            params: {
                emailAddress: emailData,
                password: passData
            }
        })
            .then(function (response) {
                console.log(response.data);
                if (response.data.userId > 0) {
                    localStorage.setItem('userName', response.data.firstName);
                    routeChange();
                } else {
                    localStorage.setItem('userName', 'Guest');
                    alert('Please check the email and password');
                }
            })
            .catch(function (error) {
                localStorage.setItem('userName', 'Guest');
                alert(error);
            })
            .finally(function () {
                // always executed
            });
    }

    if (localStorage.getItem('userName') === 'Guest') {
        
        return (
            
            <MDBContainer className="my-5">                   
                <MDBCard>
                    <MDBRow className='g-0'>
                        <MDBCol md='6'>
                            <MDBCardImage src="./Image/login.jpg" alt="login form" className='rounded-start w-100' />
                        </MDBCol>
                        <MDBCol md='6'>
                            <MDBCardBody className='d-flex flex-column'>
                                <div className='d-flex flex-row mt-2'>
                                    <MDBCardImage src="./Image/logo48.png" alt="Logo" />
                                    <span className="h1 fw-bold mb-0">&nbsp;&nbsp;SplitApp</span>
                                </div>
                                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                                <MDBInput autoFocus value={emailData} onChange={emailOnchange} required wrapperClass='mb-4' label='Email address' id='formControlLg1' type='email' size="lg" />
                                <MDBInput value={passData} onChange={passOnchange} required wrapperClass='mb-4' label='Password' id='formControlLg2' type='password' size="lg" />
                                <MDBBtn onClick={CheckLogin} className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
                                
                                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="./register" style={{ color: '#393f81' }}>Register here</a></p>
                                <div className='d-flex flex-row justify-content-start'>
                                    <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                    <a href="#!" className="small text-muted">Privacy policy</a>
                                </div>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBContainer>
        )
    } else {
        return (
            <div className="container col-md-12 mt-3">

                        <h1 style={{ color: "#414141" }}>You are already logged in as {localStorage.getItem('userName')}!!</h1>

            </div>
        )
    }

}
export default Login