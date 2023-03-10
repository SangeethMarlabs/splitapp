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
  const [newPerson, setnewPerson] = useState('');
  const handlenewPerson = (event) => setnewPerson(event.target.value)

  const AddPersonToArray = () => {
    const tpersons = personNames;
    tpersons.push(newPerson);
    console.log(newPerson);
    setnewPerson('');
    setpersonNames(tpersons);
    localStorage.setItem('personNames', personNames);
    console.log(personNames);
  }

  const ListPersons = personNames.map((n) =>
  <li key={n.toString()}>{n}</li>
  );

  return (
    <MDBCard style={{ width: '18rem' }}>
      <MDBCardBody>
        <MDBCardTitle>Expense</MDBCardTitle>
        <MDBCardText>
          Add expense here
        </MDBCardText>
        <MDBInput value={newPerson} onChange={handlenewPerson} label='Expense name' id='expensename' type='text' /><br/>
        <MDBInput value={newPerson} onChange={handlenewPerson} label='Amount' id='expensename' type='number' />
        <MDBCardText>
          <br />
          Expense brought by<br />
          {ListPersons}
          <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Sangeeth' />
      <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='Shanavas' />


        </MDBCardText>
        
        <br />
        <MDBBtn onClick={AddPersonToArray}>Add</MDBBtn><br />
      </MDBCardBody>
    </MDBCard>
  );
}
export default Expense;