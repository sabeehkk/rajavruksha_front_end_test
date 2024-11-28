import React, { useState } from "react";
import "../../components/layoutGuide/layoutguide.css";
import ContactModal from "../Modal/contactModal"; // Adjust the path as necessary

function Layoutguide() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleDownloadBrochure = () => {
    window.open(
      "https://rajavrukshagroup.in/wp-content/uploads/2024/02/RRPL_Brochure-2.pdf",
      "_blank"
    );
  };

  return (
    <div className="layout-container">
      <div className="">
        <h1 className="layout-title">
          Crafting Exquisite Design : Your Layout Guide
        </h1>
      </div>
      <div>
        <button className="brochure-download" onClick={handleOpenModal}>
          Download Brochure
        </button>
      </div>
      <div className="layout-image">
        <img
          width="80%"
          height="50%"
          src="https://rajavrukshagroup.in/wp-content/uploads/2024/02/l-plan-NEW-1-2000x2048.jpg"
          alt="layout-image"
        />
      </div>

      {/* Modal Component */}
      {showModal && (
        <ContactModal
          show={showModal}
          handleClose={handleCloseModal}
          onSubmitSuccess={handleDownloadBrochure}
        />
      )}
    </div>
  );
}

export default Layoutguide;
