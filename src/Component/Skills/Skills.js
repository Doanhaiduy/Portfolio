import React, { useContext, useEffect, useState } from 'react';
import { fadeIn } from '../../variants';
import { motion } from 'framer-motion';
import skillApis from '../../apis/skillApis';
import TrueFocus from '../TrueFocus/TrueFocus';
import ShinyText from '../ShinyText/ShinyText';
import { ThemeContext } from '../../context/ThemeContext';

const SkillItem = ({ skill }) => {
    return (
        <motion.a
            href={skill?.href}
            target='_blank'
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }}
            className='lg:p-8  p-4 dark:bg-gray-100 bg-white flex flex-col items-center justify-center rounded-[8px] shadow-xl cursor-pointer hover:!scale-110 !transition-transform'
        >
            <img
                src={skill?.image}
                alt={skill?.name}
                loading='lazy'
                className='md:w-[80px] md:h-[80px] w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] mb-2 select-none'
            />
            <span className='text-[22px] dark:text-gray-600 font-medium'>{skill?.name}</span>
        </motion.a>
    );
};

function Skills(props) {
    const [skills, setSkills] = useState([]);
    const { dark } = useContext(ThemeContext);

    const handleGetSkills = async () => {
        try {
            const res = await skillApis.HandleSkill('/get-all');
            if (res.data) {
                setSkills(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleGetSkills();
    }, []);

    return (
        <div
            className='flex xl:px-[15%] md:px-[8%] px-[20px] items-center justify-center gap-[20px] gap-y-[40px] py-[80px] transition-colors dark:text-white '
            id='skills'
        >
            <div className='-rotate-90 lg:mr-[80px] md:block hidden'>
                <motion.h3
                    variants={fadeIn('right', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.4 }}
                    className=' text-[34px] font-semibold'
                >
                    Skills
                </motion.h3>
                <motion.div
                    variants={fadeIn('right', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.4 }}
                    className='w-12 h-1 bg-orange-500'
                ></motion.div>
            </div>

            <div>
                <motion.div
                    variants={fadeIn('up', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <h2 className='text-6xl font-semibold text-orange-600 uppercase'>
                        <TrueFocus
                            sentence='What i do'
                            manualMode={false}
                            blurAmount={5}
                            borderColor='red'
                            animationDuration={1}
                            pauseBetweenAnimations={0.5}
                        />
                    </h2>
                    <p className='text-gray-700 my-4 dark:text-white text-[22px] drop-shadow-2xl'>
                        <ShinyText
                            text={`Here are some of the skill I've. I hope it will meet your requirements.`}
                            isDarkBackground={dark}
                            disabled={false}
                            speed={4}
                            className='custom-class'
                        />
                    </p>
                </motion.div>
                <div className='flex items-center gap-5 justify-center'>
                    <div className='grid 2xl:grid-cols-5 lg:grid-cols-4 grid-cols-3 gap-8 uppercase'>
                        {skills?.map((skill, index) => (
                            <SkillItem key={index} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
