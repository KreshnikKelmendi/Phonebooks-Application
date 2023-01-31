import React from 'react'

const Table = ({ contacts, handleEditContact, handleDeleteContact }) => {

  return (
    <div className="table-contact">
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>Email</th>
            <th>Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </tbody>
          {contacts?.map((element)=>(
              <tr key={element.id}>
                <td>{element.name}</td>
                <td>{element.lastname}</td>
                <td>{element.address}</td>
                <td>{element.city}</td>
                <td>{element.country}</td>
                <td>{element.emailString}</td>    
                <td>{element.number}</td>
                <td><button onClick={() => handleEditContact(element.id)} className="edit-button">Edit</button></td>
                <td><button onClick={() => handleDeleteContact(element.id)} className="delete-button">Delete</button></td>
              </tr>
            ))}
          </table>
          </div>
  );
}

export default Table;