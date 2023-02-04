import React from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const formSubmitHandler = (newExpense) => {
    props.onExpenseAdd(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onFormSubmit={formSubmitHandler} />
    </div>
  );
};
export default NewExpense;
