import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  { id: 'e1', title: "Cat food", amount: 150.37, date: new Date(2021, 5, 13) },
  { id: 'e2', title: "Cat food", amount: 150.37, date: new Date(2022, 5, 13) },
  { id: 'e3', title: "Clothes", amount: 2580.4, date: new Date(2020, 3, 18) },
  { id: 'e4', title: "Library", amount: 5.36, date: new Date(2019, 2, 15) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (enteredExpenseData) => {
    setExpenses((prevExpenses) => {
      return [enteredExpenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
