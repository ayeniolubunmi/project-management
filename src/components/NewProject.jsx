import React, { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

const NewProject = ({onAdd, onCancel}) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

const handleSave=()=>{
  const enteredTitle = title.current.value;
  const enteredDescription = description.current.value;
  const enteredDueDate = dueDate.current.value;

  if(enteredTitle.trim()===''||enteredDescription ===''||enteredDueDate ===''){
    modal.current.open();
    return;
  }

  onAdd({
    title:enteredTitle,
    description:enteredDescription,
    dueDate:enteredDueDate,
  });
}

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className='text-xl font-bold text-stone-400 hover:text-stone-600'>Invalid input</h2>
        <p>Oops...it looks like you have not entered a value</p>
        <p>Please make sure you enter a valid value</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4'>
        <li>
          <button className='text-stone-800 hover:text-stone-950' onClick={onCancel}>
            Cancel
          </button>
        </li>
        <li>
          <button className='bg-stone-800 text-stone-400 px-6 py-2 rounded-md' 
          onClick={handleSave}>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" label="Title"/>
        <Input label="Description" textarea />
        <Input type="date" label="Due date"/>
      </div>
    </div>
    </>
    
  );
}

export default NewProject;
