import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./../../assets/stylesheets/ChartRecord"

const ChartRecord = (props) => {
  // console.log({'ChartRecord component loaded':props});
  return (

          <div className="card col">
            <NavLink to="ChartDetails" className=" ">
            <div className="card-body">
              <div className="row">
               <h5 className="card-title col recordSmall"> {props.record.problem} </h5>
               <p className="card-text col recordSmall"> {props.record.event_date} {props.record.status} </p>
               </div>

            </div>
              </NavLink>
          </div>


  )
}
export default ChartRecord;
