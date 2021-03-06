import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  // let expenseContent = <p>No Expenses Found!</p>;

  // if (filteredExpenses.length > 0) {
  //   expenseContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ))
  // };

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={filteredYear}
          filterChangeHandler={filterChangeHandler}
        />
        <ExpensesChart expenses={ filteredExpenses }/>
        <ExpensesList items={ filteredExpenses }/>
        {/* {filteredExpenses.length === 0 ? <p>No Expenses Found!</p> : filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
      </Card>
    </li>
  )
};
export default Expenses;