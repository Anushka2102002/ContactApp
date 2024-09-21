import Navbar from "./Components/navbar";
import { IoSearchSharp } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from './config/firebase';
import useDisclose from './Hooks/useDisclose';
import ContactCard from "./Components/ContactCard";
import AddAndUpdate from "./Components/AddAndUpdate";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from "./components/NotFoundContact";
const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setContacts(contactLists);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value)
    );
    setContacts(filteredContacts);
    return(filterContacts);
  };

  return (
    <>
      <div className="mx-auto max-w-[370px] p-4">
        <Navbar />
        <div className="flex gap-2 mb-4">
          <div className="relative flex flex-grow items-center">
            <IoSearchSharp className="absolute ml-1 text-3xl text-white" />
            <input 
              onChange={filterContacts}
              type="text"
              className="h-10 flex-grow border bg-transparent rounded border-white pl-9 text-white"
              placeholder="Search contacts"
            />
          </div>
          <FaUserPlus
            onClick={onOpen} 
            className="text-4xl cursor-pointer text-white"
          />
        </div>

        <div>
          {contacts.length<=0?
          (<NotFoundContact />
          ):(
          contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
             
            />
          )))}
        </div>
      </div>

     
      <AddAndUpdate 
        onClose={onClose} 
        isOpen={isOpen} 
        isUpdate={false} // This is an "Add" modal
      />
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
