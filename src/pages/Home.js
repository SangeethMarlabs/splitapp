import React from 'react'
import Expense from '../components/Expense'
import ExpenseCategory from '../components/ExpenseCategory'
import Persons from '../components/Persons'
import SplitView from '../components/SplitView'
import './css/Home.css'
const Home = () => {
    return (
        <div>
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
    );
}
export default Home;