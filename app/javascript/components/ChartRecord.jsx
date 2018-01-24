import React from 'react';
import "./../../assets/stylesheets/ChartRecord"

const ChartRecord = (props) => {
  console.log('ChartRecord component loaded');
  return (

          <div className="card col">
            <a href="#" className=" ">
            <div className="card-body">
              <div className="row">
               <h5 className="card-title col recordSmall"> {props.problem} </h5>
               <p className="card-text col recordSmall"> {props.date} {props.status} </p>
               </div>

            </div>
              </a>
          </div>


  )
}
export default ChartRecord;
