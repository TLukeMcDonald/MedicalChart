import React from 'react';
import "./../../assets/stylesheets/MedicationSmall"


const MedicationSmall = (props) => {
  console.log('MedicationSmall component loaded');
  return (
    <div>
      <div className="card medicationSmall justify-content-center mb-4" >
        <div className="card-body">
          <h5 className="card-title">Medication Name</h5>
          <p className="card-text">Some text </p>
        </div>
      </div>
    </div>
  );
};

export default MedicationSmall;
