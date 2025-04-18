import React from 'react';
import CatTyping from '../CatTyping';
import { fadeIn } from '../../variants';
import { motion } from 'framer-motion';

function End(props) {
    return (
        <div
            className='flex xl:px-[15%] md:px-[8%] px-[20px] items-center justify-center gap-[20px] gap-y-[40px] py-[80px] min-h-screen dark:text-white bg-[#f9f9f9] dark:bg-black transition-colors'
            id='the-end'
        >
            {/* <div className='-rotate-90 lg:mr-[80px] md:block hidden opacity-0'>
                <h3 className=' text-[34px] font-semibold'>Projects</h3>
                <div className='w-12 h-1 bg-orange-500'></div>
            </div> */}
            <div className=''>
                <div>
                    <motion.h2
                        variants={fadeIn('right', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.4 }}
                        className='text-6xl font-semibold text-orange-600 uppercase'
                    >
                        The End
                    </motion.h2>
                    <motion.p
                        variants={fadeIn('left', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.4 }}
                        className='my-4 text-[22px]'
                    >
                        Finally, I would like to say <strong className='text-orange-500'>"Thank You"</strong> for spent
                        time to look at my CV profile.
                    </motion.p>
                    <motion.p
                        variants={fadeIn('right', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.4 }}
                        className='text-[22px]'
                    >
                        You're a flower on earth, let's make your life beautiful and meaningful{' '}
                        <strong className='text-orange-500'>(◕‿↼)</strong>.
                    </motion.p>
                </div>
                <CatTyping />
            </div>
        </div>
    );
}

export default End;
