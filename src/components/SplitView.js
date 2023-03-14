import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBBadge
} from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SplitView = () => {
  let navigate = useNavigate();
  const [categoryName, setcategoryName] = useState('')
  const [personNames, setpersonNames] = useState([])
  const [expenseName, setexpenseName] = useState('');
  const [expenseAmount, setexpenseAmount] = useState('');
  const [broughtBy, setbroughtBy] = useState('');
  const [narration, setnarration] = useState('');

  const GetData = () => {
    setcategoryName(localStorage.getItem('categoryName'));
    setpersonNames(JSON.parse(localStorage.getItem('personNames')));
    setexpenseName(localStorage.getItem("expenseName", expenseName));
    setexpenseAmount(localStorage.getItem("expenseAmount", expenseAmount));
    setbroughtBy(localStorage.getItem("broughtBy", broughtBy));
    BuildNarration();

  }

  const BuildNarration = () => {
    let tempArr = personNames;
    tempArr = tempArr.filter(item => item !== broughtBy)
    let splitAmount = (expenseAmount / personNames.length).toFixed(2);

    const listNarr = tempArr.map((p) =>
      <p key={p}>{p} has to pay {splitAmount} to {broughtBy}</p>
    );
    setnarration(listNarr)
  }

  const ClearData = () => {
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
    <MDBCard style={{ width: '22rem' }}>
      <MDBCardBody>
        <MDBCardTitle>Expense Calculations</MDBCardTitle>
        <MDBCardTitle>Expense Category</MDBCardTitle>
        <h4><MDBBadge className='ms-2'>{categoryName}</MDBBadge></h4>

        <MDBCardTitle>Persons in expense</MDBCardTitle>
        <ul>{ListPersons1}</ul>
        <MDBCardTitle>Total Expense</MDBCardTitle>
        {expenseName} &nbsp; : {expenseAmount}
        <MDBCardTitle>broughtBy</MDBCardTitle>
        {broughtBy}
        <MDBCardTitle>Splitted expense</MDBCardTitle>
        {narration}
        < hr />
        <MDBBtn onClick={GetData}>Calculate</MDBBtn>&nbsp;
        <MDBBtn onClick={ClearData}>Clear</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
export default SplitView;