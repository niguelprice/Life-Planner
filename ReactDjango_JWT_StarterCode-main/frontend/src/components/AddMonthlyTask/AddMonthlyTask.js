import React, {useState} from 'react';

const AddMonthlyTask = (props) => {
    const [month, setMonth] = useState('');
    const [goal, setGoal] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newMonthlyGoal = {
            month: month,
            goal: goal,
        };
        console.log(newMonthlyGoal)
        props.AddMonthlyTaskProperty(newMonthlyGoal)
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Month</label>
            <input type='' value={month} onChange={(event) => setMonth(event.target.value)}/>
            <label>Goal</label>
            <input type='' value={goal} onChange={(event) => setGoal(event.target.value)}/>
            <button type='submit'>Add Monthly Task</button>
        </form>
    );
}
 
export default AddMonthlyTask;