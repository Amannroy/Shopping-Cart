

import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, please feel free to get in touch with us. We're here to help!</p>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <ul>
          <li>
            <strong>Address:</strong> 163 Sahid Colony Sri Hari Apartment, Panihati
          </li>
          <li>
            <strong>Email:</strong> info@example.com
          </li>
          <li>
            <strong>Phone:</strong> +91 (7980905677)
          </li>
        </ul>
      </div>

      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export { Contact }; 






































