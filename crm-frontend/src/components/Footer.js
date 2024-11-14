import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
        <img className="w-32 h-32 mx-auto" src='Designer.png' />
        <div className="footer-socials my-8">
          <a href="https://www.instagram.com/akhil_sharma1010/" className="text-2xl fa fa-instagram"></a>
          <a href="https://github.com/Jacousta" className="text-2xl fa fa-github"></a>
          <a href="https://x.com/_Akhil_Pandat_" className="text-2xl fa fa-twitter"></a>
        </div>
        <div className="copyright">Copyright 2024 © Akhil Sharma</div>
    </footer>
  );
};

export default Footer;
