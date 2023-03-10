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
  //const handlecategoryName = (event) => setcategoryName(event.target.value)

  const GetDta = () => {
    setcategoryName(localStorage.getItem('categoryName'));
    setpersonNames(JSON.parse(localStorage.getItem('personNames')));
    ListPersons();
    //console.log(personNames);
  }

  const ClearData = () => {
    setcategoryName('');
    setpersonNames('');
      localStorage.setItem('categoryName','');
      localStorage.setItem('personNames','');
      alert('Split data cleared');
      routeChange();
  }

  function ListPersons() {
    const listItems = personNames.map((p) =>
      <li key={p.toString()}>{p}</li>
    );
    
    console.log(listItems);
    return (
      listItems
    );
  }

  const ListPersons1 = personNames.map((n) =>
  <li key={n.toString()}>{n}</li>
  );

    return (
      <MDBCard style={{ width: '18rem' }}>
        <MDBCardBody>
          <MDBCardTitle>Expense Calculations</MDBCardTitle>
          <MDBCardTitle>Expense Category</MDBCardTitle>        
          <h4><MDBBadge className='ms-2'>{categoryName}</MDBBadge></h4>

          <MDBCardTitle>Persons in expense</MDBCardTitle> 
          <ul>{ListPersons1}</ul>
          <MDBCardTitle>Total Expense</MDBCardTitle> 
          <MDBCardTitle>Splitted expense</MDBCardTitle> 
          < hr/>
          <MDBBtn onClick={GetDta}>Calculate</MDBBtn>&nbsp;
          <MDBBtn onClick={ClearData}>Clear</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    );
}
export default SplitView;