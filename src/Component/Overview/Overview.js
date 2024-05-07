import React from 'react';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CV from '../../DoanHaiDuy_CV.pdf';
function Overview() {
    return (
        <div
            className={` flex md:flex-row flex-col-reverse items-center justify-center xl:px-[15%] md:px-[8%] md:pt-[120px] px-[20px] gap-[20px] gap-y-10  transition-colors  py-[40px] md:h-screen rounded-b-[50px]`}
            id='overview'
        >
            <div className='md:text-left text-center flex-1  xl:ml-[80px] '>
                <div className='flex gap-1 items-center justify-center md:justify-start'>
                    <motion.div
                        variants={fadeIn('up', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.7 }}
                        className=''
                    >
                        <img
                            src='https://img.icons8.com/?size=256&id=dlN23b953qvQ&format=png'
                            alt=''
                            className='h-[80px]'
                        />
                    </motion.div>
                    <motion.div
                        variants={fadeIn('up', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        <div className=''></div>
                        <p className='uppercase font-medium flex items-center gap-2 text-2xl text-gray-700 dark:text-white transition-colors'>
                            <span className='w-1 h-8 bg-orange-500 inline-block '></span> Hi! My name is
                        </p>
                        <TypeAnimation
                            sequence={[' Doan Hai Duy', 4000, '  Doan Hai Duy', 4000, '   Doan Hai Duy', 4000]}
                            speed={50}
                            repeat={Infinity}
                            className='uppercase font-bold md:text-7xl text-4xl text-orange-500 my-1 '
                            wrapper='h2'
                        />
                    </motion.div>
                </div>
                <motion.p
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.7 }}
                    className='text-[16px] md:text-[20px] text-gray-600 dark:text-white mt-4 transition-colors'
                >
                    <BiSolidQuoteAltLeft className='inline-block' /> Hello,{' '}
                    <TypeAnimation
                        sequence={[
                            'I am a 3rd year student at Nha Trang University.',
                            3000,
                            'I want to become a front-end developer.',
                            3000,
                            'You can see more information about me by scrolling down (◕‿↼).',
                            3000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        wrapper='span'
                    />
                </motion.p>
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.7 }}
                    className='uppercase flex gap-6 items-center mt-12 font-medium text-xl md:text-2xl justify-center md:justify-start'
                >
                    <a
                        href='tel:0399998943'
                        className='md:px-12  md:py-4 px-6 py-2 rounded-xl bg-orange-500 text-white hover:opacity-90'
                    >
                        Contact Me
                    </a>
                    <a
                        href={CV}
                        download='DoanHaiDuy_CV'
                        target='_blank'
                        rel='noreferrer'
                        className='text-orange-500 uppercase'
                    >
                        Download my cv
                    </a>

                    {/* <div
                        href={CV}
                        download="CV-DoanHaiDuy"
                        target="_blank"
                        rel="noreferrer"
                        className="text-orange-500 uppercase "
                        onClick={() => setOption(true)}
                    >
                        <div
                            className={`absolute bottom-[-60px]  flex-col items-start gap-1  ${
                                option ? "flex" : "hidden"
                            }`}
                        >
                            <a
                                href={CV}
                                download="CV-DoanHaiDuy"
                                target="_blank"
                                rel="noreferrer"
                                className="text-orange-500 uppercase "
                            >
                                English
                            </a>
                            <a
                                href={CV}
                                download="CV-DoanHaiDuy"
                                target="_blank"
                                rel="noreferrer"
                                className="text-orange-500 uppercase "
                            >
                                Vietnamese
                            </a>
                        </div>
                        Download my cv
                    </div> */}
                </motion.div>
            </div>
            <motion.div
                variants={fadeIn('left', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='md:w-2/5 flex items-center justify-center '
            >
                <img
                    src={require('../../assets/images/overviewImage.jpg')}
                    alt=''
                    className='md:h-[600px]  object-cover rounded-2xl w-[400px] h-[500px]'
                />
            </motion.div>
        </div>
    );
}

export default Overview;
