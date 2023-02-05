import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2024, 2, 14),
    },
    { id: "e24", title: "New TV", amount: 799.49, date: new Date(2021, 5, 12) },
    {
      id: "e32",
      title: "New laptop",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3332",
      title: "New phone",
      amount: 799.49,
      date: new Date(2022, 3, 12),
    },
    {
      id: "e93",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ]);

  const addingExpenseHandler = (newExpense) => {
    console.log(newExpense);
    setExpenses((prev) => {
      return [...prev, newExpense];
    });
  };

  return (
    <div>
      <NewExpense onExpenseAdd={addingExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
