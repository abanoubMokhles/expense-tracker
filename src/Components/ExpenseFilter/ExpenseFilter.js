import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const selectionHandler = (evt) => {
    props.onYearChange(evt.target.value);
  };
  return (
    <div className="expense-filter">
      <h2 className="expense-filter__title">Sort By:</h2>
      <select className="expense-filter__selection" onChange={selectionHandler}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};
export default ExpenseFilter;
