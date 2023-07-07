import React, { useContext } from "react";
import { PropertyContext } from "../Context/PropertyContext";


// const state
const ApproveProperty = () => {
  const { properties,  approveProperty } = useContext(PropertyContext);
  const handleApprove = (propertyId) => {approveProperty(propertyId)};

console.log (properties)

  return (
    <div>
      <h2>Approve Property</h2>

      {properties && properties
          .filter((property) => !property.is_approved) // Filter out approved properties
          .map((property) => (
        <div key={property.id}>
          <h3>{property.name}</h3>
          <p>Location: {property.location}</p>
          <p>Description: {property.description}</p>
          <button onClick={() => handleApprove(property.id)}>
            Approve
          </button>
        </div>
      ))}
    </div>
  );
};

export default ApproveProperty;


