import React, {useState} from 'react';
const DeleteDailyTask = (props) => {
    const [id, setId] = useState('');

    function handleDelete(event){
        event.preventDefault();
        let eraseDailyTask = {
            id : id
        };
        console.log(eraseDailyTask)
        props.data(eraseDailyTask)
        
    }


    return (
        <form onSubmit={handleDelete}>
            <label>ID</label>
            <input type='' value={id} onChange={(event) => setId(event.target.value)}/>
            <button type='delete'>Delete Daily Task</button>
        </form>
    );
}
 
export default DeleteDailyTask;