import React, { useState } from "react";
import "./ProgressBar.css"


const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    const handleClick = () => {
        setProgress(progress + 100);
    };

    
    return ( 
        <>
            <div className="progress-bar">
                <div className="progress" style={{width: `${progress}%`}}></div>
            </div>
            <button onClick={handleClick}>Complete</button>
        </>
     );
}
 
export default ProgressBar;