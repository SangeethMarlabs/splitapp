import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';

const Expense = () => {
  const [personNames, setpersonNames] = useState([]);
  const [expenseName, setexpenseName] = useState('');
  const [expenseAmount, setexpenseAmount] = useState(0);
  const [broughtBy, setbroughtBy] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setalertMessage] = useState(false);
  const handleexpenseName = (event) => setexpenseName(event.target.value)
  const handlebroughtBy = (event) => setbroughtBy(event.target.id)
  const handleexpenseAmount = (event) => {
    setexpenseAmount(event.target.value);
    GetData();
  }

  useEffect(() => {
    onPageLoad();
  }, []);

  const onPageLoad = () => {
    try {
      //localStorage.setItem("personData", response.data.map(p=>(p.personName)));
      setexpenseName(localStorage.getItem("expenseName"));
      setexpenseAmount(localStorage.getItem("expenseAmount"));
      setpersonNames(JSON.parse(localStorage.getItem("personNames")));
      setbroughtBy(localStorage.getItem("broughtBy"));
    } catch (error) {
    }
  }

  const GetData = () => {
    setpersonNames(JSON.parse(localStorage.getItem('personNames')));
  }
  const ShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // hide the alert after 3 seconds
  }

  const SaveExpense = () => {
    //localStorage.setItem('personNames', personNames);
    localStorage.setItem("expenseName", expenseName);
    localStorage.setItem("expenseAmount", expenseAmount);
    localStorage.setItem("broughtBy", broughtBy);
    setalertMessage(expenseName === '' ? 'Invalid expense' : 'Expense Saved')
    ShowAlert()
  }

  const ListPersons = personNames.map((n) =>
    <Form.Check type='radio' onClick={handlebroughtBy} name='flexRadioDefault' id={n.toString()} label={n} checked = {n===broughtBy ? 'true' : ''} />
  );

  return (


    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Header style={{ backgroundColor: "#6699ff" }}><Card.Title>Expense</Card.Title></Card.Header>
      <Card.Body>
        <Card.Text>Add new expense</Card.Text>
        <lable>Expense name</lable>
        <Form.Control value={expenseName} onChange={handleexpenseName} type="text" placeholder="Expense name" />
        <lable>Expense amount</lable>
        <Form.Control value={expenseAmount} onChange={handleexpenseAmount} type="number" placeholder="Expense amount" />
        <label>Expense brought by
        </label>{ListPersons}
        <hr style={{ marginBottom: '1px' }} />
        <div style={{ display: "flex" }}>
          <Button style={{ marginLeft: "auto", marginTop: "5px" }} variant="outline-primary" onClick={SaveExpense}>Save</Button>{' '}
        </div>
        {showAlert && (
          <Alert>{alertMessage}</Alert>
        )}
      </Card.Body>
    </Card>

  );
}
export default Expense;