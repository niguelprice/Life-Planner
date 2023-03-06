import React, {useState} from 'react';
const DeleteWeeklyTask = (props) => {
    const [id, setId] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let eraseWeeklyTask = {
            id : id
        };
        console.log(eraseWeeklyTask)
        props.data(eraseWeeklyTask)
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>ID</label>
            <input type='' value={id} onChange={(event) => setId(event.target.value)}/>
            <button type='submit'>Delete Weekly Task</button>
        </form>
    );
}
 
export default DeleteWeeklyTask;