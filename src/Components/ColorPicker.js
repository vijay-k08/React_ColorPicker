import React, { useState } from 'react';

const ColorPicker = ({ colors, onColorChange }) => {
  const [showColors, setShowColors] = useState(false);

  return (
    <div>
      
      {showColors && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-box"
              style={{ backgroundColor: color }}
              onClick={() => onColorChange(color)}
            ></div>
          ))}
        </div>
      )}
      <button onClick={() => setShowColors(!showColors)}>
        Pick a Color
      </button>
    </div>
  );
};

export default ColorPicker;