import React from "react";
import "./Legend.css";

const Legend = ({ options }) => {
  return (
    <div className="legend-container">
      <h3 className="legend-title">Legend</h3>
      <div className="legend-options">
        {options.map((option, index) => (
          <div
            key={index}
            className="legend-item"
            style={{ backgroundColor: option.color }}
          >
            {option.emoji}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
