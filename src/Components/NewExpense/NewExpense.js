import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const [isHidden, setIsHidden] = useState(true);

  const clickHandler = () => {
    setIsHidden(false);
  };
  const cancelHandler = () => {
    setIsHidden(true);
  };
  const formSubmitHandler = (newExpense) => {
    props.onExpenseAdd(newExpense);

    setIsHidden(true);
  };
  return (
    <div className="new-expense">
      {isHidden && (
        <button type="button" onClick={clickHandler}>
          Add New Expense
        </button>
      )}
      {!isHidden && (
        <ExpenseForm
          onFormSubmit={formSubmitHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
