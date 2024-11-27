import React, { useEffect, useState, useRef } from "react";
import "./jobCareer.css";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_no: "",
    file: null,
  });
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};
    if (!formData.name) formErrors.name = "Enter the name";
    if (!formData.email) formErrors.email = "Please enter a valid email.";
    if (!formData.contact_no)
      formErrors.contact_no = "Please enter a phone number.";
    if (!formData.file) formErrors.file = "Please upload a file.";

    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      try {
        const formDataToSubmit = new FormData();
        formDataToSubmit.append("name", formData.name);
        formDataToSubmit.append("email", formData.email);
        formDataToSubmit.append("contact_no", formData.contact_no);
        formDataToSubmit.append("file", formData.file);

        const response = await fetch("https://rajavruksha-server.vercel.app/careerForm", {
        // const response = await fetch("http://localhost:3000/careerForm", {
          method: "POST",
          body: formDataToSubmit,
        });

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
        }
      } catch (error) {
        console.error("An error occurred during form submission", error);
      }
    }
  };

  return (
    <section className="containers">
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

        <div className="form" style={{ marginLeft: "1rem" }}>
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
        </div>

        <div className="form-group" style={{ marginLeft: "1rem" }}>
          {/* <input type="checkbox" id="consent" required /> */}
          <label htmlFor="consent">
            I hereby authorize Rajavruksha Realtors Pvt Ltd to contact me via
            phone and email regarding my enquiry. I understand that this
            communication may include follow-up calls, emails, and other
            messages to assist with my enquiry and provide further information
            about your services. This will override the registry on DND/NDNC.
          </label>
        </div>
        <button  type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default CareerForm;
