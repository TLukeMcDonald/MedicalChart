import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MedicationSmall from './../components/MedicationSmall';
import "./../../assets/stylesheets/MedicationList"

const MedicationList = (props) => {
  console.log({'MedicationList loaded':props});
  return (
    <div>
      <h1 className="text-center"> Medications </h1>
        <div className="card-deck justify-content-center">


              {props.meds.map( med => (
                <NavLink to="MedicationDetail" className=" ">
                <MedicationSmall
                  key={med.id}
                  med={med}
                  />
                </NavLink>
                ))}


        </div>
    </div>
  );
};

export default MedicationList;
