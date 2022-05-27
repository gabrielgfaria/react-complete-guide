import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [newYearFilter, setYearFilter] = useState("2020");

  const onFilterChange = (year) => {
    setYearFilter(year);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === newYearFilter
  );

  let expenseContent = <p>No expenses found.</p>

  if (filteredExpenses.length !== 0) {
    expenseContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ))
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={newYearFilter} onSelectYear={onFilterChange} />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
