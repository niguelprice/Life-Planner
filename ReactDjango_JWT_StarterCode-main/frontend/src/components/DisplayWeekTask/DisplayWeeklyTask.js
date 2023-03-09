import ProgressBar from "../ProgressBar/ProgressBar";
const DisplayWeeklyTask = (props) => {
    return ( <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>week_of_year</th>
            <th>Task</th>
            <th>Complete/Incomplete</th>
          </tr>
        </thead>
        <tbody>
          {props.data && props.data.map((weeklyTasks) => {
            return (
              <tr>
                <td>{weeklyTasks.id}</td>
                <td>{weeklyTasks.week_of_year}</td>
                <td>{weeklyTasks.task}</td>
                <td>
                 {<ProgressBar message='Complete/Incomplete'/>}
                </td>
              </tr>
              );
          })}
        </tbody>
      </table> );
}
 
export default DisplayWeeklyTask ;