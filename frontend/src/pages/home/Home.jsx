import React, { useEffect, useState } from "react";
import "./Home.css";
import { VscCollapseAll } from "react-icons/vsc";
import { FiPlus } from "react-icons/fi";
import { TiWeatherSunny } from "react-icons/ti";
import TodoList from "../../components/todoList/TodoList";
import { formatDate } from "../../utils/utils";
import SelectTime from "../../components/selectTime/SelectTime";
import AddTodoForm from "../../components/addTodoForm/AddTodoForm";
import Notification from "../../components/notification/Notification";

const Home = () => {
  const currentDate = new Date();
  const handleFilterSelect = (selectedOption) => {
    console.log("Selected Filter:", selectedOption);
  };

  return (
    <div className="container-fluid home-container">
      <div className="welcome-container-wrapper welcome-wrapper">
        <h3>Welcome! Kumar</h3>
        <div>
          <p className="date">{formatDate(currentDate)}</p>
        </div>
      </div>

      <div className="welcome-container-wrapper filter-wrapper">
        <h3>Board</h3>
        <SelectTime onSelect={handleFilterSelect} />
      </div>
      <div className="todos-container">
        <div>
          <div className="backlog todos-box">
            <p>Backlog</p>
          </div>
          <TodoList />
          <TodoList />
        </div>
        <div>
          <div className="backlog todos-box">
            <p>To do</p>

            {/* add todo modal */}
            <AddTodoForm />
          </div>
          <TodoList />
        </div>
        <div>
          <div className="backlog todos-box">
            <p>In Progress</p>
          </div>
          <TodoList />
        </div>
        <div>
          <div className="backlog todos-box">
            <p>Done</p>
          </div>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Home;
