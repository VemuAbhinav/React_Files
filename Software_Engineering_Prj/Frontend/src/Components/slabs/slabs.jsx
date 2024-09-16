// import React, { useState } from 'react'
// import './slabs.css'

// const slabs = () => {

//   const [currslab,setCurrslab] = useState("None");
//   return (
//     <div className="slab-container">
//       <div className="slabs-col">
//         <h3>Slabs Info</h3>
//         <p>There are different slabs for different Electricity values.
//         Keep checking your slab is very important.<br/>
//         Check your slab here</p>
//         <button className='btn' onClick={()=>setCurrslab("Hello")}>Check</button>
//       </div>
//       <div className="slabs-col">
//         <h4>Your Slab is <br/>{currslab}</h4>
        
//       </div>
//     </div>
//   )
// }

// export default slabs

import React, { useState } from 'react';
import './slabs.css';
import axios from 'axios';
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../constants";

const Slabs = () => {
  const [currslab, setCurrslab] = useState("None");

  const fetchLatestBill = async () => {
    try {
      const token = localStorage.getItem(ACCESS_TOKEN); // Assumes you have a way to get the token
      if (!token) {
        alert('User is not authenticated');
        return;
      }
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const response = await axios.get('http://localhost:8000/base/latest_bill/', config);
      // const response = await axios.get('http://localhost:8000/base/latest_bill/');
      const unitsUsed = response.data.units_used;

      let slab;
      if (unitsUsed >= 0 && unitsUsed <= 50) {
        slab = "Slab 1";
      } else if (unitsUsed >= 51 && unitsUsed <= 100) {
        slab = "Slab 2";
      } else if (unitsUsed >= 101 && unitsUsed <= 150) {
        slab = "Slab 3";
      } else if (unitsUsed >= 151 && unitsUsed <= 200) {
        slab = "Slab 4";
      } else if (unitsUsed >= 201 && unitsUsed <= 250) {
        slab = "Slab 5";
      } else {
        slab = "Out of slab range";
      }
      setCurrslab(slab);
    } catch (error) {
      console.error('Error fetching latest bill:', error);
      alert('Failed to fetch latest bill');
    }
  };

  return (
    <div className="slab-container">
      <div className="slabs-col">
        <h3>Slabs Info</h3>
        <p>There are different slabs for different Electricity values.
        Keep checking your slab is very important.<br/>
        Check your slab here</p>
        <button className='btn' onClick={fetchLatestBill}>Check</button>
      </div>
      <div className="slabs-col">
        <h4>Your Slab is <br/>{currslab}</h4>
      </div>
    </div>
  );
};

export default Slabs;




