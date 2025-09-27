// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 border-b border-gray-700 pb-8">
          
          {/*Description */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-xl font-bold mb-4">CS — Ticket System</h4>
            <p className="text-sm text-white my-3 lg:pr-10">
              Having trouble with login, identification, or other access issues? Submit a ticket and our support team will assist you quickly.
            </p>
          </div>
          
          {/* Company */}
          <div>
            <h5 className="font-bold mb-4 text-xl">Company</h5>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Mission</a></li>
              <li><a href="#" className="hover:text-white">Contact Sales</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h5 className="font-bold text-xl mb-4">Services</h5>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="#" className="hover:text-white">Products & Stories</a></li>
              <li><a href="#" className="hover:text-white">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white">Download Apps</a></li>
            </ul>
          </div>
          
          {/* Information */}
          <div className=' md:col-span-1 mt-4 lg:mt-0'>
            <h5 className="font-bold text-xl mb-4">Information</h5>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Join Us</a></li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div className=" md:col-span-1 mt-4 lg:mt-0" >
            <h5 className="font-extrabold text-xl mb-4">Social Links</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-white"><FaFacebook className="mr-2 text-lg" /><span className='hover:text-white'>@CS — Ticket System</span></li>
              <li className="flex items-center text-white"><FaTwitter className="mr-2 text-lg" /><span className='hover:text-white'>@CS — Ticket System</span></li>
              <li className="flex items-center text-white"><FaInstagram className="mr-2 text-lg" /><span className='hover:text-white'>@CS — Ticket System</span></li>
              <li className="flex items-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className='hover:text-white'>support@csit.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-8 text-sm text-white">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;