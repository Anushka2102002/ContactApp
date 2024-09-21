import React from 'react';
import { FaTrashRestoreAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi"; 
import { deleteDoc, doc } from "firebase/firestore";
import { db } from '../config/firebase';
import AddAndUpdate from './AddAndUpdate'; 
import useDisclose from '../Hooks/useDisclose';
import { toast } from 'react-toastify';

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
     
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <>
      <div className="bg-yellow p-2 rounded-lg flex justify-between items-center mb-4">
        <div className="flex gap-1">
          <HiOutlineUserCircle className="text-4xl text-orange" />
          <div className="ml-3">
            <h2 className="font-semibold text-lg">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <FiEdit onClick={onOpen} 
            className="text-blue-500 cursor-pointer hover:text-blue-900" 
          />
          <FaTrashRestoreAlt 
            onClick={() => deleteContact(contact.id)} 
            aria-label="Delete Contact"
            className="text-red-500 cursor-pointer hover:text-red-900"
          />
        </div>
      </div>

      {isOpen && (  
        <AddAndUpdate
          contact={contact}
          isUpdate={true}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default ContactCard;
