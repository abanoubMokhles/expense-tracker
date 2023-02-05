import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

const Expenses = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState("2021");
  const yearChangeHandler = (year) => {
    setFilterYear(year);
  };

  const filteredList = expenses.filter((expense) => {
    return expense.date.getFullYear() === Number(filterYear);
  });

  return (
    <Card className="expenses">
      <ExpenseFilter onYearChange={yearChangeHandler} />
      {filteredList.length === 0 && (
        <p className="expenses-not-found">No Expenses was found</p>
      )}
      {filteredList.length > 0 &&
        filteredList.map((expense) => {
          return <ExpenseItem key={expense.id} expenseData={expense} />;
        })}
    </Card>
  );
};
export default Expenses;
