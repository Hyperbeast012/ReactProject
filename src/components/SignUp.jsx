import React from 'react';

function SignUp() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-gray-700 md:ml-8">
          <h3 className="font-inter text-xl md:text-4xl font-thin leading-tight mb-4 md:mb-0">Sign up and get exclusive <br /> special deals</h3>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <input type="email" className="w-full md:w-72 h-12 rounded-l-lg border border-gray-300 bg-white outline-none px-4 mb-4 md:mb-0 md:mr-4" placeholder="Your email" />
          <button className="w-full md:w-28 h-12 rounded-r-lg bg-blue-500 text-white">Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default SignUp;
