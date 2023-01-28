import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";
import Card from "../Card/Card";

export default function ExpenseItem({ expense }) {
  return (
    <Card className="expense-item">
      <ExpenseDate expense={expense} />
      <div className="expense-item__description ">
        <h2>{expense.title}</h2>
        <p className="expense-item__price">${expense.amount}</p>
      </div>
    </Card>
  );
}
