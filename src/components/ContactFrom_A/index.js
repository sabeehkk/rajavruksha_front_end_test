import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, FormHelperText } from "@mui/material";
import "./style.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    lastname: "",
    notes: "",
    phone_no: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    subject: "",
    lastname: "",
    notes: "",
    phone_no: "",
  });

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Handle input changes and clear errors
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear the error for that specific field
    setError((prevError) => ({
      ...prevError,
      [name]: "",
    }));
  };

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    let formErrors = { ...error };
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
    setError(formErrors);
    const hasErrors = Object.values(formErrors).some((err) => err !== "");
    if (hasErrors) return;
    try {
      console.log("Preparing to send request to backend...");

      const response = await fetch(
        "https://rajavruksha-server.vercel.app/contact",
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
        alert("Your message has been sent successfully!");
        setFormData({
          name: "",
          lastname: "",
          email: "",
          subject: "",
          notes: "",
          phone_no: "",
        });

        setError({
          name: "",
          email: "",
          subject: "",
          lastname: "",
          notes: "",
          phone_no: "",
        });
      } else {
        alert("There was an error sending the message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem with the server.");
    }
  };

  return (
    <div className="contact-form-height">
      <form onSubmit={submitHandler} className="form">
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              width: {
                xs: "50%",
                sm: "80%",
                md: "80%",
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
                <FormHelperText error>{error.name}</FormHelperText>
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
                <FormHelperText error>{error.lastname}</FormHelperText>
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
                <FormHelperText error>{error.email}</FormHelperText>
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
                <FormHelperText error>{error.phone_no}</FormHelperText>
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
                <FormHelperText error>{error.subject}</FormHelperText>
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
                rows={4}
                fullWidth
                error={!!error.notes}
              />
              {error.notes && (
                <FormHelperText error>{error.notes}</FormHelperText>
              )}
            </Grid>
          </Grid>
          {/* Submit Button */}
        </Box>
        <div className="contact-button mb-5">
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
