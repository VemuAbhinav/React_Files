
// import './ElectricityBillForm.css'

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const ElectricityBillForm = () => {
//   const [formData, setFormData] = useState({
//     month: '',
//     year: '',
//     number: '',
//     units_used: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('ACCESS_TOKEN');
//       if (!token) {
//         alert('User is not authenticated');
//         navigate('/login');
//         return;
//       }
//       const config = {
//         headers: { Authorization: `Bearer ${token}` }
//       };
//       const response = await axios.post('http://localhost:8000/base/create/', formData, config);
//       alert('Electricity bill information submitted successfully');
//       navigate('/');
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('Failed to submit form');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className='billform'>
//       <div>
//         <label>Month:</label>
//         <input type="text" name="month" value={formData.month} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Year:</label>
//         <input type="number" name="year" value={formData.year} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Number:</label>
//         <input type="text" name="number" value={formData.number} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Units Used:</label>
//         <input type="number" name="units_used" value={formData.units_used} onChange={handleChange} required />
//       </div>
//       <button type="submit" className='billbutton'>Submit</button>
//     </form>
//   );
// };

// export default ElectricityBillForm;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ElectricityBillForm.css';
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../constants";

const ElectricityBillForm = () => {
  const [formData, setFormData] = useState({
    month: '',
    year: '',
    number: '',
    units_used: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem(ACCESS_TOKEN);
      console.log(token);
      if (!token) {
        alert('User is not authenticated');
        {/*navigate('/login');*/}
        return;
      }
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const response = await axios.post('http://localhost:8000/base/create/', formData, config);
      alert('Electricity bill information submitted successfully');
      {/*navigate('/');*/}
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='billform' method='post'>
      
      <div>
        <label>Month:</label>
        <input type="text" name="month" value={formData.month} onChange={handleChange} required />
      </div>
      <div>
        <label>Year:</label>
        <input type="number" name="year" value={formData.year} onChange={handleChange} required />
      </div>
      <div>
        <label>Number:</label>
        <input type="text" name="number" value={formData.number} onChange={handleChange} required />
      </div>
      <div>
        <label>Units Used:</label>
        <input type="number" name="units_used" value={formData.units_used} onChange={handleChange} required />
      </div>
      <button type="submit" className='billbutton'>Submit</button>
    </form>
  );
};

export default ElectricityBillForm;
