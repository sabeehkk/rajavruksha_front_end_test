import React from "react";
// import ContactForm from "../../components/Projects/form";
import "../../components/Projects/contactform.css";
import ContactForm from "../../components/ContactFrom";

const ContactUs = ({onFormSubmit}) => {
  let ContactClasss="Sylvan-class"
  return (
    <div className="contact-page-new-area">
      <div className="containerss">
        <div className="row align-items-center">
          <div className="col-lg-12 pt-1" style={{ height:'532px'}}>
            <div className="contact-new-form ">
              <div className="site-new-heading" data-aos="fade-up">
                {/* <h3 className="sub-title">Request a Quote</h3> */}
                <h2 className="sub-title">Get A Free Quotes</h2>
              </div>
              <ContactForm ContactClasss={ContactClasss} />
              {/* <ContactForm  isMessageSent={ima/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
