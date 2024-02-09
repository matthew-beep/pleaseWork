import { motion } from "framer-motion";
import React, { useState } from 'react';
import Hint from './Hint.js';
export default function Login() {
    const [text, setText] = useState("");
    const [isVisible, setIsVisible] = useState(false);
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

    console.log(text);
    console.log(isVisible);
    return (
        <div className="h-full flex flex-col justify-center items-center border 1px solid">
            {isVisible && <Hint text={text} isVisible={isVisible} onCloseBackdrop={handleCloseClick}/>}
            <div className="border 1px solid flex flex-col justify-center items-center w-11/12 h-full">
                <h1 className='text-4xl text-[#800020] border 1px solid'>Login</h1>
                <div className="flex flex-col w-9/12 my-5">
                    <label for="name" className="text-lg text-[#800020] font-bold">Username:</label>
                    <input type="text" id="name" name="name" className="rounded-lg bg-[#F0F0F0] border-2 border-[#CCCCCC] py-2 focus:border-blue-500"/>
                </div>
                <div className="flex flex-col w-9/12 my-5">
                    <label for="name" className="text-lg text-[#800020] font-bold">Password:</label>
                    <input type="password" id="pass" name="pass" className="rounded-lg bg-[#F0F0F0] border-2 border-[#CCCCCC] py-2"/>
                </div>
                <motion.button 
                className="px-5 py-2 bg-[#800020] text-white mt-5 rounded-md"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                >
                    Login</motion.button>
                <div className="flex flex-col">
                    <p className="hover:cursor-pointer" onClick={handleUserClick}>Forgot Username?</p>
                    <p className="hover:cursor-pointer" onClick={handlePassClick}>Forgot Password?</p>
                </div>
            </div>
            
        </div>
    );
  }