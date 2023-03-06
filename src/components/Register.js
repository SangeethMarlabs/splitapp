import React from 'react'
import { useState } from 'react';
import axios from 'axios';
//import react masterial UI
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import './Register.css';

function Register() {
    const [fnameData, SetfnameData] = useState([]);
    const [lnameData, SetlnameData] = useState([]);

    function fnameOnchange(e) {
        SetfnameData(e.target.value);
    }

    function lnameOnchange(e) {
        SetlnameData(e.target.value);
    }


    function RegiserClickEvent() {
        const data = { firstName: fnameData, lastName: lnameData, emailAddress: 'sangeeth@marlabs.com', password: '123' };

        axios.post('https://localhost:44307/User/Register', data)
            .then
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }

    return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                <MDBCardBody className='px-5'>
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                    <MDBInput onChange={fnameOnchange} wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
                    <MDBInput onChange={lnameOnchange} wrapperClass='mb-4' label='Last Name' size='lg' id='form55' type='text' />
                    <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
                    <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />
                    <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' />
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