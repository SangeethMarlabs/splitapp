import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Alert } from 'react-bootstrap';
import { useEffect } from 'react';

const SplitView = () => {
  let navigate = useNavigate();
  const [categoryName, setcategoryName] = useState('')
  const [personNames, setpersonNames] = useState([])
  const [expenseName, setexpenseName] = useState('');
  const [expenseAmount, setexpenseAmount] = useState('');
  const [broughtBy, setbroughtBy] = useState('');
  const [narration, setnarration] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setalertMessage] = useState(false);

  useEffect(() => {
    onPageLoad();
  }, []);

  const onPageLoad = () => {
    try {
      //localStorage.setItem("personData", response.data.map(p=>(p.personName)));
      //setpersonNames(JSON.parse(localStorage.getItem("personNames")));      
    } catch (error) {
    }
  }

  const GetData = () => {
    setcategoryName(localStorage.getItem('categoryName'));
    setpersonNames(JSON.parse(localStorage.getItem('personNames')));
    setexpenseName(localStorage.getItem("expenseName"));
    setexpenseAmount(localStorage.getItem("expenseAmount"));
    setbroughtBy(localStorage.getItem("broughtBy"));
    BuildNarration();
    ShowAlert();
  }

  const ShowAlert = () => {
    setalertMessage('Spliting expenses..')
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // hide the alert after 3 seconds
  }

  const BuildNarration = () => {
    let arrPersons = JSON.parse(localStorage.getItem('personNames'));
    let tempArr = JSON.parse(localStorage.getItem('personNames'));
    let nBrought = localStorage.getItem("broughtBy");
    let nExp = localStorage.getItem("expenseAmount");

    tempArr = tempArr.filter(item => item !== nBrought)
    let splitAmount = (nExp / arrPersons.length).toFixed(2);

    const listNarr = tempArr.map((p) =>
      <label> {p} has to pay {splitAmount} to {nBrought} {'\n'} </label>
    );

    console.log(listNarr);
    setnarration(listNarr);




  }

  const ClearData = () => {
    setalertMessage('Data cleared')
    setcategoryName('');
    setpersonNames('');
    localStorage.setItem('categoryName', '');
    localStorage.setItem('personNames', '');

    navigate(0);
  }

  const ListPersons1 = personNames.map((n) =>
    <li key={n.toString()}>{n}</li>
  );

  return (


    <Card border="primary" style={{ width: '25rem' }}>
      <Card.Header style={{ backgroundColor: "#6699ff" }}><Card.Title>Expense Calculations</Card.Title></Card.Header>
      <Card.Body>
        <Card.Text><b>Expense Category : {categoryName}</b></Card.Text>
        <Card.Text><b>Persons in expense</b></Card.Text>
        <ul>{ListPersons1}</ul>
        <Card.Text><b>Total expense</b></Card.Text>
        <Card.Text>{expenseName} &nbsp; : {expenseAmount}</Card.Text>
        <Card.Text><b>broughtBy : </b> {broughtBy}</Card.Text>
        <Card.Text><b><u>Splitted expense</u></b></Card.Text>
        {narration}
        <hr style={{ marginBottom: '3px' }} />
        <div style={{ display: "flex" }}>
          <Button style={{ marginLeft: "auto", marginTop: "5px" }} onClick={GetData} variant="outline-primary" >Calculate</Button>{'  '}
          <Button style={{ marginLeft: "3px", marginTop: "5px" }} onClick={ClearData} variant="outline-danger" >Clear</Button>
        </div>
        {showAlert && (
          <Alert>{alertMessage}</Alert>
        )}
      </Card.Body>
    </Card>


  );
}
export default SplitView;