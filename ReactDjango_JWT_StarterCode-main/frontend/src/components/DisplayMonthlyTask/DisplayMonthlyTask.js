import CustomButton from "../CustomButton/CustomButton";
const DisplayMonthlyTask = (props) => {
    return ( <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Month</th>
            <th>Goal</th>
            <th>Complete/Incomplete</th>
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
                  {<CustomButton message='Like/Dislike'/>}
                </td>
              </tr>
              );
          })}
        </tbody>
      </table> );
}

export default DisplayMonthlyTask;