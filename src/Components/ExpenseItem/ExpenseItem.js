import React from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";
import Card from "../Card/Card";
function ExpenseItem({ expenseData }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseData.date} />
      <div className="expense-item__description">
        <h2>{expenseData.title}</h2>
        <div className="expense-item__price">$ {expenseData.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
