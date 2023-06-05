import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularProgress() {
  const [percentage, setPercentage] = useState(50);

  return (
    <div className="progress" style={{ width: "50px", height: "50px" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={12}
        strokeColor="green"
        minValue={1}
        maxValue={100}
        styles={buildStyles({
          textSize: "30px",
          textColor: "black",
          pathColor: "#6ff542",
        })}
      />
    </div>
  );
}

export default CircularProgress;
