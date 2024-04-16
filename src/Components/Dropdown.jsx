import React from "react";
import { useState } from "react";

const Dropdown = ({ label, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header">
        <h2 className="dropdown-toggle">{label}</h2>
        <svg
          onClick={handleToggle}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className={`collapse-icon ${isOpen ? "closed" : "open"}`}
        >
          <g id="arrow_back_ios-24px 2">
            <path
              id="Vector"
              d="M17.2103 21.2103C16.5409 21.8798 15.4538 21.8798 14.7843 21.2103L4.50206 10.9281C3.83265 10.2586 3.83265 9.17148 4.50206 8.50206C5.17148 7.83265 6.25862 7.83265 6.92804 8.50206L16 17.5741L25.072 8.50738C25.7414 7.83797 26.8285 7.83797 27.4979 8.50738C28.1673 9.17679 28.1673 10.2639 27.4979 10.9334L17.2157 21.2157L17.2103 21.2103Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
      {isOpen && <div className="dropdown-menu">{data}</div>}
    </div>
  );
};

export default Dropdown;
