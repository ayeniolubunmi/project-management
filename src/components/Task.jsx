import React from 'react';
import NewTask from './NewTask';

const Task = ({tasks,onAdd,onDelete}) => {
  return (
    <section>
        <h2 className='text-2xl font-bold text-stone-400'>Tasks</h2>
        <NewTask onAdd={onAdd} />
        {tasks.lenght === 0 && (
         <p className='text-stone-600'> This projects does not have any task added yet</p>
        )}
        <ul>
        {tasks.map((task)=>(
            <li key={task.id} className='flex items-center justify-between'> 
                <span className='text-2xl font-bold text-stone-200 hover:bg-stone-950'>{task.text}</span> 
                <button onDelete={onDelete} className='text-stone-100'> Clear task</button>
            </li>
        ))}
        </ul>
    </section>
  );
}
export default Task;
