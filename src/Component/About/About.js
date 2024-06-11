import React, { useContext} from 'react';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { AiFillFacebook, AiFillGithub, AiFillMail, AiFillMobile } from 'react-icons/ai';
import { fadeIn } from '../../variants';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ProfileContext } from '../../context/ProfileContext';

function About() {
    const { profile, loading } = useContext(ProfileContext);

    if (loading) return null;

    return (
        <div
            className='flex md:h-screen md:flex-row-reverse flex-col-reverse xl:px-[15%] md:px-[8%] px-[20px] bg-white dark:bg-black items-center justify-center gap-[20px] gap-y-[40px] py-[80px] transition-colors '
            id='about-me'
        >
            <div className='text-left flex-1 xl:ml-[80px] md:ml-[40px]'>
                <div className='flex gap-1 items-center'>
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
                        <p className='uppercase font-medium flex items-center gap-2 text-2xl text-gray-700 dark:text-white'>
                            <span className='w-1 h-8 bg-orange-500 inline-block '></span> About me
                        </p>
                        <TypeAnimation
                            sequence={[' Doan Hai Duy', 4000, '  Doan Hai Duy', 4000, '   Doan Hai Duy', 4000]}
                            speed={50}
                            repeat={Infinity}
                            className='uppercase font-bold text-4xl md:text-7xl text-orange-500 my-1 '
                            wrapper='h2'
                        />
                    </motion.div>
                </div>
                <motion.p
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.7 }}
                    className='text-[20px] text-gray-600 mt-4 dark:text-white'
                >
                    <BiSolidQuoteAltLeft className='inline-block' /> Here's my info. I hope we can work together.
                </motion.p>
                <div className=' grid grid-cols-2 gap-6 items-center mt-12 2xl:text-[20px] dark:text-white'>
                    <motion.a
                        variants={fadeIn('up', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.7 }}
                        href={`mailto:${profile?.email || 'haiduytbt2k3@gmail.com'}`}
                        className='flex gap-2 items-center'
                    >
                        <div className='p-3 text-[20px] shadow-xl rounded-[8px]  h-full  uppercase'>
                            <AiFillMail />
                        </div>
                        <div className=''>
                            <h3 className='font-semibold my-[-2px] text-orange-600 dark:text-white'>Email:</h3>
                            <p className='text-gray-500 dark:text-white'>
                                {profile?.email || 'haiduytbt2k3@gmail.com'}
                            </p>
                        </div>
                    </motion.a>
                    <motion.a
                        variants={fadeIn('up', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.7 }}
                        href={`tel:${profile?.phoneNumber || '(+84) 399 998 943'}`}
                        className='flex gap-2 items-center'
                    >
                        <div className='p-3 text-[20px] shadow-xl rounded-[8px]  h-full  uppercase'>
                            <AiFillMobile />
                        </div>
                        <div className=''>
                            <h3 className='font-semibold my-[-2px] text-orange-600 dark:text-white'>Phone number:</h3>
                            <p className='text-gray-500 dark:text-white'>
                                {profile?.phoneNumber || '(+84) 399 998 943'}
                            </p>
                        </div>
                    </motion.a>
                    <motion.a
                        variants={fadeIn('up', 0.6)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.7 }}
                        href={`https://${profile?.githubUrl || 'github.com/Doanhaiduy'}`}
                        target='_blank'
                        rel='noreferrer'
                        className='flex gap-2 items-center'
                    >
                        <div className='p-3 text-[20px] shadow-xl rounded-[8px]  h-full  uppercase'>
                            <AiFillGithub />
                        </div>
                        <div className=''>
                            <h3 className='font-semibold my-[-2px] text-orange-600 dark:text-white'>Github:</h3>
                            <p className='text-gray-500 dark:text-white'>
                                /{profile?.githubUrl?.split('/')[1] || 'Doanhaiduy'}
                            </p>
                        </div>
                    </motion.a>
                    <motion.a
                        variants={fadeIn('up', 0.6)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.7 }}
                        href={`https://${profile?.facebookUrl || 'facebook.com/Doanhaiduy.Profile'}`}
                        target='_blank'
                        className='flex gap-2 items-center'
                        rel='noreferrer'
                    >
                        <div className='p-3 text-[20px] shadow-xl rounded-[8px]  h-full  uppercase'>
                            <AiFillFacebook />
                        </div>
                        <div className=''>
                            <h3 className='font-semibold my-[-2px] text-orange-600 dark:text-white'>Facebook:</h3>
                            <p className='text-gray-500 dark:text-white'>
                                /{profile?.facebookUrl?.split('/')[1] || 'Doanhaiduy.Profile'}
                            </p>
                        </div>
                    </motion.a>
                </div>
            </div>
            <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className='md:w-2/5 flex items-center justify-center'
            >
                <img
                    src={profile?.aboutImage || require('../../assets/images/aboutImage2.jpg')}
                    alt=''
                    className='h-[400px] rounded-full object-cover w-[400px] bg-[#565f7f]'
                />
            </motion.div>
        </div>
    );
}

export default About;
