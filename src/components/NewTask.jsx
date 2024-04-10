import React, { useState } from 'react';

const NewTask = () => {
    const [enteredTask, setEnteredTask]=useState();
    function handleChange(event){
        setEnteredTask(event.target.value);
    }
  return (
    <div className='flex items-center gap-4'>
      <input type="text" value={enteredTask} onChange={handleChange} className='w-64 px-2 py-1 bg-stone-200 rounded-sm' />
      <button className='text-stone-400 hover:bg-stone-950'>Add task </button>
    </div>
  );
}
export default NewTask;
