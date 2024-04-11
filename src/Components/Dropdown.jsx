import React from 'react'
import { useState } from 'react';


const Dropdown = ({ label, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // const handleSelect = (option) => {
  //   setSelectedOption(option);
  //   setIsOpen(false);
  // };

  return (
    <div className="dropdown">
      <button onClick={handleToggle} className="dropdown-toggle">
        {label}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {data}
        </div>
      )}
      
    </div>
  );
};

export default Dropdown;