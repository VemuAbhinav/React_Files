import React, { useState } from 'react';
import axios from 'axios';
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../constants";
import './Predictpower.css'

const Predictpower = () => {
  const [prediction, setPrediction] = useState(null);

  const handlePredictClick = async () => {
    try {
      const token = localStorage.getItem(ACCESS_TOKEN);
      if (!token) {
        alert('User is not authenticated');
        return;
      }
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const response = await axios.get('http://localhost:8000/base/predict/',config);
      setPrediction(response.data.predicted_units_used);
    } catch (error) {
      console.error('Error predicting next month bill:', error);
      alert('Failed to predict next month bill');
    }
  };

  return (
    // <div>
    //   <h2>Predict Next Month's Electricity Bill</h2>
    //   <button onClick={handlePredictClick}>Predict</button>
    //   {prediction !== null && (
    //     <p>Predicted units used: {prediction}</p>
    //   )}
    // </div>
    <div className="slab-container-pp">
    <div className="slabs-col-pp">
      <h3>Personalized Smart Prediction</h3>
      <p>"Old Bills, New Insights
          We digitize and decode your past statements.<br/>
          Uncover patterns, spot energy hogs.
          Yesterday's data shapes tomorrow's habits."
      </p>
      <button className='btn' onClick={handlePredictClick}>Predict</button>
    </div>
    <div className="slabs-col-pp">
      <h4>Your next Month usage would be: <br/>{prediction}</h4>
    </div>
  </div>
  );
};

export default Predictpower;
