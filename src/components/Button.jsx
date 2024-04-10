export default function Button({children, ...props}){
    return <button className='px-8 py-4 text-sm md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-200' 
    {...props}>
        {children} 
    </button>
}