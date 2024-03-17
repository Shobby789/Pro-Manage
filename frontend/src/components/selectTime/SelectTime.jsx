import React, { useState } from "react";
import "./SelectTime.css"; // Import your custom CSS for styling
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function SelectTime() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Today");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="filter-container">
      <button className="filter-button" onClick={toggleDropdown}>
        <span>{selectedFilter}</span>
        {isOpen ? (
          <IoIosArrowUp className="arrow" />
        ) : (
          <IoIosArrowDown className="arrow" />
        )}
      </button>
      {isOpen && (
        <div className="dropdown">
          <ul>
            <li onClick={() => handleFilterSelection("Today")}>Today</li>
            <li onClick={() => handleFilterSelection("This Week")}>
              This Week
            </li>
            <li onClick={() => handleFilterSelection("This Month")}>
              This Month
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectTime;
