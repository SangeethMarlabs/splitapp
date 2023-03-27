import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
const baseURL = "https://localhost:44315/Person/GetAllPersons";
const Persons = () => {
  const [personNames, setpersonNames] = useState([]);
  const [personData, setpersonData] = useState([]);
  const [newPerson, setnewPerson] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setalertMessage] = useState(false);
  const [selectedPerson, setselectedPerson] = useState('')
  const handleselectedPerson = (event) => setselectedPerson(event.target.value)
  const handlenewPerson = (event) => setnewPerson(event.target.value)

  useEffect(() => {
    onPageLoad();
  });

  const ShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // hide the alert after 3 seconds
  }

  const onPageLoad = () => {
    try {
      axios.get(baseURL).then((response) => {
        setpersonData(response.data.map((p)=>p.personName));
        localStorage.setItem("personData", personData);
      });
    } catch (error) {
    }
  }

  const SavePerson = () => {
    localStorage.setItem("personNames", JSON.stringify(personData));
    setpersonNames(personData);
    setalertMessage(selectedPerson === '' ? 'Invalid person' : 'Person Saved')
    ShowAlert()
  }

  const AddNewPerson = () => {   
    if (newPerson !== ''){
      const data = { personName: newPerson };
    axios.post('https://localhost:44315/Person/AddPerson', data)
      .then((response) => {        
        onPageLoad();
        setnewPerson('')
      })
      .catch(error => {
        console.error(error);
      });   
    }
    setalertMessage(newPerson === '' ? 'Invalid Person' : 'New Person Added')
    ShowAlert();
  }

  const ListPersons = personNames.map((n) =>
    <li key={n.toString()}>{n}</li>
  );

  return (
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Header style={{ backgroundColor: "#6699ff" }}><Card.Title>Persons</Card.Title></Card.Header>
      <Card.Body>
        <Card.Text><b>Add Persons in expense</b></Card.Text>
        <label>Persons in list</label>
        {ListPersons}

        <Form.Select onLoad={handleselectedPerson} onChange={handleselectedPerson} onSelect={handleselectedPerson} aria-label="Default select example">
          {personData.map((per) =>
            <option key={per.personId}>{per.personName}</option>
          )}
        </Form.Select>

        
        <div style={{ display: "flex" }}>
          <Button onClick={SavePerson} style={{ marginLeft: "auto", marginTop: "5px" }}  variant="outline-primary" >Save</Button>{' '}
        </div>
        <hr style={{ marginBottom: '3px' }} />
        <label style={{ marginBottom: '3px' }}>Add new person</label>
        <tr>
          <td><Form.Control value={newPerson} onChange={handlenewPerson} type="text" placeholder="New Person" /></td>
          <td><Button onClick={AddNewPerson} variant="outline-success" >Add</Button></td>
        </tr>
        {showAlert && (
          <Alert>{alertMessage}</Alert>
        )}
      </Card.Body>
    </Card>
  );
}
export default Persons;