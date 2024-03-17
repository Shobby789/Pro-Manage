import React, { useState } from "react";
import "./LogoutPopup.css";
import { IoLogOutOutline } from "react-icons/io5";

const LogoutPopup = ({ title, btnText, actionFunction }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div className="logout-btn">
        <IoLogOutOutline className="icon-size icon-btn" />
        <button className="icon-btn" onClick={() => toggleModal()}>
          Logout
        </button>
      </div>
      {modal ? (
        <div className="logout-modal">
          <div onClick={() => toggleModal()} className="logout-overlay"></div>
          <div className="logout-modal-content">
            <p>{title}</p>
            <div className="logout-buttons">
              <button onClick={actionFunction}>Yes, {btnText}</button>
              <button onClick={() => toggleModal()}>Cancel</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LogoutPopup;
