import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';
import React, { useState } from 'react'

const ExpenseCategory = (props) => {
  const IsFirstCardUp = props.firstCard

  const [categoryName, setcategoryName] = useState('')
  const handlecategoryName = (event) => setcategoryName(event.target.value)

  const SaveCategory = () => {
    localStorage.setItem('categoryName', categoryName);
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
        </MDBCardBody>
      </MDBCard>
    );
}
export default ExpenseCategory;