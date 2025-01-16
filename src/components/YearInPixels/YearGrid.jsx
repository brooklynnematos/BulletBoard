import React, { useState } from "react";
import "./YearGrid.css";

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthInitials = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const emojiOptions = [
  { emoji: "😄", color: "#4caf50" },
  { emoji: "🙂", color: "#8bc34a" },
  { emoji: "😐", color: "#ffeb3b" },
  { emoji: "☹️", color: "#ff9800" },
  { emoji: "😩", color: "#f44336" },
];

const YearGrid = () => {
  const [gridState, setGridState] = useState({}); // Tracks colors/emojis for grid cells
  const [selectedDay, setSelectedDay] = useState(null); // Tracks the currently clicked day
  const [showModal, setShowModal] = useState(false); // Controls the modal visibility

  const handleCellClick = (dayKey) => {
    setSelectedDay(dayKey); // Set the currently selected day
    setShowModal(true); // Show the emoji selection modal
  };

  const handleEmojiSelect = (emoji, color) => {
    if (selectedDay) {
      setGridState((prevState) => ({
        ...prevState,
        [selectedDay]: { emoji, color }, // Store the emoji and color for the selected day
      }));
    }
    setShowModal(false); // Close the modal after selection
  };

  const handleClearDay = () => {
    if (selectedDay) {
      setGridState((prevState) => {
        const newState = { ...prevState };
        delete newState[selectedDay]; // Remove the selected day from the state
        return newState;
      });
    }
    setShowModal(false);
  };

  const gridCells = [];

  // Top row (month initials)
  gridCells.push(<div key="empty" className="grid-header"></div>);
  monthInitials.forEach((month, index) => {
    gridCells.push(
      <div key={`month-${index}`} className="grid-header">
        {month}
      </div>
    );
  });

  // Add rows for days (1-31)
  for (let day = 1; day <= 31; day++) {
    gridCells.push(
      <div key={`day-label-${day}`} className="grid-header">
        {day}
      </div>
    );

    for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
      const isValidDay = day <= daysInMonth[monthIndex];
      const dayKey = `${monthIndex}-${day}`; // Unique key for each day cell
      const dayState = gridState[dayKey]; // Get the state for this day

      gridCells.push(
        <div
          key={dayKey}
          className={`grid-box ${!isValidDay ? "grid-invalid" : ""}`}
          style={{
            backgroundColor: isValidDay ? dayState?.color || "white" : "transparent",
          }}
          onClick={() => isValidDay && handleCellClick(dayKey)}
        >
          {dayState?.emoji} {/* Display the emoji for the day if it exists */}
        </div>
      );
    }
  }

  return (
    <div className="year-grid-container">
      <div className="grid-container">{gridCells}</div>

      {/* Modal for emoji selection */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Select a Mood</h3>
            <div className="emoji-options">
              {emojiOptions.map((option, index) => (
                <div
                  key={index}
                  className="emoji-option"
                  style={{ backgroundColor: option.color }}
                  onClick={() => handleEmojiSelect(option.emoji, option.color)}
                >
                  {option.emoji}
                </div>
              ))}
            </div>
            <button className='clear-button' onClick={handleClearDay}>Delete Day</button>
            <button className="close-button" onClick={() => setShowModal(false)}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YearGrid;
