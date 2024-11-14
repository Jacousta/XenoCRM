import React from 'react';
import '../styles/Info.css';
import { Link } from 'react-scroll';

const Info = () => {
  return (
    <div className="info-section">
      <div className="info-content">
        <div className="info-text">
          <h2 className="info-heading">CRM Solution for Retail</h2>
          <p>
          A retail-focused CRM powerhouse for effortless Personalisation
          </p>
          <Link
            activeClass="active"
            to="faq-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className="info-button">Learn More</button>
          </Link>
        </div>
        <div className="info-image">
          <img src="crm-frontend/src/assets/info.png" alt="CRM Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Info;