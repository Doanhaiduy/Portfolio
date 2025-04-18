import React, { useContext, useEffect, useState } from 'react';
import { fadeIn } from '../../variants';
import { motion } from 'framer-motion';
import projectApis from '../../apis/projectApis';
import { GrFormView } from 'react-icons/gr';
import ButtonAnimate from '../ButtonAnimate/ButtonAnimate';
import TrueFocus from '../TrueFocus/TrueFocus';
import { ThemeContext } from '../../context/ThemeContext';
import ShinyText from '../ShinyText/ShinyText';

function Projects() {
    const [projects, setProjects] = useState([]);
    const { dark } = useContext(ThemeContext);

    const handleGetProjects = async () => {
        try {
            const res = await projectApis.HandleProject('/get-all');
            if (res.data) {
                setProjects(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleViewProject = async (id) => {
        try {
            var res = await projectApis.HandleProject(`/increment-views/${id}`, null, 'post');
            if (res.data) {
                setProjects((prev) =>
                    prev.map((item) => (item._id === id ? { ...item, views: item.views + 1 } : item)),
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleGetProjects();
    }, []);

    return (
        <div
            className='flex xl:px-[15%] md:px-[8%] px-[20px] items-center  justify-center gap-[20px] gap-y-[40px] py-[80px] dark:bg-black bg-[#f9f9f9] transition-colors dark:text-white '
            id='projects'
        >
            <div className='-rotate-90 lg:mr-[80px] md:block hidden'>
                <motion.h3
                    variants={fadeIn('right', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.4 }}
                    className=' text-[34px] font-semibold'
                >
                    Projects
                </motion.h3>
                <motion.div
                    variants={fadeIn('right', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.4 }}
                    className='w-[80px] h-1 bg-orange-500'
                ></motion.div>
            </div>
            <div className=''>
                <div>
                    <motion.h2
                        variants={fadeIn('up', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.4 }}
                        className='text-6xl font-semibold text-orange-600 uppercase'
                    >
                        <TrueFocus
                            sentence='Things I’ve Built'
                            manualMode={false}
                            blurAmount={5}
                            borderColor='red'
                            animationDuration={1}
                            pauseBetweenAnimations={0.5}
                        />
                    </motion.h2>
                    <motion.p
                        variants={fadeIn('up', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.4 }}
                        className='text-gray-700 my-4 dark:text-white text-[22px] drop-shadow-2xl'
                    >
                        <ShinyText
                            text={`Here are some of the projects I've done. I hope it will meet your requirements.`}
                            isDarkBackground={dark}
                            disabled={false}
                            speed={4}
                            className='custom-class'
                        />
                    </motion.p>
                </div>
                <div className='grid 2xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                    {projects.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn('up', 0.1)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: true, amount: 0.4 }}
                            className=' dark:bg-gray-100 bg-white dark:text-gray-600 font-semibold shadow-xl p-4 rounded-[12px] relative group cursor-pointer'
                        >
                            <img
                                loading='lazy'
                                className='w-full h-[300px] object-cover rounded-[12px] select-none'
                                src={item.image}
                                alt={item.name}
                            />
                            <h3 className='text-[24px] pt-4'>{item.name}</h3>
                            <div className='absolute bottom-2 right-2'>
                                <p className='text-right text-[14px] mt-4 flex gap-1 items-center'>
                                    {item.views}
                                    <GrFormView color='#4b5563' size={24} />
                                </p>
                            </div>
                            <div className='absolute group-hover:opacity-100  opacity-0 invisible  group-hover:visible top-0 transition-all p-4 text-[20px] bg-black/75 w-full h-full left-0 rounded-[12px] text-left text-white '>
                                {!item.active && (
                                    <p className='bg-red-600 px-2 py-1 text-white inline-block rounded-lg absolute top-2 left-2 text-[14px] font-bold'>
                                        (Hosting Expiry)
                                    </p>
                                )}

                                <h3 className='text-center text-[24px] font-semibold mb-4'>{item.name}</h3>
                                <div className='flex flex-col justify-between h-[80%]'>
                                    <div className=''>
                                        <p>
                                            <strong>Description: </strong>
                                            {item.description}
                                        </p>
                                        <p>
                                            <strong>Technologies Used:</strong> {item.technologies.join(', ')}
                                        </p>
                                    </div>
                                    <div className='flex gap-3 items-center justify-center mt-4'>
                                        <ButtonAnimate
                                            text='View Live'
                                            href={item.live}
                                            onClick={() => handleViewProject(item._id)}
                                            classes={'btn-style901 text-center font-semibold px-2 py-1 w-[96px]'}
                                        />

                                        <ButtonAnimate
                                            text='View Source'
                                            href={item.source}
                                            classes='btn-style901 text-center font-semibold px-2 py-1 w-[120px]'
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
