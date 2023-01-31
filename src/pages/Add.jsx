import React, { useState } from 'react'

const Add = ({ contacts, setContacts, setAddContact }) => {
    
    const inputArr = [
        {
          type: "email",
          value: ""
        }
      ];

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [number, setNumber] = useState('');
    const [emailArray, setEmailArray] = useState(inputArr);

    const handleAdd = (e) => {
        e.preventDefault()

        const emailString = emailArray.map(name => {
            return `${name.value}\n`
          })

        const id = Math.random().toString(16).slice(2);
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
        contacts.push(newContact);
        console.log("new contact", newContact)
        setContacts(contacts);
        setAddContact(false);
    }

    const addInput = () => {
        setEmailArray(s => {
          return [
            ...s,
            {
              type: "text",
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
         <h2>Register new contact</h2>
            <form onSubmit={handleAdd}>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Enter the name" id="name" name="name" onChange={(e)=>setName(e.target.value)} />
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" placeholder="Enter Last Name" id="lastname" name="lastname" onChange={(e)=>setLastname(e.target.value)}/>
                <label htmlFor="address">Address:</label>
                <input type="text" placeholder="Enter Address" id="address" name="address" onChange={(e)=>setAddress(e.target.value)} />
                <label htmlFor="city">City:</label>
                <input type="text" placeholder="Enter City" id="city" name="city" onChange={(e)=>setCity(e.target.value)} />
                <label htmlFor="country">Country:</label>
                <input type="text" placeholder="Enter Country" id="country" name="country" onChange={(e)=>setCountry(e.target.value)} />
                {/*Adding email*/}
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
                <input type="text" placeholder="Enter the Number" id="number" name="number" onChange={(e)=>setNumber(e.target.value)} />
                <button type="submit" className="save-button">Save</button>
            </form>
       </div>
  </>
  );
}

export default Add;