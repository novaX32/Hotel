import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = ({ to, label }) => (
  <Link
    to={to}
    className="block text-blue hover:text-brand transition-colors duration-300"
  >
    {label}
  </Link>
);

const GlobalFooter = () => {
  return (
    <footer className="bg-white-500 text-blue-500 mt-6">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="font-bold text-lg mb-2">Company Info</h4>
            <FooterLink to="/about-us" label="About Us" />
            <FooterLink to="/" label="Contact" />
            <FooterLink to="/" label="Privacy Policy" />
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="font-bold text-lg mb-2">Support</h4>
            <FooterLink to="/" label="FAQs" />
          </div>
        </div>
        <div className="text-center mt-10">
          <p>All Rights Reserved</p>
          <p>&copy; {new Date().getFullYear()} Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
