import {forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

const Modal = forwardRef(function Modal({children, buttonCaption}, ref){
    const dialog = useRef();
    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })
    return(
        <dialog ref={dialog}>
            {children}
            <form>
                <Button> {buttonCaption}</Button>
            </form>
        </dialog>
    )
})
export default Modal;
