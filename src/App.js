import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Cat food", amount: 150.37, date: new Date(2021, 5, 13) },
    { title: "Clothes", amount: 2580.4, date: new Date(2021, 3, 18) },
    { title: "Library", amount: 5.36, date: new Date(2021, 2, 15) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
