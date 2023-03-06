import React, {useState} from 'react';

const EditMonthlyTask = (props) => {
    const [id, setId] = useState('');
    const [month, setMonth] = useState('');
    const [goal, setGoal] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let updatedMonthlyTask = {
            id: id,
            month: month,
            goal: goal
            
        };
        console.log(updatedMonthlyTask)
        props.data(updatedMonthlyTask)
        
    }


    return ( 
        <form onSubmit={handleSubmit}>
        <label>ID</label>
        <input type='' value={id} onChange={(event) => setId(event.target.value)}/>
        <label>Month</label>
        <input type='' value={month} onChange={(event) => setMonth(event.target.value)}/>
        <label>Goal</label>
        <input type='' value={goal} onChange={(event) => setGoal(event.target.value)}/>
        <button type='submit'>Update Monthly Task</button>
        </form> 
     );
}
 
export default EditMonthlyTask;