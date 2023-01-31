import React from "react";

const Header = ({ setAddContact }) => {
    return(
      <>
        <div className="header">
          <h2>PhoneBook</h2>
        </div>
          <div className="container-page">
              <div className="container">
                <h3>Contacts</h3>
                <button onClick={() => setAddContact(true)} className="add-contact">Add Contact</button>
              </div>
          </div>
      </>
    );
}

export default Header;