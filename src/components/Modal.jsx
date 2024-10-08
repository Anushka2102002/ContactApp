import { createPortal } from 'react-dom';

import {AiOutlineClose} from "react-icons/ai"
const Modal = ({ onClose, isOpen, children }) => {
    return createPortal(
      <>
        {isOpen && (
            <div   className=" place-items-center absolute top-0 z-40
            h-screen w-screen backdrop-blur">
          <div className=" m-auto  relative z-50 min-w-[200px] 
            max-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose}
               className="text-2xl self-end" />
            </div>
            {children}
          </div>
          <div 
         
          className=" absolute top-0 z-40
          h-screen w-screen backdrop-blur"/> 
          </div>
        )}
      </>
      ,document.getElementById("modal-root"));
  };
  export default Modal;
  
  