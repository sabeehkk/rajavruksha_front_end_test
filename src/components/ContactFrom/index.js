import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, FormHelperText } from "@mui/material";
import "./style.css";

const ContactForm = ({ status }) => {
  const [showFullConsentText, setShowFullConsentText] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    lastname: "",
    notes: "",
    phone_no: "",
    consent: false,
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    subject: "",
    lastname: "",
    notes: "",
    phone_no: "",
    consent: "",
  });

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Handle input changes and clear errors
  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear the error for that specific field
    setError((prevError) => ({
      ...prevError,
      [name]: "",
    }));
  };

  const toggleConsentText = () => {
    setShowFullConsentText((prev) => !prev);
  };

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent form reload
    // Step 1: Prepare form errors
    let formErrors = { ...error };
    // Step 2: Validate each field
    if (formData.name === "") formErrors.name = "Please enter name";
    if (formData.email === "") {
      formErrors.email = "Please enter email";
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Please enter a valid email address";
    }
    if (formData.subject === "") formErrors.subject = "Please enter subject";
    if (formData.lastname === "") formErrors.lastname = "Please enter lastname";
    if (formData.notes === "") formErrors.notes = "Please enter note";
    if (formData.phone_no === "") formErrors.phone_no = "Please enter number";
    if (formData.consent === false)
      formErrors.consent = "You must agree to the terms and conditions.";

    // Step 3: Set error state
    setError(formErrors);

    // Step 4: Check if there are errors
    const hasErrors = Object.values(formErrors).some((err) => err !== "");
    if (hasErrors) return; // Stop form submission if there are validation errors

    // Step 5: Proceed with form submission if no errors
    try {
      console.log("Preparing to send request to backend...");

      const response = await fetch(
        "https://rajavruksha-server.vercel.app/contact",
        // "http://localhost:3000/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            lastName: formData.lastname,
            email: formData.email,
            subject: formData.subject,
            message: formData.notes,
            phone_no: formData.phone_no,
          }),
        }
      );

      if (response.ok) {
        // Handle success response
        alert("Your message has been sent successfully!");

        // Reset form data and error state
        setFormData({
          name: "",
          lastname: "",
          email: "",
          subject: "",
          notes: "",
          phone_no: "",
          consent: false,
        });

        setError({
          name: "",
          email: "",
          subject: "",
          lastname: "",
          notes: "",
          phone_no: "",
          consent: false,
        });
      } else {
        // Handle unsuccessful response (server error, etc.)
        alert("There was an error sending the message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem with the server.");
    }
  };

  return (
    <div className="contact-form-height">
      <form onSubmit={submitHandler}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              width: {
                xs: "50%", // For screens smaller than 600px (Mobile)
                sm: "80%", // For screens 600px to 960px (Tablet)
                md: "80%", // For screens 960px and larger (Desktop)
              },
            },
          }}
          noValidate
          autoComplete="off"
        >
          {/* First Name and Last Name in the same row */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="first-name"
                label="First Name"
                variant="standard"
                value={formData.name}
                onChange={changeHandler}
                name="name"
                fullWidth
                error={!!error.name}
              />
              {error.name && (
                <FormHelperText className="error-helper-text" error>
                  {error.name}
                </FormHelperText>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="last-name"
                label="Last Name"
                variant="standard"
                value={formData.lastname}
                onChange={changeHandler}
                name="lastname"
                fullWidth
                error={!!error.lastname}
              />
              {error.lastname && (
                <FormHelperText className="error-helper-text" error>
                  {error.lastname}
                </FormHelperText>
              )}
            </Grid>
          </Grid>

          {/* Email and Phone No in the same row */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                label="Email"
                variant="standard"
                value={formData.email}
                onChange={changeHandler}
                name="email"
                fullWidth
                error={!!error.email}
              />
              {error.email && (
                <FormHelperText className="error-helper-text" error>
                  {error.email}
                </FormHelperText>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="phone-no"
                label="Phone No"
                variant="standard"
                type="number"
                value={formData.phone_no}
                onChange={changeHandler}
                name="phone_no"
                fullWidth
                error={!!error.phone_no}
              />
              {error.phone_no && (
                <FormHelperText className="error-helper-text" error>
                  {error.phone_no}
                </FormHelperText>
              )}
            </Grid>
          </Grid>

          {/* Subject in a new row */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="subject"
                label="Subject"
                variant="standard"
                value={formData.subject}
                onChange={changeHandler}
                name="subject"
                fullWidth
                error={!!error.subject}
              />
              {error.subject && (
                <FormHelperText className="error-helper-text" error>
                  {error.subject}
                </FormHelperText>
              )}
            </Grid>
          </Grid>

          {/* Message in a new row */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="notes"
                label="Notes"
                variant="standard"
                multiline
                name="notes"
                value={formData.notes}
                onChange={changeHandler}
                rows={2}
                fullWidth
                error={!!error.notes}
              />
              {error.notes && (
                <FormHelperText className="error-helper-text" error>
                  {error.notes}
                </FormHelperText>
              )}
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className="consent-cont">
                <div className="consent-checkbox-wrapper">
                  <input
                    className={
                      showFullConsentText ? "consent-more" : "consent-checkbox"
                    }
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent || false}
                    onChange={changeHandler}
                    required
                  />
                </div>

                <div className="consent-label-wrapper">
                  <label htmlFor="consent" className="consent-brief">
                    {showFullConsentText
                      ? `I hereby authorize Rajavruksha Realtors Pvt Ltd to contact me
                  via phone and email regarding my enquiry. I understand that
                  this communication may include follow-up calls, emails, and
                  other messages to assist with my enquiry and provide further
                  information about your services. This will override the
                  registry on DND/NDNC.`
                      : `I hereby authorize Rajavruksha Realtors Pvt Ltd to contact me via phone and email regarding my enquiry..`}
                    <Button
                      size="small"
                      onClick={toggleConsentText}
                      style={{ fontSize: "10px" }}
                    >
                      {showFullConsentText ? "Read Less" : "Read More"}
                    </Button>
                  </label>
                </div>
              </div>
              {error.consent && (
                <FormHelperText className="error-helper-text" error>
                  {error.consent}
                </FormHelperText>
              )}
            </Grid>
          </Grid>

          {/* Submit Button */}
        </Box>
        <div className={status ? "project-contact-button" : "contact-button"}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
