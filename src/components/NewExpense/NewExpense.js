import React, { useState } from 'react';

import ExpenseType from './ExpenseType';
import './NewExpense.css';

const NewExpense = (props) => {
  const [shouldRender, setShouldRender] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const switchType = () => {
    setShouldRender((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      <ExpenseType
        shouldRender={shouldRender}
        switchType={switchType}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
