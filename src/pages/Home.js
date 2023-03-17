import React from 'react'
import Expense from '../components/Expense'
import ExpenseCategory from '../components/ExpenseCategory'
import Persons from '../components/Persons'
import SplitView from '../components/SplitView'
import './css/Home.css'
const Home = () => {
    if(localStorage.getItem('userName') !== 'Guest'){
    return (
        <div className='container col-md-12'>
            <br />
            <table>
                <tbody>
                    <tr>
                        <td> <ExpenseCategory /> </td>
                        <td> <Persons /> </td>
                        <td> <Expense /> </td>
                        <td><SplitView /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );}
    else{
        return ( 
            <div className="container col-md-12 mt-3">
                 <h1 style={{color: "#414141"}}>Please login to use the Application</h1>                
            </div>        
        )
    }
}
export default Home;