import React, { useState } from "react";
import emailjs from "emailjs-com"; // Make sure to install emailjs-com

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState(""); // State for status message
  const [loading, setLoading] = useState(false); // State for loading spinner

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    setLoading(true); // Show spinner

    const Service_id = 'service_0tybekd';
    const Template_id = 'template_errwnro';
    const User_id = 'KeEjWdjaLObPgba_Q';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Hasnain Pali",
      message: formData.message
    };

    emailjs.send(Service_id, Template_id, templateParams, User_id)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setFormData({
          name: "",
          email: "",
          message: ""
        });
        setStatusMessage("Email sent successfully!");
        setLoading(false); // Hide spinner
        setTimeout(() => {
          setStatusMessage(""); // Hide message after 2 seconds
        }, 3000);
    
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatusMessage("Error sending email. Please try again.");
        setLoading(false); // Hide spinner
        setTimeout(() => {
          setStatusMessage(""); // Hide message after 2 seconds
        }, 3000);
      });
  };

  return (
    <div>
      <h1 className="text-white text-center pt-5" id="contact">
        Contact <span style={{color:"#ffbd39"}}> Me </span>
      </h1>
      <section className="contact_us">
        <div className="contact_inner pt-5">
          <form className="contact_field" onSubmit={handleSubmit}>
            <h3>Contact Us</h3>
            <input
              type="text"
              id="name"
              className="form-control form-group"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              className="form-control form-group"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              className="form-control form-group"
              placeholder="Type your Message"
              id="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="contact_form_submit">
              {loading ? (
                <span className="spinner-border"></span> // Show spinner
              ) : (
                "Send"
              )}
            </button>
            {statusMessage && (
            <div className="text-white fs-3 my-3">
              {statusMessage}
            </div>
          )}
          </form>
         
          <div className="contact_info_sec">
            <h4>Contact Info</h4>
            <div className="d-flex w-100 info_single align-items-center mb-3">
              <i className="bi bi-telephone icon"></i>
              <a href="tel://923332830600">+92 3332830600</a>
            </div>
            <div className="d-flex w-100 info_single align-items-center mb-3">
              <i className="bi bi-envelope icon"></i>
              <a href="mailto:hasnainpali321@gmail.com">
                hasnainpali321@gmail.com
              </a>
            </div>
            <div className="d-flex w-100 info_single align-items-center mb-3">
              <i className="bi bi-geo-alt-fill icon"></i>
              <span>Nishter Road Karachi, PK</span>
            </div>
            <div className="soical-icon">
              <ul className="">
                <li>
                  <a href="#">
                    <i className="bi bi-facebook icon"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/hasnain-frontend-developer/">
                    <i className="bi bi-linkedin icon"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Hasnainpali?tab=repositories">
                    <i className="bi bi-github icon"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-instagram icon"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
