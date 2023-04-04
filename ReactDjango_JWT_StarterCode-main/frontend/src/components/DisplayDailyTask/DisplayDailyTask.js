import React, { useState } from 'react';
const DisplayDailyTask = (props) => {

  const [dailyTasks, setDailyTasks] = useState([
    { id: 1, complete: false },{ id: 2, complete: false },{ id: 3, complete: false },{ id: 4, complete: false },{ id: 5, complete: false }
    ,{ id: 6, complete: false },{ id: 7, complete: false },{ id: 8, complete: false },{ id: 9, complete: false },{ id: 10, complete: false }, 
    { id: 11, complete: false },{ id: 12, complete: false },{ id: 13, complete: false },{ id: 14, complete: false },{ id: 15, complete: false }
    ,{ id: 16, complete: false },{ id: 17, complete: false },{ id: 18, complete: false },{ id: 19, complete: false },{ id: 20, complete: false }, 
    { id: 21, complete: false },{ id: 22, complete: false },{ id: 23, complete: false },{ id: 24, complete: false },{ id: 25, complete: false }
    ,{ id: 26, complete: false } 
    ]);
  const [percentComplete, setPercentComplete] = useState(0);

  const handleCompleteTask = (id) => {
    const updatedTasks = dailyTasks.map(dailyTasks => {
      if (dailyTasks.id === id) {
        return { ...dailyTasks, complete: !dailyTasks.complete };
      } else {
        return dailyTasks;
      }
    });
    setDailyTasks(updatedTasks);
    setPercentComplete(calculatePercentComplete(updatedTasks));
  };

  const calculatePercentComplete = (updatedTasks) => {
    const completedTasks = updatedTasks.filter(dailyTasks => dailyTasks.complete);
    const percentComplete = (completedTasks.length / dailyTasks.length) * 100;
    return percentComplete;
  };
    return (
      <div>
        <p>{percentComplete}% Complete</p>
        <table className="table" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Day</th>
            <th>Time</th>
            <th>Task</th>
            <th>Click complete button to change %</th>
          </tr>
        </thead>
        <tbody>
          {props.data && props.data.map((dailyTasks) => {
            return (
              <tr key={dailyTasks.id}>
                <td>{dailyTasks.id}</td>
                <td>{dailyTasks.day}</td>
                <td>{dailyTasks.time}</td>
                <td>{dailyTasks.task}</td>
                <td>
                <input
                  type="checkbox"
                  checked={dailyTasks.complete}
                  onChange={() => handleCompleteTask(dailyTasks.id)}
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
 
export default DisplayDailyTask;