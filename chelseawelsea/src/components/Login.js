import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from 'react';
import Hint from './Hint.js';
import Message from './Message.js';
export default function Login() {
    const [text, setText] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [isLoginVisible, setLoginVisible] = useState(true);
    const [isMessageVisible, setMessageVisible] = useState(false);
    const handleUserClick = () => {
        setText("A good boy");
        setIsVisible(true);
    }
    const handlePassClick = () => {
        setText("il_v_yo_");
        setIsVisible(true);
    }

    const handleCloseClick = (e) => {
        setIsVisible(false);
    }

    
    const handleFadeOut = () => {
        setLoginVisible(false);
        setTimeout(() => {
            setMessageVisible(true);
          }, 500);
    };

    return (
        <div className="h-full">
            <AnimatePresence>
                {isLoginVisible && <motion.div key="login" className="h-full flex flex-col justify-center items-center"
                initial={{opacity: 0}}
                animate={{ opacity: 1}}
                exit={{opacity: 0}}
                transition={{ duration: 0.5 }}
                onAnimationComplete={() => setIsVisible(false)}
                >
                    <AnimatePresence>
                        {isVisible && <Hint key="hint" text={text} isVisible={isVisible} onCloseBackdrop={handleCloseClick}/>}
                    </AnimatePresence>
                    <div className="border 1px solid flex flex-col justify-center items-center w-11/12 h-full">
                        <h1 className='text-4xl text-[#800020]'>Login</h1>
                        <div className="flex flex-col w-9/12 my-5">
                            <label for="name" className="text-lg text-[#800020] font-bold">Username:</label>
                            <input type="text" id="name" name="name" className="rounded-lg bg-[#F0F0F0] border-2 border-[#CCCCCC] py-2 focus:border-blue-500"/>
                        </div>
                        <div className="flex flex-col w-9/12 my-5">
                            <label for="name" className="text-lg text-[#800020] font-bold">Password:</label>
                            <input type="password" id="pass" name="pass" className="rounded-lg bg-[#F0F0F0] border-2 border-[#CCCCCC] py-2"/>
                        </div>
                        <motion.button 
                        className="px-5 py-2 bg-[#800020] text-white mt-5 rounded-md w-9/12 shadow-sm shadow-[#F28CB6] shadow-md shadow-[#EB478A]"
                        whileHover={{scale:1.1, color: '#FF5733', backgroundColor: '#FFFFFF'}}
                        whileTap={{scale:0.9}}
                        onClick={handleFadeOut}
                        >
                            Login
                        </motion.button>
                        <div className="flex flex-col">
                            <p className="hover:cursor-pointer mt-3" onClick={handleUserClick}>Forgot Username?</p>
                            <p className="hover:cursor-pointer mt-1" onClick={handlePassClick}>Forgot Password?</p>
                        </div>
                    </div>
                </motion.div>
                }
            </AnimatePresence>
            {isMessageVisible && <Message/>}
        </div>
    );
  }