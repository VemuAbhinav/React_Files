import React, { useState } from 'react';
import axios from 'axios';
import './PowerAly.css';
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../constants";

const PowerAly = () => {
  const [averageUnits, setAverageUnits] = useState(null);

  const analyzeUnits = async () => {
    try {
      const token = localStorage.getItem(ACCESS_TOKEN);
      if (!token) {
        alert('User is not authenticated');
        return;
      }
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const response = await axios.get('http://localhost:8000/base/average_units/', config);
      setAverageUnits(response.data.average_units);
    } catch (error) {
      console.error('Error fetching average units:', error);
      alert('Failed to fetch average units');
    }
  };

  return (
    // <div className="analyze-container">
    //   <button className="mybtn" onClick={analyzeUnits}>Analyze</button>
    //   {averageUnits !== null && (
    //     <div>
    //       <h4>Average Units Used: {averageUnits}</h4>
    //     </div>
    //   )}
    // </div>
    <div className="slab-container-p">
      <div className="slabs-col-p">
        <h3>Where you Stand</h3>
        <p>"Energy: It's a Neighborhood Thing
            We calculate average consumption on your street.<br/>
            See how you stack up against next door.
            Local insights spark local action."
          </p>
        <button className='btn' onClick={analyzeUnits}>Analyze</button>
      </div>
      <div className="slabs-col-p">
        <h4>Your consumption compared to other: <br/>{averageUnits}</h4>
      </div>
  </div>
  );
};

export default PowerAly;
