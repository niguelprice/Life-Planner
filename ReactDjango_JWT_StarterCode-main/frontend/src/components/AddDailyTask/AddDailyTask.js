import React, {useState} from 'react';

const AddDailyTask = (props) => {
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');
    const [task, setTask] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newDailyTask = {
            day: day,
            time: time,
            task: task
        };
        console.log(newDailyTask)
        props.AddDailyTaskProperty(newDailyTask)
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Day</label>
            <input type='' value={day} onChange={(event) => setDay(event.target.value)}/>
            <label>Time</label>
            <input type='' value={time} onChange={(event) => setTime(event.target.value)}/>
            <label>Task</label>
            <input type='' value={task} onChange={(event) => setTask(event.target.value)}/>
            <button type='submit'>Add Daily Task</button>
        </form>
    );
}
 
export default AddDailyTask;