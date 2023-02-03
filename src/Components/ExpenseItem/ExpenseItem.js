import React from "react";
import "./ExpenseItem.css";

function ExpenseItem({ expenseData }) {
  console.log(expenseData);
  return (
    <div className="expense-item">
      <div className="expense-item__date">
        {expenseData.date.toLocaleDateString()}
      </div>
      <div className="expense-item__description">
        <h2>{expenseData.title}</h2>
        <div className="expense-item__price">{expenseData.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
