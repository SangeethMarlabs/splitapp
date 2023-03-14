import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';

const ExpenseCategory = () => {
  const [categoryName, setcategoryName] = useState('')
  const [showAlert, setShowAlert] = useState(false);
  const handlecategoryName = (event) => setcategoryName(event.target.value)

  const SaveCategory = () => {
    localStorage.setItem('categoryName', categoryName);

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // hide the alert after 3 seconds
  }

    return (
      <MDBCard style={{ width: '18rem' }}>
        <MDBCardBody>
          <MDBCardTitle>Expense Category</MDBCardTitle>
          <MDBCardText>
            Add Expense category here
          </MDBCardText>
          <MDBInput value={categoryName} onChange={handlecategoryName} label='Category Name' id='categoryname' type='text' />
          <br />
          <MDBBtn onClick={SaveCategory}>Add</MDBBtn>
          {showAlert && (
          <Alert>Category added</Alert>
        )}
        </MDBCardBody>
      </MDBCard>
    );
}
export default ExpenseCategory;