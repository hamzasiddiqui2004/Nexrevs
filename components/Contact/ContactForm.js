import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
import baseUrlapi from "../../utils/baseUrlapi";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully sent and we will get back to you soon.",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    let formErrors = {};
    const { name, email, number, subject, text } = contact;

    // Check for empty fields
    if (!name) formErrors.name = "Name is required.";
    if (!email) formErrors.email = "Email is required.";
    if (!number) formErrors.number = "Phone number is required.";
    if (!subject) formErrors.subject = "Subject is required.";
    if (!text) formErrors.text = "Message is required.";

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
      formErrors.email = "Invalid email format.";
    }

    // Phone number format validation (assuming a 10-digit phone number)
    const numberPattern = /^\d{11}$/;
    if (number && !numberPattern.test(number)) {
      formErrors.number = "Invalid phone number format.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const url = `${baseUrlapi}/contact/create`;
      const payload = { ...contact };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-form ">
      <div className="contact-title">
        <h2>Get In Touch</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="contact-form-box">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    value={contact.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <small className="form-text text-danger">{errors.name}</small>}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={contact.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <small className="form-text text-danger">{errors.email}</small>}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="number"
                    placeholder="Phone number"
                    className="form-control"
                    value={contact.number}
                    onChange={handleChange}
                    required
                  />
                  {errors.number && <small className="form-text text-danger">{errors.number}</small>}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="form-control"
                    value={contact.subject}
                    onChange={handleChange}
                    required
                  />
                  {errors.subject && <small className="form-text text-danger">{errors.subject}</small>}
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    name="text"
                    cols="30"
                    rows="6"
                    placeholder="Write your message..."
                    className="form-control"
                    value={contact.text}
                    onChange={handleChange}
                    required
                  />
                  {errors.text && <small className="form-text text-danger">{errors.text}</small>}
                </div>
              </div>
              <div className="col-lg-12 col-sm-12">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
