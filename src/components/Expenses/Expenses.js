import { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [newYearFilter, setYearFilter] = useState("2020");

  const onFilterChange = (year) => {
    setYearFilter(year);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === newYearFilter
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={newYearFilter}
          onSelectYear={onFilterChange}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
