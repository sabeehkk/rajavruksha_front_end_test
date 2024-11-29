import React from "react";
import "./style.css";
const PrivacyPolicy = () => {
  return (
    <div>
      <div className="row"></div>
      <div className="introduction">
        <p className="para-heading">
          Effective Date :{" "}
          <span style={{ fontStyle: "italic" }}>January 01 2025</span>{" "}
        </p>
        <p className="para-text">
          At Rajavruksha Realtors Pvt. Ltd., we value your privacy and are
          committed to safeguarding your personal information. This Privacy
          Policy outlines how we collect, use, and protect your information when
          you use our website and services.
        </p>
      </div>
      <div className="introduction">
        <p className="para-heading">1. Information We Collect</p>
        <p className="para-text">
          We may collect the following types of information:
        </p>
        <p className="para-text">
          <span>Personal Information:</span> Name, address, contact details,
          email, etc.
        </p>
        <p className="para-text">
          <span>Technical Information:</span> IP address, browser type, device
          information, and usage data.{" "}
        </p>
      </div>
      <div className="introduction">
        <p className="para-heading">2. How We Use Your Information</p>
        <ul className="list-methods">
          <p className="para-text">
            We use the information we collect for the following purposes:
          </p>
          <li className="list-text privacy-points">
            To provide, operate, and maintain our services.
          </li>
          <li className="list-text privacy-points">
            To process transactions and fulfill requests.
          </li>
          <li className="list-text privacy-points">
            To improve the functionality and performance of our website.
          </li>
          <li className="list-text privacy-points">
            To communicate with you regarding updates, promotions, or offers, if
            you have opted-in to receive such communications.
          </li>
        </ul>
      </div>
      <div className="introduction">
        <p className="para-heading">3. Sharing Your Information</p>
        <p className="para-text">
          We do not sell, trade, or rent your personal information to third
          parties. However, we may share your information in the following
          situations:
        </p>
        <p className="para-text">
          <span>Service Providers:</span> We may share your data with trusted
          third-party vendors who assist us in providing our services, such as
          payment processors and marketing partners. These parties are obligated
          to protect your data and may only use it to perform services on our
          behalf.
        </p>
        <p className="para-text">
          <span>Legal Requirements:</span> We may disclose your personal
          information if required to do so by law or in response to a valid
          legal process.
        </p>
      </div>
      <div className="introduction">
        <p className="para-heading">4. Data Security</p>
        <p className="para-text">
          We implement industry-standard security measures to protect your
          personal data. However, no data transmission over the internet is 100%
          secure. While we strive to protect your information, we cannot
          guarantee its absolute security.
        </p>
      </div>
      <div className="introduction">
        <p className="para-heading"> 5. Cookies and Tracking Technologies</p>
        <p className="para-text">
          Our website may use cookies and similar technologies to enhance your
          browsing experience, analyze website traffic, and personalize your
          experience. You can control cookie settings through your browser, but
          disabling cookies may affect certain features of our website.
        </p>
      </div>
      <div className="introduction">
        <p className="para-heading"> 6. Your Rights</p>
        <p className="para-text">You have the right to :</p>
        <p className="para-text">
          <span>Access:</span> Request access to the personal information we
          hold about you.
        </p>
        <p className="para-text">
          <span>Correction:</span>Request corrections to any inaccurate or
          incomplete data.
        </p>{" "}
        <p className="para-text">
          <span>Deletion:</span> Request the deletion of your personal
          information, subject to legal retention requirements.
        </p>{" "}
        <p className="para-text">
          <span>Opt-Out:</span> You may opt-out of receiving promotional
          communications from us at any time by following the unsubscribe
          instructions in our emails.
        </p>
      </div>
      <div className="introduction">
        <p className="para-heading"> 7. Data Retention</p>
        <p className="para-text">
          We retain your personal data only for as long as necessary to fulfill
          the purposes for which it was collected or as required by law.
        </p>
      </div>
      <div className="introduction">
        <p className="para-heading"> 8. Changes to This Privacy Policy</p>
        <p className="para-text">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the revised date will be indicated at the
          top. Please review this policy periodically.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
