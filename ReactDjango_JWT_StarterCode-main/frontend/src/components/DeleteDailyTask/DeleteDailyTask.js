import React, {useState} from 'react';

const DeleteDailyTask = (props) => {
    const [id, setId] = useState('');
    

    function handleSubmit(event){
        event.preventDefault();
        let deleteDailyTask = {
            id: id,
        };
        console.log(deleteDailyTask)
        props.data(deleteDailyTask)
        
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