import { motion } from "framer-motion";
import React, { useState } from 'react';
import video from '../img/Cats.mp4';

export default function Yes(props) {

    return (
        <div className="backdrop-blur-md backdrop-opacity-60 bg-black/30 absolute w-full h-screen flex justify-center items-center" onClick={props.onCloseBackdrop}>
            <motion.div className="bg-white w-3/4 h-1/4 rounded-md flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{duration: 0.1}}
            >
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-xl mt-5">February 17th, a preview:</h2>
                    <video className="w-full h-1/2"controls>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </motion.div>
        </div>
    );
}