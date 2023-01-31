import React, {useState} from 'react'

const Edit = ({ contacts, selectedContacts, setContacts, setEditContact }) => {

    const id = selectedContacts.id;
    const [name, setName] = useState(selectedContacts.name);
    const [lastname, setLastname] = useState(selectedContacts.lastname);
    const [address, setAddress] = useState(selectedContacts.address);
    const [city, setCity] = useState(selectedContacts.city);
    const [country, setCountry] = useState(selectedContacts.country);
    const [emailArray, setEmailArray] = useState(selectedContacts.emailArray);
    const [number, setNumber] = useState(selectedContacts.number);

    const handleUpdate = () => {

        const emailString = emailArray.map(name => {
            return `${name.value}\n`
          })

        const newContact = {
            id,
            name,
            lastname,
            address,
            city,
            country,
            emailString,
            emailArray,
            number
        }

        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].id === id) {
                contacts.splice(i, 1, newContact);
                break;
            }
        }
        setContacts(contacts);
        setEditContact(false);
      };

      const addInput = () => {
        setEmailArray(s => {
          return [
            ...s,
            {
              type: "email",
              value: ""
            }
          ];
        });
      };

    const handleChange = e => {
        e.preventDefault();
    
        const index = e.target.id;
        setEmailArray(s => {
          const newArr = s.slice();
          newArr[index].value = e.target.value;
    
          return newArr;
        });
      };

  return (
  <>
     <div className="header">
        <h2>PhoneBook</h2>
     </div>

       <div className="form-registration">
           <h2>Edit contact</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Enter the name" id="name" name="name" defaultValue={name} onChange={(e)=>setName(e.target.value)} />
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" placeholder="Enter Last Name" id="lastname" name="lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                <label htmlFor="address">Address:</label>
                <input type="text" placeholder="Enter Address" id="address" name="address" value={address} onChange={(e)=>setAddress(e.target.value)} />
                <label htmlFor="city">City:</label>
                <input type="text" placeholder="Enter City" id="city" name="city" value={city} onChange={(e)=>setCity(e.target.value)} />
                <label htmlFor="country">Country:</label>
                <input type="text" placeholder="Enter Country" id="country" name="country" value={country} onChange={(e)=>setCountry(e.target.value)} />
                <label htmlFor="email">Email:</label>
                {emailArray.map((item, i) => {
                    return (
                        <input
                            onChange={handleChange}
                            value={item.value}
                            id={i}
                            type={item.type}
                            placeholder="Enter the email" />
                    );
                })}  
                <button onClick={()=>addInput()} type="button" className='addEmail'>Add</button>
                <label htmlFor="number">Number:</label>
                <input type="text" placeholder="Enter the Number" id="number" name="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
                <button onClick={()=>handleUpdate()} type="button" className="save-button">Edit</button>
       </div>
       </>
  )
}

export default Edit