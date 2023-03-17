import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Persons = () => {
  const [personNames, setpersonNames] = useState([]);
  const [newPerson, setnewPerson] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setalertMessage] = useState(false);
  const handlenewPerson = (event) => setnewPerson(event.target.value)

  const AddPersonToArray = () => {
    if (newPerson !== '') {
      const tpersons = personNames;
      tpersons.push(newPerson);
      console.log(newPerson);
      setnewPerson('');
      setpersonNames(tpersons);
      localStorage.setItem("personNames", JSON.stringify(personNames));

      setalertMessage("Person Added")
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000); // hide the alert after 3 seconds
    }
    else {
      setalertMessage("Invalid name")
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000); // hide the alert after 3 seconds   
    }
  }

  const ListPersons = personNames.map((n) =>
    <li key={n.toString()}>{n}</li>
  );

  return (


    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Header style={{ backgroundColor: "#6699ff" }}><Card.Title>Persons</Card.Title></Card.Header>
      <Card.Body>
        <Card.Text>Add Persons in expense</Card.Text>
        <label>Persons in list</label>
        {ListPersons}
        <td><Form.Control value={newPerson} onChange={handlenewPerson} type="text" placeholder="New Person" /></td>
        <div style={{ display: "flex" }}>
          <Button style={{ marginLeft: "auto", marginTop: "5px" }}  variant="outline-primary" onClick={AddPersonToArray}>Save</Button>{' '}
        </div>
        <hr style={{ marginBottom: '3px' }} />
        <label style={{ marginBottom: '3px' }}>Add new person</label>
        <tr>
          <td><Form.Control type="text" placeholder="New Person" /></td>
          <td><Button variant="outline-success" >Add</Button></td>
        </tr>
        {showAlert && (
          <Alert>{alertMessage}</Alert>
        )}
      </Card.Body>
    </Card>

  );
}
export default Persons;