import "./ChartBar.css";

const ChartBar = (props) => {

    let fillPercent = "0%";
    if (props.maxValue > 0){
        fillPercent = Math.round(props.value * 100 / props.maxValue) + "%";
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div style={{height: fillPercent}}  className="chart-bar__fill"></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};
export default ChartBar;
