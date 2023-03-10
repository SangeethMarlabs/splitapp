import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput,
  MDBRadio
} from 'mdb-react-ui-kit';
import React, { useState } from 'react'

const Expense = (props) => {
  const IsFirstCardUp = props.firstCard

  const [personNames, setpersonNames] = useState([]);
  const [expenseName, setexpenseName] = useState([]);
  const [expenseAmount, setexpenseAmount] = useState([]); 
  const [broughtBy, setbroughtBy] = useState([]); 
  const handleexpenseName = (event) => setexpenseName(event.target.value)
  const handlebroughtBy = (event) => setbroughtBy(event.target.id)
  const handleexpenseAmount = (event) => 
  {
    setexpenseAmount(event.target.value);
    GetData();
  }

  const GetData = () => {
    setpersonNames(JSON.parse(localStorage.getItem('personNames')));
  }

  const SaveExpense = () => {
    //localStorage.setItem('personNames', personNames);
    localStorage.setItem("expenseName", expenseName);
    localStorage.setItem("expenseAmount", expenseAmount);
    localStorage.setItem("broughtBy", broughtBy);
  }

  const ListPersons = personNames.map((n) =>
  <MDBRadio onClick={handlebroughtBy} name='flexRadioDefault' id={n.toString()} label={n} />
  );

  return (
    <MDBCard style={{ width: '18rem' }}>
      <MDBCardBody>
        <MDBCardTitle>Expense</MDBCardTitle>
        <MDBCardText>
          Add expense here
        </MDBCardText>
        <MDBInput value={expenseName} onChange={handleexpenseName} label='Expense name' id='expensename' type='text' /><br/>
        <MDBInput value={expenseAmount} onChange={handleexpenseAmount} label='Amount' id='expensename' type='number' />
        <MDBCardText>
          <br />
          Expense brought by<br />
          {ListPersons}
        </MDBCardText>        
        <br />
        <MDBBtn onClick={SaveExpense}>Add</MDBBtn><br />
      </MDBCardBody>
    </MDBCard>
  );
}
export default Expense;