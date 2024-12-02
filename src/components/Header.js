import React, { useState, useEffect } from 'react';
import './Header.css'; // Assuming you have a CSS file

const Header = ({ color, setColor }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Function to generate a random color
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Function to handle background color change
  const click = () => {
    const randomColor = generateRandomColor(); // Generate random color on click
    setColor(randomColor); // Set the new random color
  };

  // Effect to change the background color when `color` changes
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  // Function to handle date input change
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  // Function to handle time input change
  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  return (
    <header className="header" style={{ backgroundColor: color }}>
      <h1>FunLand</h1>

      {/* Button to trigger random color change */}
      <button onClick={click}>Change Background Color</button>

      {/* Date and Time Picker Section */}
      <div className="visit-section">
        <h2>Plan Your Visit to FunLand</h2>

        <label>
          Select a Day: 
          <input 
            type="date" 
            value={selectedDate} 
            onChange={handleDateChange}
          />
        </label>

        <label>
          Select a Time: 
          <input 
            type="time" 
            value={selectedTime} 
            onChange={handleTimeChange}
          />
        </label>

        {/* Display selected date and time */}
        {selectedDate && selectedTime && (
          <div className="visit-details">
            <p>
              You plan to visit FunLand on <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>.
            </p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;