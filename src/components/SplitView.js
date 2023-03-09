import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBBadge
} from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SplitView = (props) => {
  //const IsFirstCardUp = props.firstCard
  let navigate = useNavigate();
  const routeChange = () => { navigate('/home'); }
  const [categoryName, setcategoryName] = useState('')
  const [personNames, setpersonNames] = useState('')
  //const handlecategoryName = (event) => setcategoryName(event.target.value)

  const GetDta = () => {
    setcategoryName(localStorage.getItem('categoryName'));
    setpersonNames(localStorage.getItem('personNames'));
    console.log(personNames);
  }

  const ClearData = () => {
    setcategoryName('');
    setpersonNames('');
      localStorage.setItem('categoryName','');
      localStorage.setItem('personNames','');
      alert('Split data cleared');
      routeChange();
  }

    return (
      <MDBCard style={{ width: '18rem' }}>
        <MDBCardBody>
          <MDBCardTitle>Expense split calculations</MDBCardTitle>
          <MDBCardTitle>Category</MDBCardTitle>        
          <h4><MDBBadge className='ms-2'>{categoryName}</MDBBadge></h4>
          <hr />
          <br />
          <MDBCardTitle>Available persons</MDBCardTitle> 
          {personNames}
          < hr/>
          <MDBBtn onClick={GetDta}>Calculate</MDBBtn>&nbsp;
          <MDBBtn onClick={ClearData}>Clear</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    );
}
export default SplitView;