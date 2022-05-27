import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.amount);
  const totalMaximum = Math.max(...dataPointsValue);
  
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          amount={dataPoint.amount}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
