import React from 'react';

function Footer() {
  return (
    <>
      <div className="footer-container bg-gray-800 px-4 py-8 md:px-10 lg:px-20 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="left">
            <h1 className="text-white text-base font-medium mb-4 md:mb-0">CATEGORIES</h1>
            <ul className="mt-2 md:mt-0">
              <li className="text-gray-400 text-sm">Web Builder</li>
              <li className="text-gray-400 text-sm">Hosting</li>
              <li className="text-gray-400 text-sm">Data Center</li>
              <li className="text-gray-400 text-sm">Robotic-Automation</li>
            </ul>
          </div>
          <div className="center">
            <h1 className="text-white text-base font-medium mb-4 md:mb-0">CONTACT</h1>
            <ul className="mt-2 md:mt-0">
              <li className="text-gray-400 text-sm">Contact</li>
              <li className="text-gray-400 text-sm">Privacy Policy</li>
              <li className="text-gray-400 text-sm">Terms Of Service</li>
              <li className="text-gray-400 text-sm">Categories</li>
              <li className="text-gray-400 text-sm">About</li>
            </ul>
          </div>
          <div className="right flex items-center">
            <h3 className="text-gray-400 text-sm">United States</h3>
            <img src="../public/images/arrow-down-sign-to-navigate.png" alt="" className="w-4 h-4 ml-2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
