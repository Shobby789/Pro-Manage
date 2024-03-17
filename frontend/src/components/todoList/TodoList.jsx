import React, { useEffect, useState } from "react";
import "./TodoList.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Notification from "../notification/Notification";
import DeletePopup from "../deletePopup/DeletePopup";

const TodoList = () => {
  const [show, setShow] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [isDeadline, setIsDeadline] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const showActionButtons = () => {
    setShowActions(!showActions);
  };

  const showNotifications = () => {
    setShowNotification(!showNotification);
    setShowActions(!showActions);
  };

  const toggleBtn = () => {
    setShow(!show);
  };

  const test = () => {
    alert("Task has been deleted successfully!");
    setShowActions(!showActions);
  };

  useEffect(() => {
    const time = setTimeout(() => {
      setShowNotification(false);
    }, 1500);

    return () => clearTimeout(time);
  }, [showNotification]);

  return (
    <>
      {showNotification ? <Notification /> : ""}
      <div className="todo-list-container">
        <div>
          <p className="priority-tick">
            <GoDotFill className="status-icon" />
            <span className="status">high priority</span>
          </p>
          <button className="icon-btn">
            <HiOutlineDotsHorizontal
              className="icon-size"
              onClick={showActionButtons}
            />
          </button>
          {showActions ? (
            <div className="actions">
              <button onClick={() => setShowActions(!showActions)}>Edit</button>
              <button onClick={showNotifications}>Share</button>
              {/* <button>Delete</button> */}
              <DeletePopup
                title="Are you sure you want to Delete?"
                btnText="Delete"
                actionFunction={test}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <p className="title">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div className="check-list">
          <div className="checklist">
            <p className="">Checklist (0/3)</p>
            <button onClick={toggleBtn}>
              {show ? (
                <IoIosArrowUp className="" />
              ) : (
                <IoIosArrowDown className="" />
              )}
            </button>
          </div>
        </div>
        {show ? (
          <div className="todolist">
            <div className="todoItem">
              <input type="checkbox" name="" id="todo-checkbox" />
              <p className="">Task to be done.</p>
            </div>
            <div className="todoItem">
              <input type="checkbox" name="" id="todo-checkbox" />
              <p className="">Task to be done.</p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <div className="deadline-buttons">
          <button className={isDeadline ? "btn-danger" : "btn-secondary"}>
            10 Feb
          </button>
          <div>
            <button className="btn-secondary">progress</button>
            <button className="btn-secondary">to do</button>
            <button className="btn-secondary">done</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
