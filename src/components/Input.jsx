import React, { forwardRef } from 'react';


const Input = forwardRef (function({label,textarea,...props}, ref){
  const classes = 'w-full border-b-2 p-1 border-stone-300 text-stone-600 bg-stone-200 focus:outline-none rounded-sm focus:border-stone-600'
return (
  <div>
    <p className='flex flex-col p-1'>
      <label className='text-sm font-bold text-stone-600 uppercase'>{label}</label>
      {textarea ? 
      <textarea ref={ref} className={classes} {...props} /> : 
      <input ref={ref} className={classes} {...props}/>}
    </p>
  </div>
);
}) 
export default Input;
