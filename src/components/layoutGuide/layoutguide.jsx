import React from 'react'
import "../../components/layoutGuide/layoutguide.css"


function Layoutguide() {
  return (
    <div className='layout-container'>
        <div className=''>
            <h1  className='layout-title'>Crafting Exquisite Design :
            Your Layout Guide</h1>
        </div>
        <div >
      <a className='brochure-download' href="https://rajavrukshagroup.in/wp-content/uploads/2024/02/RRPL_Brochure-2.pdf" download="Brochure">
        <button>Download Brochure</button>
      </a>
    </div>
      <div  className="layout-image" >
              <img  width="80%" height="50%" src="https://rajavrukshagroup.in/wp-content/uploads/2024/02/l-plan-NEW-1-2000x2048.jpg" alt="layout-image" />
        </div>
    </div>
  )
}

export default Layoutguide
