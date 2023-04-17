import React, { useContext } from "react";
import { FormContext } from "../Context/FormContext";

const Admin = () => {
  const { formData } = useContext(FormContext);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Admin Panel</h1>
      {formData.name.length ? (
        <div>
          <h1>Name: {formData.name}</h1>
          <h1>Email: {formData.email}</h1>
          <h1>Message: {formData.message}</h1>
        </div>
      ) : (
        <p style={{ width: "100%" }}>Please Add Value in contact us form</p>
      )}
    </div>
  );
};

export default Admin;
