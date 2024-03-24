/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { app } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import Lottie from 'lottie-react';
import logo from "../../assets/IIT.png"
import { motion } from 'framer-motion';
import animation from "../../assets/ani2.json";

export default function Authenticator({ userOnBoard }) {
  const [user, setUser] = useState();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleAuthenticatorClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      const domain = result.user.email.split("@")[1];
      console.log(domain);
      if (domain === "iit.ac.lk" || domain === "gmail.com") {
        setUser(result.user);
      } else {
        setErrorMessage("Please use your IIT email to login!");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to sign in. Please try again later.");
    }
  };

  console.log(user);

  useEffect(() => {
    if (user) userOnBoard(user);
  }, [user, userOnBoard]);

  return (
    <>
      {/* <div className="w-full bg-stone-200"></div> */}
      <div className="bg-white w-full h-[50vh]"></div>
      <div className="bg-[#D9D9D9] w-full h-[50vh]"></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "80vh",
          // backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          // opacity: "0.8",
        }}
      >
      
      <div className=''>
        <motion.section
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className='pt-[370px] mt-[230px]'
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
            className=' mt-[-590px] relative '
          >
            <div className="flex w-[100%] max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-lg dark:bg-[#3e697a] lg:max-w-4xl">
              <div className="hidden w-[40%] bg-cover lg:block mt-[15%] ml-10 ">
                <Lottie animationData={animation} />
              </div>
              <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <div className="flex justify-center mx-auto">
                  <img className="w-[25%] h-[15%] " src={logo} alt="" />
                </div>
                <p className="mt-[2%] mb-[2%] text-xl text-center text-white m ">Welcome back!</p>
                <Button
            color="secondary"
            sx={{
              margin: "auto",
              marginTop: "10%",
              backgroundColor: "#4bc4bc",
              color: "rgb(255, 255, 255)",
              padding: "10px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              border: "none",
              outline: "none",
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
              display: "block",
              ":hover": {
                backgroundColor: "#D9D9D9",
                color: "black",
              },
            }}
            onClick={handleAuthenticatorClick}
          >
            <div className="flex font-medium hover:text-black">
              <p>LOGIN WITH GOOGLE</p>
            </div>
          </Button>
                
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
                  <button onClick={handleAuthenticatorClick} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                   Log In
                  </button>
                </div>
                
                
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
      </div>
    </>
  );
}
