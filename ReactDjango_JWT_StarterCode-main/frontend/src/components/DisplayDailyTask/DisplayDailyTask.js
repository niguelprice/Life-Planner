
import ProgressBar from "../ProgressBar/ProgressBar";
const DisplayDailyTask = (props) => {
    return (
        <table className="table">
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
              <tr>
                <td>{dailyTasks.id}</td>
                <td>{dailyTasks.day}</td>
                <td>{dailyTasks.time}</td>
                <td>{dailyTasks.task}</td>
                <td>
                  {<ProgressBar/>}
                </td>
              </tr>
              );
          })}
        </tbody>
      </table>
      );
}
 
export default DisplayDailyTask;