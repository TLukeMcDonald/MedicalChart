import React from 'react';
import "./../../assets/stylesheets/Main";
import chart from "./../../assets/images/004-medical.svg";
import pill from "./../../assets/images/003-pills.svg";

const Main = (props) => {
  console.log('Main component loaded');
  return (
    <div className="main">
      <div>
      <h1>My Chart </h1>
      <p>This is a medical charting system to help track injuries and illnesses over time. </p><br/>
      <p>Do you travel a lot or are you frequently deployed due to military status?  Do you have trouble remembering all those times you've injured your back or knee? </p>
      <p>Now you can search by body part and time series to easily see trends and partterns. </p>
      </div>
      <div className='links '>
        <a href="ChartList" class="iconNav chartNav">
          <div>
            <img src={chart} className="" alt="chart" />
            Chart
          </div>
        </a>
        <a href="MedicationList" class="iconNav medNav">
          <div>
            <img src={pill} className="" alt="chart" />
            Medicine
          </div>
        </a>
      </div>
    </div>
  );
};

export default Main;

