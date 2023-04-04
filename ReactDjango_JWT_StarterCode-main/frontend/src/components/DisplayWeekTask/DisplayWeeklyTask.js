import React, { useState } from 'react';
const DisplayWeeklyTask = (props) => {
  const [weeklyTasks, setWeeklyTasks] = useState([
    { id: 1, complete: false },{ id: 2, complete: false }
    ]);
  const [percentComplete, setPercentComplete] = useState(0);

  const handleCompleteTask = (id) => {
    const updatedTasks = weeklyTasks.map(weeklyTasks => {
      if (weeklyTasks.id === id) {
        return { ...weeklyTasks, complete: !weeklyTasks.complete };
      } else {
        return weeklyTasks;
      }
    });
    setWeeklyTasks(updatedTasks);
    setPercentComplete(calculatePercentComplete(updatedTasks));
  };

  const calculatePercentComplete = (updatedTasks) => {
    const completedTasks = updatedTasks.filter(weeklyTasks => weeklyTasks.complete);
    const percentComplete = (completedTasks.length / weeklyTasks.length) * 100;
    return percentComplete;
  };
    return ( 
      <div>
      <p>{percentComplete}% Complete</p>
    <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>week_of_year</th>
            <th>Task</th>
            <th>Click button to change completion %</th>
          </tr>
        </thead>
        <tbody>
          {props.data && props.data.map((weeklyTasks) => {
            return (
              <tr key={weeklyTasks.id}>
                <td>{weeklyTasks.id}</td>
                <td>{weeklyTasks.week_of_year}</td>
                <td>{weeklyTasks.task}</td>
                <td>
                <input
                  type="checkbox"
                  checked={weeklyTasks.complete}
                  onChange={() => handleCompleteTask(weeklyTasks.id)}
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
 
export default DisplayWeeklyTask ;