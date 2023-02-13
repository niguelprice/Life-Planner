import CustomButton from "../CustomButton/CustomButton";
const DisplayDailyTask = (props) => {
    return (
        <table className="table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Task</th>
            <th>Complete/Incomplete</th>
          </tr>
        </thead>
        <tbody>
          {props.data && props.data.map((dailyTasks) => {
            return (
              <tr>
                <td>{dailyTasks.day}</td>
                <td>{dailyTasks.time}</td>
                <td>{dailyTasks.task}</td>
                <td>
                  {<CustomButton message='Complete/Incomplete'/>}
                </td>
              </tr>
              );
          })}
        </tbody>
      </table>
      );
}
 
export default DisplayDailyTask;