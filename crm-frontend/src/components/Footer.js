import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
        <img class="footer-logo" src="crm-frontend/public/Designer.png" alt="hi" />
        <div class="footer-socials">
          <a href="https://www.instagram.com/akhil_sharma1010/" class="fa fa-instagram"></a>
          <a href="https://github.com/Jacousta" class="fa fa-github"></a>
          <a href="https://x.com/_Akhil_Pandat_" class="fa fa-twitter"></a>
        </div>
        <div class="copyright">Copyright 2024 © Akhil Sharma</div>
    </footer>
  );
};

export default Footer;
