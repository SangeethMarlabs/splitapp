import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';
import React, { useState } from 'react'

const Persons = (props) => {
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
        <MDBCardTitle>Persons</MDBCardTitle>
        <MDBCardText>
          Add persons here
        </MDBCardText>
        <MDBCardText>
          Persons in list<br />
          {ListPersons}
        </MDBCardText>
        <MDBInput value={newPerson} onChange={handlenewPerson} label='New person' id='categoryname' type='text' />
        <MDBBtn onClick={AddPersonToArray}>Add</MDBBtn><br />
      </MDBCardBody>
    </MDBCard>
  );
}
export default Persons;