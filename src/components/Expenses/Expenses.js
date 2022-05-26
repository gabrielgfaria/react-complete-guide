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

  return (
    <Card className="expenses">
      <ExpensesFilter selected={newYearFilter} onSelectYear={onFilterChange} />
      {props.items.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
};

export default Expenses;
