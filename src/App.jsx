import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

const App = () => {
  
  const [weight, setweight]= useState(3);
  const [height, setheight]= useState(35);
  const [output , setOutput]=useState(0);
   
   const calculateBMI = () => {
    if (height > 0) { // Check to avoid division by zero
      const heightInMeters = height / 100; // Convert height to meters
      const bmi = weight / (heightInMeters * heightInMeters);
      setOutput(bmi.toFixed(2)); // Set BMI with 2 decimal points
    } else {
      setOutput(0); 
    }
  };

  
  useEffect(() => {
    calculateBMI();
  }, [weight, height]);

  
  return (
    <main>
      <div className="main-section">
        <h1>BMI Calculator</h1>
        <div className='input-section'>
          <label>Weight (kg): </label>
          <div className='slider-container'>
            <div className='slider-value'>{weight} kg</div> 
            <input
              type="range"
              min="3"
              max="600"
              step="1"                 
              value={weight}
              onChange={(e)=>{
                setweight(e.target.value)
              }}
            />
          </div>

          <label>Height (cm) : </label>
          <div className='slider-container'>
            <div className='slider-value'>{height} cm</div> 
            <input 
              type='range'
              min="35"
              max="300"
              step="1"                
            value={height}
            onChange={(e)=>{
                setheight(e.target.value)
            }}
            />
          </div>

          <div className='output'>
            <h2>Your BMI is</h2>
            <div className='output-box'>
               <h3>{output}</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
