import React, { useEffect, useState, useRef } from "react";
import Loader from "../Loader/loader";
import "./jobCareer.css";
import ReCAPTCHA from "react-google-recaptcha";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_no: "",
    file: null,
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCaptcha = (value) => {
    if (value) {
      setCaptchaVerified(true); // Captcha is valid
    } else {
      setCaptchaVerified(false); // Captcha failed
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["application/pdf"]; // PDF
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file) {
      if (!allowedTypes.includes(file.type)) {
        setErrors({ file: "Only PDF is allowed." });
      } else if (file.size > maxSize) {
        setErrors({ file: "File size must not exceed 5MB." });
      } else {
        setErrors({ file: "" });
        setFormData({ ...formData, file });
      }
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Only 10 digits
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};
    if (!formData.name) formErrors.name = "Enter the name";
    // if (!formData.email) formErrors.email = "Please enter a valid email.";
    if (!formData.email) {
      formErrors.email = "Enter your email address";
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
    }
    if (!formData.contact_no) {
      formErrors.contact_no = "Enter your phone number.";
    } else if (!validatePhoneNumber(formData.contact_no)) {
      formErrors.contact_no = "Phone number must be 10 digits.";
    }
    // if (!formData.contact_no)
    //   formErrors.contact_no = "Please enter a phone number.";
    if (!formData.file) formErrors.file = "Please upload a file.";
    if (!captchaVerified) {
      alert("Please complete the reCAPTCHA.");
      return;
    }
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      try {
        const formDataToSubmit = new FormData();
        formDataToSubmit.append("name", formData.name);
        formDataToSubmit.append("email", formData.email);
        formDataToSubmit.append("contact_no", formData.contact_no);
        formDataToSubmit.append("file", formData.file);

        const response = await fetch(
          "https://rajavruksha-server.vercel.app/careerForm",
          {
            // const response = await fetch("http://localhost:3000/careerForm", {
            method: "POST",
            body: formDataToSubmit,
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Form submitted successfully", data);
          alert("Form Submitted Successfully");
          setFormData({
            name: "",
            email: "",
            contact_no: "",
            file: null,
          });
          fileInputRef.current.value = null;
        } else {
          console.error("Form submission failed", response.statusText);
          alert("form submission failed.Please try again.");
        }
      } catch (error) {
        console.error("An error occurred during form submission", error);
        alert("An error occurred.Please try again.");
        setFormData({
          name: "",
          email: "",
          contact_no: "",
          file: null,
        });
        fileInputRef.current.value = null;
      } finally {
        setIsLoading(false);
      }
    }
  };
  //hhhhhh

  return (
    <section className="containers">
      {isLoading && <Loader />}
      <div className="job-description" data-aos="fade-right">
        <h2>BUSINESS DEVELOPMENT EXECUTIVE</h2>
        <h4>Job Role Description</h4>
        <p>
          The Business Development Executive will be responsible for new
          business development and overall business growth. Duties will include
          identifying new business opportunities, building and maintaining
          client relationships, developing and executing sales strategies, and
          providing excellent customer service and support.
        </p>
        <h4>Qualifications</h4>
        <p>MBA in Marketing</p>
        <h4>Skills</h4>
        <ul className="list-methods">
          <li>New Business Development & Lead Generation.</li>
          <li>Excellent Communication.</li>
          <li>Proven track record in meeting and exceeding sales targets.</li>
          <li>Ability to work independently and as part of a team.</li>
          <li>Strong problem-solving and decision-making skills.</li>
          <li>
            Positive attitude and willingness to learn and adapt to new
            challenges.
          </li>
          <li>Experience in the real estate is a plus.</li>
          <li>Four wheeler driving mandatory for Male candidates.</li>
          <li>
            Candidates with multiple linguistic proficiency are preferred.
          </li>
        </ul>
        <h4>Experience</h4>
        <p>1-2 Years</p>
        <h4>Salary</h4>
        <p>15K-30K</p>
      </div>
      <form
        className="career-form"
        data-aos="fade-left"
        onSubmit={handleSubmit}
        enctype="multipart/form-data"
      >
        <h2>Career Form</h2>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="contact_no"
            placeholder="Phone no"
            value={formData.contact_no}
            onChange={handleChange}
          />
          {errors.contact_no && (
            <span className="error">{errors.contact_no}</span>
          )}
        </div>

        {/* <div className="form" style={{ marginLeft: "1rem" }}>
          <label htmlFor="file">Upload CV *</label>
          <input
            type="file"
            id="file"
            name="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf"
            className="input-bde"
          />
          <p style={{ fontSize: "0.6rem", color: "red", marginTop: "-1rem" }}>
            * Please upload a file with the following format:{" "}
            <strong>.pdf</strong>. The file size should not exceed{" "}
            <strong>5MB</strong>.
          </p>
          {errors.file && (
            <span
              className="error"
              style={{ marginLeft: "0rem", marginTop: "-13px" }}
            >
              {errors.file}
            </span>
          )}
        </div> */}
        <div className="form" style={{ marginLeft: "1rem" }}>
          <div style={{ display: "block", marginBottom: "0.5rem" }}>
            Upload CV *
          </div>

          <label
            htmlFor="file"
            className="choose-file"
            style={{ cursor: "pointer" }}
          >
            Choose File
          </label>

          <input
            type="file"
            id="file"
            name="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf"
            className="input-bde"
            style={{
              display: "none", // Hide the input element, use the label as the button
            }}
          />

          <div
            style={{
              display: "inline-block", // Ensure the text is inline with the button
              marginLeft: "0.5rem", // Add some space between the button and the text
              fontSize: "0.8rem",
              color: "#333",
            }}
          >
            {formData.file ? (
              <>
                <strong>File selected: </strong>
                {formData.file.name}
              </>
            ) : (
              "No file chosen"
            )}
          </div>

          <p style={{ fontSize: "0.6rem", color: "red", marginTop: "0.5rem" }}>
            * Please upload a file with the following format:{" "}
            <strong>.pdf</strong>. The file size should not exceed{" "}
            <strong>5MB</strong>.
          </p>

          {errors.file && (
            <span
              className="error"
              style={{
                display: "block",
                color: "red",
                marginTop: "0.5rem",
              }}
            >
              {errors.file}
            </span>
          )}
        </div>

        <div className="form-group" style={{ marginLeft: "1rem" }}>
          {/* <input type="checkbox" id="consent" required />  */}
          <ReCAPTCHA
                sitekey="6Lfx3o8qAAAAAA55HZyjYxM2KDniMChH5zjBke1v"
                onChange={handleCaptcha}
              />
          <label htmlFor="consent">
            I hereby authorize Rajavruksha Realtors Pvt Ltd to contact me via
            phone and email regarding my enquiry. I understand that this
            communication may include follow-up calls, emails, and other
            messages to assist with my enquiry and provide further information
            about your services. This will override the registry on DND/NDNC.
          </label>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default CareerForm;
