import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
const baseURL = "https://localhost:44315/Expense/GetAllExpCategories";

const ExpenseCategory = () => {
  const [newCat, setnewCat] = useState('')
  const [selectedCat, setselectedCat] = useState('')
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setalertMessage] = useState(false);
  const [categories, setcategories] = useState([]);
  const handlenewCat = (event) => setnewCat(event.target.value)
  const handleselectedCat = (event) => setselectedCat(event.target.value)

  useEffect(() => {
    onPageLoad();
  }, []);

  const onPageLoad = () => {
    try {
      axios.get(baseURL).then((response) => {
        setcategories(response.data);
      });
    } catch (error) {
    }
  }

  const ShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // hide the alert after 3 seconds
  }

  const SaveCategory = () => {
    localStorage.setItem("categoryName", selectedCat);
    setalertMessage(selectedCat === '' ? 'Invalid category' : 'Category Saved')
    ShowAlert()
  }

  const AddNew = () => {
    const data = { CategoryName: newCat };
    axios.post('https://localhost:44315/Expense/AddCategory', data)
      .then((response) => {
        onPageLoad();
        setnewCat('')
      })
      .catch(error => {
        console.error(error);
      });

    setalertMessage(newCat === '' ? 'Invalid category' : 'New Category Added')
    ShowAlert();
  }

  return (
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Header style={{ backgroundColor: "#6699ff" }}><Card.Title>Expense Category</Card.Title></Card.Header>
      <Card.Body>
        <label>Select expense category </label>
        <Form.Select onLoad={handleselectedCat} onChange={handleselectedCat} onSelect={handleselectedCat} aria-label="Default select example">
          {categories.map((cat) =>
            <option key={cat.categoryId}>{cat.categoryName}</option>
          )}
        </Form.Select>
        <div style={{ display: "flex" }}>
          <Button style={{ marginLeft: "auto", marginTop: "5px" }} variant="outline-primary" onClick={SaveCategory}>Save</Button>{' '}
        </div>
        <hr style={{ marginBottom: '3px' }} />
        <label style={{ marginBottom: '3px' }}>Add new expense category</label>
        <tr>
          <td><Form.Control value={newCat} onChange={handlenewCat} type="text" placeholder="New category" /></td>
          <td><Button onClick={AddNew} variant="outline-success" >Add</Button></td>
        </tr>
        {showAlert && (
          <Alert>{alertMessage}</Alert>
        )}
      </Card.Body>
    </Card>


  );
}
export default ExpenseCategory;