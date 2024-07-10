import React, { useContext, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { bouncy } from 'ldrs';
import { ThemeContext } from '../../context/ThemeContext';

bouncy.register();

const LoaderIcon = ({ size, speed, color }) => {
    return <l-bouncy size={size} speed={speed} color={color} />;
};

export default function PreLoader() {
    const screenControls = useAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const textControls = [useAnimation(), useAnimation(), useAnimation()];
    const { dark } = useContext(ThemeContext);

    useEffect(() => {
        let isMounted = true;

        const sequence = async () => {
            const textAppearDuration = 0.3;
            const textAppearStagger = 0.2;
            const textDisappearDuration = 0.3;
            const textDisappearStagger = 0.3;
            const pauseAfterTextAppear = 0.4;
            const pauseAfterTextDisappear = 0.3;
            const screenSlideDuration = 1;

            for (let i = 0; i < textControls.length; i++) {
                if (!isMounted) return;
                await textControls[i].start({
                    opacity: 1,
                    y: 0,
                    transition: { duration: textAppearDuration, ease: 'easeOut' },
                });
                await new Promise((resolve) => setTimeout(resolve, textAppearStagger * 1000));
            }

            if (!isMounted) return;
            await new Promise((resolve) => setTimeout(resolve, pauseAfterTextAppear * 1000));

            for (let i = 0; i < textControls.length; i++) {
                if (!isMounted) return;
                await textControls[i].start({
                    opacity: 0,
                    y: -70,
                    transition: { duration: textDisappearDuration, ease: 'easeOut' },
                });
                await new Promise((resolve) => setTimeout(resolve, textDisappearStagger * 1000));
            }

            if (!isMounted) return;
            await new Promise((resolve) => setTimeout(resolve, pauseAfterTextDisappear * 1000));

            if (!isMounted) return;
            await screenControls.start({
                transition: { duration: screenSlideDuration, ease: 'easeOut' },
            });

            document.body.style.overflowY = 'scroll';
        };

        document.body.style.overflowY = 'hidden';
        sequence();

        return () => {
            isMounted = false;
        };
    }, [textControls, screenControls]);

    return (
        <motion.div
            className='preloader transition-colors flex-col h-screen w-screen dark:bg-black bg-white  dark:text-white text-black fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center overflow-hidden'
            initial={{ opacity: 1 }}
            animate={screenControls}
        >
            <div className='texts-container flex items-center h-[60px]  sm:text-2xl xl:text-3xl text-lg font-bold overflow-hidden dark:text-white text-black'>
                <motion.span animate={textControls[0]} initial={{ opacity: 0, y: 70 }}>
                    Welcome To
                </motion.span>
                <motion.span animate={textControls[1]} initial={{ opacity: 0, y: 70 }}>
                    <span className='text-transparent pointer-events-nonez'>a</span>
                    Portfolio
                </motion.span>
                <motion.span animate={textControls[2]} initial={{ opacity: 0, y: 70 }}>
                    <span className='text-transparent pointer-events-none'>a</span>
                    Doan Hai Duy ಠ‿↼
                </motion.span>
            </div>
            <motion.div
                className='mt-4 dark:text-white text-black'
                initial='hidden'
                onEnded='hidden'
                whileInView={'show'}
                transition={{ duration: 4, ease: 'linear' }}
            >
                <LoaderIcon size='40' speed='1' color={!dark ? 'black' : 'white'} />
            </motion.div>
        </motion.div>
    );
}
