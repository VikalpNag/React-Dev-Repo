import React from "react";
import "./progressCircle.css";

const Circle = ({ color, percentage, size, strokeWidth }) => {
  const radius = size / 2 - 10;
  const circ = 2 * Math.PI * radius - 20;
  const strokePct = ((100 - Math.round(percentage)) * circ) / 100;

  return (
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={strokePct !== circ ? color : ""}
      strokeWidth={strokeWidth}
      strokeDasharray={circ}
      strokeDashOffset={percentage ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

export default function ProgressCircle({
  percentage,
  isPlaying,
  image,
  size,
  color,
}) {
  return (
    <div className="progress-circle">
      <svg width={size} height={size}>
        <g>
          <Circle strokeWidth={"0.4rem"} color="#384f73" size={size} />
          <Circle
            strokeWidth={"0.6rem"}
            color={color}
            percentage={percentage}
            size={size}
          />
        </g>
        <defs>
          <clipPath>
            <circle cx="50%" cy="50%" r={size / 2 - 50} fill="#FFFFFF" />
          </clipPath>
          <clipPath id="myInnerCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 80} fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          className={isPlaying ? "active" : ""}
          x={25}
          y={25}
          width={2 * (size / 2) - 50}
          height={2 * (size / 2) - 50}
          href="https://pngimg.com/uploads/vinyl/vinyl_PNG109.png"
          clipPath="url(#myCircle)"
        />
        <image
          className={isPlaying ? "active" : ""}
          x={80}
          y={80}
          width={2 * (size / 2.5) - 100}
          height={2 * (size / 2.5) - 100}
          href={image}
          clipPath="url(#myInnerCircle)"
        />
      </svg>
    </div>
  );
}
