import React, {useState} from 'react';

const EditWeeklyTask = (props) => {

    const [id, setId] = useState('');
    const [week_of_year, setWeek_of_year] = useState('');
    const [task, setTask] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let updatedWeeklyTask = {
            id: id,
            week_of_year: week_of_year,
            task: task
        };
        console.log(updatedWeeklyTask)
        props.data(updatedWeeklyTask)
        
    }

    return ( 
        <form onSubmit={handleSubmit}>
        <label>ID</label>
        <input type='' value={id} onChange={(event) => setId(event.target.value)}/>
        <label>Week_of_year</label>
        <input type='' value={week_of_year} onChange={(event) => setWeek_of_year(event.target.value)}/>
        <label>Task</label>
        <input type='' value={task} onChange={(event) => setTask(event.target.value)}/>
        <button type='submit'>Edit Weekly Task</button>
        </form> 
     );
}
 
export default EditWeeklyTask;