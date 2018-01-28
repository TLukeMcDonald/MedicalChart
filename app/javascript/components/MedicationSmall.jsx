import React from 'react';
import "./../../assets/stylesheets/MedicationSmall"


const MedicationSmall = (props) => {
  console.log({'MedicationSmall':props});
  return (
    <div>
      <div className="card medicationSmall justify-content-center mb-4" >
        <div className="card-body">
          <h5 className="card-title">{props.med.generic_name}</h5>
          <p className="card-text">{props.med.pharm_class_epc} </p>
        </div>
      </div>
    </div>
  );
};

export default MedicationSmall;
