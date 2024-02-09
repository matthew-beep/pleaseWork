import { motion } from "framer-motion";
import React, { useState } from 'react';
import gif from '../img/valentines-day-icegif-27.gif';

export default function Hint(props) {
    const [position, setPosition] = useState({ left: 0, top: 0 });
    const [message, setMessage] = useState(false);
    const [gif, setGif] = useState(false);
    const maxWidth = 100; // Adjust as needed
    const maxHeight = 200;

    const getRandomPosition = () => {
        const newPosition = {
          left: Math.random() * maxWidth, // Adjust as needed
          top: Math.random() * maxHeight,   // Adjust as needed
        };

        setPosition(newPosition);
        
    };

    const ask = () => {
        setMessage(true);
    }

    const gifVisible = () => {
        setGif(true);
    }

    let askOut = "Will you be my Valentine?";
    return (
        <div className="h-full w-full flex flex-col justify-around px-5 items-center py-8 border-2">
            <motion.h1 className="font-bold text-5xl text-[#800020] mt-100 border-2"
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            onAnimationComplete={ask}
            >
                Chelsea Caranto
            </motion.h1>
            {gif &&  (<motion.div
            className="flex justify-center"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            >
                <img className="w-2/12 h-2/12"src={require('../img/valentines-day-icegif-27.gif')} alt="GIF" />
            </motion.div>)}
            {message && (
                <p>
                    {askOut.split(" ").map((el, i) => (
                        <motion.span className="text-3xl text-[#800020]"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{
                                duration: 2,
                                delay: i / 5
                            }}
                            key={i}
                            onAnimationComplete={gifVisible}
                        >
                            {el}{" "}
                        </motion.span>
                    ))}
                </p>
            )}
            <div className="flex w-11/12 justify-between">
                <motion.button className="w-full mr-2 px-5 py-2 bg-[#800020] text-white mt-5 rounded-md"
                whileHover={{color: '#FF5733', backgroundColor: '#FFFFFF'}}
                whileTap={{scale:0.9}}
                >Yes</motion.button>
                <motion.button
                className="w-full ml-2 px-5 py-2 bg-[#800020] text-white mt-5 rounded-md"
                onClick={getRandomPosition}
                animate={{ x: position.left, y: position.top }}
                whileHover={{color: '#FF5733', backgroundColor: '#FFFFFF'}}
                whileTap={{scale:0.9}}
                transition={{ duration: 0.5 }}
                >
                No
                </motion.button>
            </div>
        </div>
    )
}