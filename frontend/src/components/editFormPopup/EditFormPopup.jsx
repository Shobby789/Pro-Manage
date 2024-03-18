import React, { useState } from "react";
import "./EditFormPopup.css";
import { GoDotFill } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { FaTrash } from "react-icons/fa6";

function EditFormPopup() {
  const [modal, setModal] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <button className="edit-btn" onClick={() => toggleModal()}>
        Edit
      </button>

      {modal ? (
        <div className="edit-modal">
          <div onClick={() => toggleModal()} className="edit-overlay"></div>
          <div className="edit-modal-content">
            <div className="input-group">
              <lable className="form-label">
                Title <span className="mandatory-icon">*</span>
              </lable>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Task Title"
              />
            </div>
            <div className="priority-buttons">
              <label htmlFor="priority" className="form-label">
                Select Priority <span className="mandatory-icon">*</span>
              </label>
              <div className="buttons">
                <button className="priority-btn">
                  <GoDotFill className="hight-priority" /> high priority
                </button>
                <button className="priority-btn">
                  <GoDotFill className="moderate-priority" /> moderate priority
                </button>
                <button className="priority-btn">
                  <GoDotFill className="low-priority" /> low priority
                </button>
              </div>
            </div>
            <p className="checklist">
              Checklist (1/3) <span className="mandatory-icon">*</span>
            </p>
            <div className="list">
              {showInput ? (
                <div className="list-item">
                  <input
                    type="text"
                    className="list-item-input"
                    placeholder="Add a task"
                  />
                  <FaTrash className="delete-btn" />
                </div>
              ) : (
                ""
              )}
              <button className="add-btn" onClick={() => setShowInput(true)}>
                + Add New
              </button>
            </div>
            <div className="popup-buttons">
              <div>
                <label htmlFor="dueDate" className="form-label dateLabel">
                  Select Due Date
                </label>
                <input type="date" name="dueDate" id="dueDate" />
              </div>
              <div>
                <button
                  className="btn cancel-btn"
                  onClick={() => toggleModal()}
                >
                  Cancel
                </button>
                <button className="btn save-btn">Save</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default EditFormPopup;
