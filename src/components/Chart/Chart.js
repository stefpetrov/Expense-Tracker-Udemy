import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totaMaximum = Math.max(...dataPointsValues)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totaMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
