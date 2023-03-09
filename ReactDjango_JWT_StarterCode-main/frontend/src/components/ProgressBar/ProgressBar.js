import React, { useState } from "react";

const ProgressBar = () => {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleTaskCompletion = () => {
    setIsTaskCompleted(true);
    setProgress(100);
  };

  return (
    <div>
      {!isTaskCompleted ? (
        <button onClick={handleTaskCompletion}>Complete</button>
      ) : (
        <p>You've completed this task!</p>
      )}
      <div style={{ width: "100%", height: "20px", backgroundColor: "lightgray" }}>
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "green",
          }}
        />
      </div>
    </div>
  );
};




export default ProgressBar;


 