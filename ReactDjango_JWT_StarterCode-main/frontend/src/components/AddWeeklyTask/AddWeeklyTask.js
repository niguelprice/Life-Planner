import React, {useState} from 'react';

const AddWeeklyTask = (props) => {
    const [week_of_year, set_Week_of_year] = useState('');
    const [task, setTask] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newWeeklyTask = {
            week_of_year: week_of_year,
            task: task
        };
        console.log(newWeeklyTask)
        props.AddWeeklyTaskProperty(newWeeklyTask)
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Week Of Year</label>
            <input type='' value={week_of_year} onChange={(event) => set_Week_of_year(event.target.value)}/>
            <label>Task</label>
            <input type='' value={task} onChange={(event) => setTask(event.target.value)}/>
            <button type='submit'>Add Weekly Task</button>
        </form>
    );
}
 
export default AddWeeklyTask;