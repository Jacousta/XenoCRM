import React from 'react';
import '../styles/Pricing.css';
import {Link as RouterLink} from 'react-router-dom'

const Pricing = () => {
  return (
    <div id='Pricing' className="pricing-section">
      <h1 className="text-4xl font-bold">Everything You Need In One Platform
      </h1>
      <h4 className="text-2xl my-6">Xeno is an end-to-end complete CRM solution designed specially for retail, built to maximize</h4>
      <div className="pricing-grid">
        <div className="pricing-box">
          <h4>Deep customer understanding</h4>
          <p>Consolidate all customer information into one easy-to-use system for a complete view of your audience for a deeper customer understanding</p>
          <div className="price">$0</div>
          <ul>
            <li>✔ Contact Management</li>
            <li>✔ Email Integration</li>
            <li>✔ Task Tracking</li>
            <li>✔ Basic Reporting</li>
          </ul>
          <RouterLink to="/register"><button className="pricing-button">Continue with Free</button></RouterLink>
        </div>
        <div className="pricing-box">
          <h4>Marketing Campaigns at scale</h4>
          <p>Drive customer engagement and conversions by running hyper-personalized marketing campaigns at scale across popular channels like Facebook, Instagram, WhatsApp, and email.</p>
          <div className="price">$29</div>
          <ul>
            <li>✔ All features of FREE plan</li>
            <li>✔ Customizable Dashboards</li>
            <li>✔ Sales Pipeline Management</li>
            <li>✔ Email Campaigns</li>
            <li>✔ Advanced Reporting</li>
          </ul>
          <RouterLink to="/register"><button className="pricing-button">Try the Basic plan</button></RouterLink>
        </div>
        <div className="pricing-box">
          <h4>Actionable Data-Driven Insights & Analytics</h4>
          <p>Transform data into actionable insights, make data-driven marketing decisions, set relevant KPIs, and optimize your marketing campaigns through real-time tracking.</p>
          <div className="price">$59</div>
          <ul>
            <li>✔ All features of BASIC plan</li>
            <li>✔ Automation Workflows</li>
            <li>✔ Custom Fields and Tags</li>
            <li>✔ Integration with Third-Party Apps</li>
            <li>✔ Dedicated Customer Support</li>
          </ul>
          <RouterLink to="/register"><button className="pricing-button">Try the PRO plan</button></RouterLink>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
