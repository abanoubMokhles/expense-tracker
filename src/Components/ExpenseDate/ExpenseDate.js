import "./ExpenseDate.css";

export default function ExpenseDate({ expense }) {
  const month = expense.date.toLocaleDateString("en-US", {
    month: "long",
  });
  const year = expense.date.toLocaleDateString("en-US", { year: "numeric" });
  const day = expense.date.toLocaleDateString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}
