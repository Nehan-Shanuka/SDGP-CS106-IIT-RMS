import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animation from "../../assets/ani2.json";
import logo from "../../assets/IIT_LOGO.png";

const SigninForme = () => {
 const [errorMessage, setErrorMessage] = useState(''); // State for error message

 function handleCallbackResponse(response) {
    // Your existing logic here
 }

 useEffect(() => {
    // Initialize Google Sign-In
    google.accounts.id.initialize({
      client_id: '229476241161-ngjmdat1fqt946hs2nrthmhmtuevr2qo.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });

    const buttonOptions = {
      theme: 'outline',
      size: 'large',
      text: 'Sign in with Google',
      prompt_parent_id: 'dignInDiv',
    };

    google.accounts.id.renderButton(document.getElementById('dignInDiv'), buttonOptions);
 }, []);

 const validateEmailDomain = (email) => {
    const domain = email.split('@')[1]; // Get the domain part of the email
    return domain === 'iit.ac.lk';
 };

 const handleSignIn = () => {
    const email = document.getElementById('LoggingEmailAddress').value;
    if (validateEmailDomain(email)) {
      console.log('Sign in with email:', email);
      setErrorMessage(''); // Clear any previous error message
    } else {
      setErrorMessage('Only iit.ac.lk domain emails are allowed!'); // Set error message
    }
 };

 return (
    <div className=''>
      <motion.section
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className='bg-green-300 pt-[370px] mt-[300px]'
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className=' mt-[-590px] relative '
        >
          <div className="flex w-[60%] max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-green-800 lg:max-w-4xl">
            <div className="hidden w-[40%] bg-cover lg:block mt-[15%] ml-10">
              <Lottie animationData={animation} />
            </div>
            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
              <div className="flex justify-center mx-auto">
                <img className="w-[25%] h-[15%] " src={logo} alt="" />
              </div>
              <p className="mt-[2%] mb-[2%] text-xl text-center text-white m ">Welcome back!</p>
              <div id='dignInDiv'></div>
              <div className="flex items-center justify-between mt-4">
                <hr className='w-[100%] h-5' />
              </div>
              <div className="mt-4">
                <label
                 className="block mb-2 text-sm font-medium text-white "
                 htmlFor="LoggingEmailAddress"
                >
                 Email Address
                </label>
                <input
                 id="LoggingEmailAddress"
                 className="block w-full px-4 py-2 text-white rounded-lg dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                 type="email"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                 <label
                    className="block mb-2 text-sm font-medium text-white "
                    htmlFor="loggingPassword"
                 >
                    Password
                 </label>
                 
                </div>
                <input
                 id="loggingPassword"
                 className="block w-full px-4 py-2 text-black bg-white border rounded-lg dark:text-gray-800 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                 type="password"
                />
              </div>
              <div className="pb-10 mt-6">
                <button onClick={handleSignIn} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                 Sign In
                </button>
              </div>
              {/* Conditionally render the error message */}
              {errorMessage && <div className="mt-4 alert alert-danger" role="alert">{errorMessage}</div>}
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
 );
};

export default SigninForme;
