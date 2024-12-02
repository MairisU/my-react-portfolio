import React, { useState } from 'react';
import './Content.css';

const rides = [
  { id: 1, name: 'Roller Coaster' },
  { id: 2, name: 'Ferris Wheel' },
  { id: 3, name: 'Bumper Cars' },
  { id: 4, name: 'Swing Ride' },
  { id: 5, name: 'Water Slide' }
];

const Content = ({ color }) => {
  const [selectedRides, setSelectedRides] = useState([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (ride) => {
    setSelectedRides((prevSelectedRides) =>
      prevSelectedRides.includes(ride)
        ? prevSelectedRides.filter((r) => r !== ride) // Unselect ride
        : [...prevSelectedRides, ride] // Select ride
    );
  };

  // Function to render custom text for each ride
  const renderRideDetails = (ride) => {
    if (ride === 'Roller Coaster') {
      return 'The Roller Coaster is a high-speed, thrilling ride with lots of twists and turns!';
    } else if (ride === 'Ferris Wheel') {
      return 'Enjoy a relaxing view of the park from the top of the Ferris Wheel.';
    } else if (ride === 'Bumper Cars') {
      return 'Have fun bumping into your friends and family on the Bumper Cars!';
    } else if (ride === 'Swing Ride') {
      return 'Swing around and feel the breeze as you soar through the air on the Swing Ride.';
    } else if (ride === 'Water Slide') {
      return 'Cool off and have fun racing down the Water Slide!';
    } else {
      return 'This is a ride in FunLand!';
    }
  };

  return (
    <div className="content" style={{ backgroundColor: color }}>
      <h2>Select your favorite rides</h2>

      {/* List of rides with checkboxes */}
      <div className="rides-list">
        {rides.map((ride) => (
          <div key={ride.id} className="ride-item">
            <input
              type="checkbox"
              id={ride.id}
              onChange={() => handleCheckboxChange(ride.name)}
              checked={selectedRides.includes(ride.name)}
            />
            <label htmlFor={ride.id}>{ride.name}</label>
          </div>
        ))}
      </div>

      {/* Display sections for each selected ride */}
      <div className="ride-details">
        {selectedRides.map((ride) => (
          <div key={ride} className="ride-section">
            <h3>{ride} Details</h3>
            <p>{renderRideDetails(ride)}</p> {/* Render unique text for each ride */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
