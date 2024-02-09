import { motion } from "framer-motion";
import React, { useState } from 'react';

export default function Hint(props) {

    return (
        <div className="backdrop-blur-md backdrop-opacity-60 bg-black/30 absolute w-full h-screen flex justify-center items-center" onClick={props.onCloseBackdrop}>
            <motion.div className="bg-white w-1/4 h-1/4 rounded-md flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-xl">Hint:</h2>
                    <p>{props.text}</p>
                </div>
            </motion.div>
        </div>
    );
}