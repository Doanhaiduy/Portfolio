import React, { useContext } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { bouncy } from 'ldrs';
import { ThemeContext } from '../../context/ThemeContext';
import DecryptedText from '../DecryptedText/DecryptedText';

bouncy.register();

const LoaderIcon = ({ size, speed, color }) => {
    return <l-bouncy size={size} speed={speed} color={color} />;
};

export default function PreLoader() {
    const screenControls = useAnimation();
    const { dark } = useContext(ThemeContext);

    return (
        <motion.div
            className='preloader transition-colors flex-col h-screen w-screen dark:bg-black bg-[#f9f9f9]  dark:text-white text-black z-50 flex justify-center items-center overflow-hidden'
            initial={{ opacity: 1 }}
            animate={screenControls}
        >
            <div className='texts-container flex items-center h-[60px]  sm:text-2xl xl:text-3xl text-lg font-bold overflow-hidden dark:text-white text-black'>
                <DecryptedText
                    text='Welcome To Portfolio Doan Hai Duy'
                    animateOn='view'
                    speed={50}
                    maxIterations={10}
                    sequential
                />
            </div>
            <motion.div
                className='mt-4 dark:text-white text-black'
                initial='hidden'
                onEnded={() => screenControls.start({ opacity: 0 })}
                whileInView={'show'}
                transition={{ duration: 4, ease: 'linear' }}
            >
                <LoaderIcon size='40' speed='1' color={!dark ? 'black' : 'white'} />
            </motion.div>
        </motion.div>
    );
}
