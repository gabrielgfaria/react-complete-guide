import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    {
      label: "Jan",
      amount: 0,
    },
    {
      label: "Feb",
      amount: 0,
    },
    {
      label: "Mar",
      amount: 0,
    },
    {
      label: "Apr",
      amount: 0,
    },
    {
      label: "May",
      amount: 0,
    },
    {
      label: "Jun",
      amount: 0,
    },
    {
      label: "Jul",
      amount: 0,
    },
    {
      label: "Aug",
      amount: 0,
    },
    {
      label: "Sep",
      amount: 0,
    },
    {
      label: "Oct",
      amount: 0,
    },
    {
      label: "Nov",
      amount: 0,
    },
    {
      label: "Dec",
      amount: 0,
    },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].amount += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
