import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { id: 1, title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 2, title: "Cat food", amount: 150.37, date: new Date(2021, 5, 13) },
    { id: 3, title: "Clothes", amount: 2580.4, date: new Date(2021, 3, 18) },
    { id: 4, title: "Library", amount: 5.36, date: new Date(2021, 2, 15) },
    { id: 4, title: "Library2", amount: 5.36, date: new Date(2021, 2, 15) },
  ];

  const addExpenseHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData)
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
