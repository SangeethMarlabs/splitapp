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
  const [personNames, setpersonNames] = useState([])
  const [expenseName, setexpenseName] = useState([]);
  const [expenseAmount, setexpenseAmount] = useState([]);
  const [broughtBy, setbroughtBy] = useState([]);
  const [narration, setnarration] = useState([]);
  //const handlecategoryName = (event) => setcategoryName(event.target.value)

  const GetDta = () => {
    setcategoryName(localStorage.getItem('categoryName'));
    setpersonNames(JSON.parse(localStorage.getItem('personNames')));
    setexpenseName(localStorage.getItem("expenseName", expenseName));
    setexpenseAmount(localStorage.getItem("expenseAmount", expenseAmount));
    setbroughtBy(localStorage.getItem("broughtBy", broughtBy));
    BuildNarration();
  }

  const BuildNarration = () => {
    let tempArr = personNames;
    let splitAmount = (expenseAmount / 3).toFixed(2);

    const listNarr = personNames.map((p) =>
    <p>{p.string} has to pay {splitAmount} to </p>
  );

    // let data = 'Shanavas has to pay 350 to Sangeeth, Tarun has to pay 350 to Sangeeth';
    // setnarration(data)
  }

  const ClearData = () => {
    setcategoryName('');
    setpersonNames('');
    localStorage.setItem('categoryName', '');
    localStorage.setItem('personNames', '');
    alert('Split data cleared');
    routeChange();
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
        <MDBBtn onClick={GetDta}>Calculate</MDBBtn>&nbsp;
        <MDBBtn onClick={ClearData}>Clear</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
export default SplitView;