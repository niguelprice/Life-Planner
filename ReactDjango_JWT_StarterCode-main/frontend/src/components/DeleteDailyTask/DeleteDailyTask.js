import React, {useState} from 'react';

const DeleteDailyTask = (props) => {
    const [id, setId] = useState({});
    

    function handleSubmit(event){
        event.preventDefault();
        let eraseDailyTask = {
            id: id,
        };
        console.log(eraseDailyTask)
        props.data(eraseDailyTask)
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>ID</label>
            <input type='' value={id} onChange={(event) => setId(event.target.value)}/>
            <button type='submit'>Delete Daily Task</button>
        </form>
    );
}
 
export default DeleteDailyTask;