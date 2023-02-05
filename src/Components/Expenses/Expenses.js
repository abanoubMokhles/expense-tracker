import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpensesList/ExpensesList";

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
      <ExpensesList list={filteredList} />
    </Card>
  );
};
export default Expenses;
