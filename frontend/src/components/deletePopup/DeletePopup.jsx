import React, { useState } from "react";
import "./DeletePopup.css";

const DeletePopup = ({ title, btnText, actionFunction }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div className="">
        <button className="delete-btn" onClick={() => toggleModal()}>
          Delete
        </button>
      </div>
      {modal ? (
        <div className="DeletePopup-modal">
          <div
            onClick={() => toggleModal()}
            className="DeletePopup-overlay"
          ></div>
          <div className="DeletePopup-modal-content">
            <p>{title}</p>
            <div className="DeletePopup-buttons">
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

export default DeletePopup;
