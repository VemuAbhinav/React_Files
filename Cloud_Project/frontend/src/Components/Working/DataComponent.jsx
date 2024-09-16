import React, { useState } from 'react';
import axios from 'axios';
import './DataComponent.css';

const DataComponent = () => {
  const [columns, setColumns] = useState([]);
  const [randomRow, setRandomRow] = useState({});
  const [prediction, setPrediction] = useState('');

  const handleProduce = async () => {
    try {
      const columnsResponse = await axios.get('http://localhost:5000/columns');
      setColumns(columnsResponse.data);

      const rowResponse = await axios.get('http://localhost:5000/random-row');
      setRandomRow(rowResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePredict = async () => {
    try {
      const response = await axios.post('http://localhost:5000/predict', randomRow);
      setPrediction(response.data.label);
    } catch (error) {
      console.error('Error predicting data:', error);
    }
  };

  return (
   
    <div className="container">

        <h1 className='heading'>Intrusion <span>Detection</span> System</h1>
  
      <div className="button-group">
        <button className="button" onClick={handleProduce}>Produce</button>
        <button className="button" onClick={handlePredict}>Predict</button>
      </div>
      {columns.length > 0 && (
        <div className="data-table">
          <table>
            <thead>
              <tr>
                {columns.map(col => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {columns.map(col => (
                  <td key={col}>{randomRow[col]}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {prediction && (
        <div className="prediction">
          <h3>Class Attack: <span>{prediction}</span></h3>
        </div>
      )}
    </div>

  );
};

export default DataComponent;
