import React from 'react';

const MedicationDetail = (props) => {
  // console.log({'MedicationDetail':props});
  return (
    <div className="container">
      <h1> MedicationDetail </h1>

    <p>Generic Name:  {props.med.generic_name}</p>
    <p>Brand Name:  {props.med.brand_name}</p>
    <p>Substance Name:  {props.med.substance_name}</p>
    <p>Manufacturer Name:  {props.med.manufacturer_name}</p>
    <br />
    <p>Product Type:  {props.med.product_type}</p>
    <p>Route:  {props.med.route}</p>
    <p>Pharm Class EPC:  {props.med.pharm_class_epc}</p>
    <p>Pharm Class PE:  {props.med.pharm_class_pe}</p>
    <p>Pharm Class MOA:  {props.med.pharm_class_moa}</p>
    <p>Description: </p>
    <p> {props.med.description}</p>
    <br/>
    <p>Indications and Usage: </p>
    <p>{props.med.indications_and_usage}</p>
    <p>Dosage and Administartion: </p>
    <p>{props.med.dosage_and_administration}</p>
    <br />
    <p>Package Label:  {props.med.package_label_principal_display_panel}</p>
    <p>Unii:  {props.med.unii}</p>
    <p>RXCUI:  {props.med.rxcui}</p>
    <p>SPL set Id:  {props.med.spl_set_id}</p>
    <p>Product NDC:  {props.med.product_ndc}</p>
    <p>Origional Product NDC:  {props.med.original_packager_product_ndc}</p>
    <p>Package NDC:  {props.med.package_ndc}</p>
    <p>SPL Id:  {props.med.spl_id}</p>
    <p>Application Number:  {props.med.application_number}</p>
    <p>NUI:  {props.med.nui}</p>
    <br/>
    <br/><br/><br/>

    </div>
  );
};

export default MedicationDetail;
