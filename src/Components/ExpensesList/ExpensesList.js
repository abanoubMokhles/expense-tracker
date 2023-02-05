import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
const ExpensesList = (props) => {
  if (props.list.length === 0) {
    return <p className="expenses-list__fallback">No Expenses was found</p>;
  }

  return props.list.map((expense) => {
    return <ExpenseItem key={expense.id} expenseData={expense} />;
  });
};
export default ExpensesList;
