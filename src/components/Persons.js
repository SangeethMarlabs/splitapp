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

const Persons = (props) => {
  const IsFirstCardUp = props.firstCard

  const [personNames, setpersonNames] = useState([]);
  const [newPerson, setnewPerson] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const handlenewPerson = (event) => setnewPerson(event.target.value)

  const AddPersonToArray = () => {
    const tpersons = personNames;
    tpersons.push(newPerson);
    console.log(newPerson);
    setnewPerson('');
    setpersonNames(tpersons);
    localStorage.setItem("personNames", JSON.stringify(personNames));

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // hide the alert after 3 seconds
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
        <br />
        <MDBBtn onClick={AddPersonToArray}>Add</MDBBtn><br />
        {showAlert && (
          <Alert>Persons added</Alert>
        )}
      </MDBCardBody>
    </MDBCard>
  );
}
export default Persons;