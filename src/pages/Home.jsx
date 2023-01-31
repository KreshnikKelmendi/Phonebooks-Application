import React, { useState } from "react";
import Header from "./Header";
import Table from "./Table";
import Add from "./Add";
import Edit from "./Edit";

const Home = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContacts, setSelectedContacts] = useState(null);
    const [addContact, setAddContact] = useState(false);
    const [editContact, setEditContact] = useState(false);

    const handleEditContact = (id) => {
        const [contact] = contacts.filter(contact => contact.id === id);

        setSelectedContacts(contact);
        setEditContact(true);
    }

    const handleDeleteContact = (id) => {
        alert(`Are you sure you want to delete contact with id ${id}`,)
        const [contact] = contacts.filter((person) => person.id !== id);

        setContacts( contact);
        console.log("delete",contact)
    }
    

    return(
       <section>
            { !addContact && !editContact && (
            <>
                <Header setAddContact={setAddContact} />
                
                <Table contacts={contacts} 
                    handleEditContact={handleEditContact} 
                    handleDeleteContact={handleDeleteContact} />
            </>
            )} 

            {addContact && (
                <Add contacts={contacts}
                     setContacts={setContacts}
                     setAddContact={setAddContact} />
            )}

            {editContact && (
                <Edit contacts={contacts}
                      selectedContacts={selectedContacts}
                      setContacts={setContacts}
                      setEditContact={setEditContact} />
            )}
        </section>
    );
}

export default Home;