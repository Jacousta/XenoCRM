import React from 'react';
import '../styles/Info.css';
import { Link } from 'react-scroll';
import crmImg from '../assets/info.png'

const Info = () => {
  return (
    <div id='about' className=" info-section">
      <div className="mt-28 info-content">
        <div className="">
          <h2 className="text-6xl">CRM Solution for Retail</h2>
          <p className='text-xl'>
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
          <img src={crmImg} className='ml-8 w-[550px] h-96' alt="CRM Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Info;