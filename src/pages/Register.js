import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './css/Register.css'
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom/dist';

function Register() {
    const [fnameData, SetfnameData] = useState([]);
    const [lnameData, SetlnameData] = useState([]);
    const [emailData, SetemailData] = useState([]);
    const [passData, SetpassData] = useState([]);
    const [reppassData, SetreppassData] = useState([]);
    const [errorMessage, SeterrorMessage] = useState([]);

    let navigate = useNavigate();
    const routeChange = () => { navigate('/'); }

    function fnameOnchange(e) { SetfnameData(e.target.value); }
    function lnameOnchange(e) { SetlnameData(e.target.value); }
    function passOnchange(e) { SetpassData(e.target.value); }
    function reppassOnchange(e) { SetreppassData(e.target.value); }
    function emailOnchange(e) { SetemailData(e.target.value); }

    function ClearForm() {
        SetemailData('');
        SetfnameData('');
        SetlnameData('');
        SetpassData('');
        SetreppassData('');
        routeChange();
    }

    function RegiserClickEvent() {
        const data = { firstName: fnameData, lastName: lnameData, emailAddress: emailData, password: passData };

        axios.post('https://localhost:44315/User/Register', data)
            .then((response) => {
                ClearForm();
            })
            .catch(error => {
                SeterrorMessage(error.message);
                console.error(error);
                alert(errorMessage);
            });
    }

    return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                <MDBCardBody className='px-5'>
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                    <MDBInput value={fnameData} onChange={fnameOnchange} wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
                    <MDBInput value={lnameData} onChange={lnameOnchange} wrapperClass='mb-4' label='Last Name' size='lg' id='form55' type='text' />
                    <MDBInput value={emailData} onChange={emailOnchange} wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
                    <MDBInput value={passData} onChange={passOnchange} wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />
                    <MDBInput value={reppassData} onChange={reppassOnchange} wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' />
                    <div className='d-flex flex-row justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                    </div>
                    <MDBBtn onClick={RegiserClickEvent} className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}
export default Register;