import React, { useContext, useState } from "react";
import "./Contact.css"; // Import custom CSS for styling
import { FormContext } from "../../Context/FormContext";

export const Contact = () => {
  const { formData, handleSetFormData } = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleSetFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="contact-input"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="contact-input"
          placeholder="Email"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="contact-textarea"
          placeholder="Message"
        />
        <button type="submit" className="contact-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
