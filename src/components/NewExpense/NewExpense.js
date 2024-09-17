import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [face, setFace] = useState("collapse");

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  const cancelExpenseHandler = (enteredFace) => {
    setFace(enteredFace);
  }

  let newExpenseContent = <button onClick={() => {setFace("expand")}}>Add New Expense</button>;
  if(face === "expand"){
    newExpenseContent = <ExpenseForm onCancelExpense={cancelExpenseHandler} onSaveExpenseData={saveExpenseDataHandler} />
  }

  return (
    <div className='new-expense'>
      {newExpenseContent}
    </div>
  );
};

export default NewExpense;