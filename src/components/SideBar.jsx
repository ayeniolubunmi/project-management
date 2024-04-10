import React from 'react';
import Button from './Button';

const SideBar = ({onStartAddProject,projects,onSelect,selectProjectId}) => {
  return (
    <aside className='px-8 py-16 w-1/3 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 text-stone-400 font-bold uppercase md:text-xl'>Your projects</h2>
      <div>
        <Button onClick={onStartAddProject}>
          + Add project
        </Button>
      </div>
      <ul>
        {projects?.map((project)=>{
          return(
            <li key={project.id}>
              <button onClick={onSelect} className='w-full text-left px-2 py-1 my-1 rounded-sm text-stone-400 hover:text-stone-800'>{project.title}</button>
            </li>
          ) 
        })}
      </ul>
    </aside>
  );
}
export default SideBar;
