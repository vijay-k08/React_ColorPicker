import React, { useState } from 'react';
import './App.css';
import './ColorPicker.css'; // Add this line

import ColorPicker from './Components/ColorPicker';

const App = () => {
  const colors = ["#FF0020", "#A0FF00", "#023AFF", "#EADF00", "#FFC0CB", "#40E0D0", "#FFA500", "#800080", "#FFB6C1", "#006400"];
  const [selectedColor, setSelectedColor] = useState('#FF5733');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} onColorChange={handleColorChange} />
      <div className="selected-color">
        Picked Color: <div className="result-box" style={{ backgroundColor: selectedColor }}></div>
      </div>
    </div>
  );
};

export default App;