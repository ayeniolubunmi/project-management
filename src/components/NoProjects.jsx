import React from 'react';
import Button from './Button';

const NoProjects = ({onStartAddProject}) => {
  return (
    <div className='mt-24 text-center w-2/3'>
        <img src="" alt="" />
        <h2 className='text-xl font-bold my-4 text-stone-400'>No projects selected</h2>
        <p className='text-stone-500 mt-4'>Select a project or get started with a new project</p>
        <p className='mt-8'>
            <Button onClick={onStartAddProject}>Create a new projects </Button>
        </p>
    </div>
  );
}

export default NoProjects;
