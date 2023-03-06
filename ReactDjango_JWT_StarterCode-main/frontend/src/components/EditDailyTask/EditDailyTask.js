import React, {useState} from 'react';

const EditDailyTask = (props) => {
    const [id, setId] = useState('');
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');
    const [task, setTask] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let updatedDailyTask = {
            id: id,
            day: day,
            time: time,
            task: task
        };
        console.log(updatedDailyTask)
        props.data(updatedDailyTask)
        
    }


    return ( <form onSubmit={handleSubmit}>
        <label>ID</label>
        <input type='' value={id} onChange={(event) => setId(event.target.value)}/>
        <label>Day</label>
        <input type='' value={day} onChange={(event) => setDay(event.target.value)}/>
        <label>Time</label>
        <input type='' value={time} onChange={(event) => setTime(event.target.value)}/>
        <label>Task</label>
        <input type='' value={task} onChange={(event) => setTask(event.target.value)}/>
        <button type='submit'>Update Daily Task</button>
    </form> );
}
 
export default EditDailyTask;