import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseForm.css";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowExpenseForm(false);
  };

  const handleCancelNewExpense = () => {
    setShowExpenseForm(false);
  };

  const handleAddNewExpense = () => {
    setShowExpenseForm(true);
  };

  let expenseForm = (
    <div className="new-expense__actions">
      <button onClick={handleAddNewExpense}>Add New Expense</button>
    </div>
  );

  if (showExpenseForm) {
    expenseForm = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelNewExpense={handleCancelNewExpense}
      />
    );
  }

  return <div className="new-expense">{expenseForm}</div>;
};

export default NewExpense;
