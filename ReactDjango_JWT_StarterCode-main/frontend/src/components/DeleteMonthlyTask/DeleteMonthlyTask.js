import React, {useState} from 'react';
const DeleteMonthlyTask = (props) => {
    const [id, setId] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let eraseMonthlyTask = {
            id : id
        };
        console.log(eraseMonthlyTask)
        props.data(eraseMonthlyTask)
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>ID</label>
            <input type='' value={id} onChange={(event) => setId(event.target.value)}/>
            <button type='submit'>Delete Monthly Task</button>
        </form>
    );
}
 
export default DeleteMonthlyTask;