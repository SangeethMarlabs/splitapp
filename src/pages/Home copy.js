import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
//import InfoCard from './InfoCard'
//import ExpenseForm from './ExpenseForm'
//import Notification from './Notification'
//import NewExpenseModal from './NewExpenseModal'
//import expenseService from '../services/expense-split'


const Home = () => {
    const [message, setMessage] = useState('')
    const [expName, setExpName] = useState('')
    const [date, setDate] = useState('')
    const [amount, setAmount] = useState('')
    const [by_whom, setBy] = useState('')
    const [to_whom, setTo] = useState([{name: null, isChecked: false}, {name: null, isChecked: false}])
    const [members, setMembers] = useState([{name: null}, {name: null}])
    const [expenses, setExpenses] = useState([])
    const [splitted, setSplitted] = useState([])  
    const [firstCard, setFirst] = useState(false)
    const [secondCard, setSecond] = useState(false)
    const [thirdCard, setThird] = useState(false)
    const [finalCard, setFinal] = useState(false)
    const [newExpModal, setModalUp] = useState(false) 
    const [isExpenseAdded, setExpenseAdded] = useState(false)      

    const handleFirst = (event) => {
      event.preventDefault()
      setFirst(true)
    }
    if(localStorage.getItem('userName') !== 'Guest'){
        return ( 
            <div className="container col-md-12 mt-3">
                 <h1 style={{color: "#414141"}}>Welcome to Split App</h1>
                 <img class="col-md-12" src="./Image/home.jpg" alt=""></img>                  
            </div>        
        )
    }else{
        return ( 
<div>
        <Container className="home">
          <Notification msg={message} />

          <NewExpenseModal show={newExpModal} Close={handleModalDown} addExpenseModal={addExpenseModal} members={members} to_whom={to_whom} 
                  amount={amount} handleAmount={handleAmount} handleRadio={handleRadio} handleCheckbox={handleCheckbox} />
          
          <Row>
            <Col sm={9}>
              <ExpenseForm handleExpName={handleExpName} expName={expName} handleDate={handleDate} date={date} to_whom={to_whom} 
                      handleMember={handleMember} addMember={addMember} removeMember={removeMember} members={members} 
                      addExpenseModal={addExpenseModal} splitExpenses={splitExpenses} handleAmount={handleAmount} 
                      amount={amount} handleRadio={handleRadio} handleCheckbox={handleCheckbox} handleFirst={handleFirst}
                      handleSecond={handleSecond} handleThird={handleThird} addExpenseToInfoCard={addExpenseToInfoCard} />
            </Col>

            <Col sm={3}>
              <InfoCard expName={expName} date={date} members={members} expenses={expenses} firstCard={firstCard} 
                    secondCard={secondCard} thirdCard={thirdCard} finalCard={finalCard} splitted={splitted} />
            </Col>
          </Row>
        </Container>
        <center className="footer">
          <a className="fab fa-github" href="https://github.com/Madhubalajb/Expense-Split" rel="noopener noreferrer" target="_blank" />
          built by <a href="https://madhubalajb.github.io/" rel="noopener noreferrer" target="_blank">madhubala jayakumaran</a>
        </center>
      </div>      
        )
    }
}
  export default Home;