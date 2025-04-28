import React, { useState } from 'react';
import './app.css'; 

const ImgRotator = () => {
  const [rotation, setRotation] = useState(0);

  const handleRotate = () => {
    setRotation((prev) => prev + 45); 
  };

  return (
    <div>
      <img
        src="src/assets/Gradients.png"
        alt=""
        onClick={handleRotate}
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.3s ease',
          cursor: 'pointer',
        }}
      />
    </div>
  );
};

export default ImgRotator;