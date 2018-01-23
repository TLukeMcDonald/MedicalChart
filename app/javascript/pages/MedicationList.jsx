import React from 'react';

const MedicationList = (props) => {
  console.log('MedicationList component loaded');
  return (
    <div>
      <h1> MedicationList </h1>
        <div className="container">
          <div className="row">
            <div className="col">
              1 of 3
            </div>
            <div className="col">
              2 of 3
            </div>
            <div className="col">
              3 of 3
            </div>
          </div>
        </div>
    </div>
  );
};

export default MedicationList;
