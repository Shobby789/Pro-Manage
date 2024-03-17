import React from "react";
import "./Analytics.css";
import { GoDotFill } from "react-icons/go";

const Analytics = () => {
  return (
    <div className="analytics-container">
      <h3>Analytics Page</h3>
      <div className="container">
        <div className="analytics-box">
          <div className="analytics">
            <div>
              <GoDotFill />
              <span>Backlog Tasks</span>
            </div>
            <p className="completion-rate">16</p>
          </div>
          <div className="analytics">
            <div>
              <GoDotFill />
              <span>To-do Tasks</span>
            </div>
            <p className="completion-rate">14</p>
          </div>
          <div className="analytics">
            <div>
              <GoDotFill />
              <span>In-Progress Tasks</span>
            </div>
            <p className="completion-rate">03</p>
          </div>
          <div className="analytics">
            <div>
              <GoDotFill />
              <span>Completed Tasks</span>
            </div>
            <p className="completion-rate">22</p>
          </div>
        </div>
        <div className="analytics-box">
          <div className="analytics">
            <div>
              <GoDotFill />
              <span>Low Priority</span>
            </div>
            <p className="completion-rate">16</p>
          </div>
          <div className="analytics">
            <div>
              <GoDotFill />
              <span>Moderate Priority</span>
            </div>
            <p className="completion-rate">14</p>
          </div>
          <div className="analytics">
            <div>
              <GoDotFill />
              <span>High Priority</span>
            </div>
            <p className="completion-rate">03</p>
          </div>
          <div className="analytics">
            <div>
              <GoDotFill />
              <span>Due Date Tasks</span>
            </div>
            <p className="completion-rate">03</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
