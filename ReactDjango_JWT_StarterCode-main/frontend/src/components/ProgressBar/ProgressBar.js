import React, { useState } from 'react';

function ProgressBar() {
  const [percentage, setPercentage] = useState(0);

  const handleClick = () => {
    if (percentage < 100) {
      setPercentage(percentage + 100);
    }
  };
  const handleReset = () => {
    setPercentage(0);
  };


  const buttonList = ['Completed'];

  return (
    <div>
      <div>Percentage: {percentage}%</div>
      <div>
        {buttonList.map((button) => (
          <button key={button} onClick={handleClick}>
            {button}
          </button>
        ))}
      </div>
    <button onClick={handleReset}>Reset</button>
  </div>
  );
}

export default ProgressBar;



 