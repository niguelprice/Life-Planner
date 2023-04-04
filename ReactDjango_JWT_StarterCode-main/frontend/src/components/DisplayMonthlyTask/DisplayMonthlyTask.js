import React, { useState } from 'react';
const DisplayMonthlyTask = (props) => {
  const [monthlyTasks, setMonthlyTasks] = useState([
    { id: 1, complete: false },{ id: 2, complete: false }
    ]);
  const [percentComplete, setPercentComplete] = useState(0);

  const handleCompleteTask = (id) => {
    const updatedTasks = monthlyTasks.map(monthlyTasks => {
      if (monthlyTasks.id === id) {
        return { ...monthlyTasks, complete: !monthlyTasks.complete };
      } else {
        return monthlyTasks;
      }
    });
    setMonthlyTasks(updatedTasks);
    setPercentComplete(calculatePercentComplete(updatedTasks));
  };

  const calculatePercentComplete = (updatedTasks) => {
    const completedTasks = updatedTasks.filter(monthlyTasks => monthlyTasks.complete);
    const percentComplete = (completedTasks.length / monthlyTasks.length) * 100;
    return percentComplete;
  };
    return ( 
      <div>
      <p>{percentComplete}% Complete</p>
    <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Month</th>
            <th>Goal</th>
            <th>Click complete button to change %</th>
          </tr>
        </thead>
        <tbody>
          {props.data && props.data.map((monthlyTasks) => {
            return (
              <tr>
                <td>{monthlyTasks.id}</td>
                <td>{monthlyTasks.month}</td>
                <td>{monthlyTasks.goal}</td>
                <td>
                <input
                  type="checkbox"
                  checked={monthlyTasks.complete}
                  onChange={() => handleCompleteTask(monthlyTasks.id)}
                />
                </td>
              </tr>
              );
          })}
        </tbody>
      </table> 
      </div>
      );
}

export default DisplayMonthlyTask;