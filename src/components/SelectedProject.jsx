import React from 'react';
import Task from './Task';

const SelectedProject = ({project, onDelete, onAddTask, onDeleteTask, tasks}) => {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US',{
        month:'numeric',
        year:'short',
        day:'numeric',
    })
  return (
    <div className='w-[35rem] mt-16'>
      <header className='border-b-2 border-stone-800 pb-4 mb-4'>
        <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold text-stone-100 hover:text-stone-200' 
            onClick={onDelete}  >{project.title}</h1>
            <button>Delete</button>
        </div>
        <p className='mb-4 text-stone-500'>{formattedDate}</p>
        <p>{project.description}</p>
      </header>
      <Task onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}

export default SelectedProject;
