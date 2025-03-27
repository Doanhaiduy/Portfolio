import React, { useContext, useEffect } from 'react';
import { validateEmail } from '../../helpers';
import profileApi from '../../apis/profileApis';
import { fadeIn } from '../../variants';
import { motion } from 'framer-motion';
import ShinyText from '../ShinyText/ShinyText';
import { ThemeContext } from '../../context/ThemeContext';

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

const LoaderIcon = ({ size, speed, color }) => {
    return <l-bouncy size={size} speed={speed} color={color} />;
};

export default function Contact() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [error, setError] = React.useState([]);
    const [successMessage, setSuccessMessage] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const { dark } = useContext(ThemeContext);

    const handleSubmit = async (e) => {
        setError([]);
        e.preventDefault();
        if (!name) {
            setError((prev) => [...prev, { field: 'name', message: 'Name is required' }]);
        }
        if (!email) {
            setError((prev) => [...prev, { field: 'email', message: 'Email is required' }]);
        }

        if (!message) {
            setError((prev) => [...prev, { field: 'message', message: 'Message is required' }]);
        }

        if (email && !validateEmail(email)) {
            setError((prev) => [...prev, { field: 'email', message: 'Invalid email' }]);
        }

        if (error.length > 0) {
            return;
        }

        // send email
        if (name && email && message && validateEmail(email)) {
            const nameCapitalized = titleCase(name);
            setIsLoading(true);
            try {
                const res = await profileApi.HandleProfile('/send-message', { name, email, message }, 'post');
                if (res.data) {
                    setSuccessMessage(
                        `I truly appreciate your thoughtful message. It means a lot to me!, wish ${nameCapitalized} have a nice day!`,
                    );
                    setName('');
                    setEmail('');
                    setMessage('');
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
                alert(error);
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccessMessage('');
        }, 5000);
        return () => clearTimeout(timer);
    }, [successMessage]);

    return (
        <div
            className='flex xl:px-[15%] md:px-[8%] px-[20px] items-center justify-center gap-[20px] gap-y-[40px] py-[80px] min-h-screen dark:text-white bg-[#f9f9f9] dark:bg-black transition-colors'
            id='contact'
        >
            <div className='w-2/3'>
                <div>
                    <motion.h2
                        variants={fadeIn('up', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.4 }}
                        className='text-6xl font-semibold text-orange-600 uppercase'
                    >
                        Contact
                    </motion.h2>
                    <motion.p
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.4 }}
                        className='text-gray-700 my-4 dark:text-white text-[22px] drop-shadow-2xl'
                    >
                        <ShinyText
                            text={`Let's make something awesome together!`}
                            isDarkBackground={dark}
                            disabled={false}
                            speed={4}
                            className='custom-class'
                        />
                    </motion.p>
                </div>
                <motion.section
                    variants={fadeIn('up', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.4 }}
                    className='py-6'
                >
                    <form className='flex flex-col py-6 space-y-4 md:py-0 md:px-6 w-full dark:text-black '>
                        <label className='flex flex-col items-start'>
                            <div>
                                <span className='mb-1 text-lg dark:text-white'>Your Name </span>
                                <span className='text-red-500 text-lg'>*</span>
                            </div>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type='text'
                                placeholder='Nguyen Van A'
                                onFocus={(e) => {
                                    setError((prev) => prev.filter((err) => err.field !== 'name'));
                                }}
                                className='block w-full p-2 rounded-md shadow-sm  outline-none border-black border-[2px] focus:border-transparent  '
                                style={{
                                    borderColor: error.find((err) => err.field === 'name') ? 'red' : '#999',
                                }}
                            />
                            {error.map(
                                (err, index) =>
                                    err.field === 'name' && (
                                        <span key={index} className='text-red-500 text-sm'>
                                            {err.message}
                                        </span>
                                    ),
                            )}
                        </label>
                        <label className='flex flex-col items-start'>
                            <div>
                                <span className='mb-1 text-lg dark:text-white'>Email Address </span>
                                <span className='text-red-500 text-lg'>*</span>
                            </div>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='email'
                                placeholder='example@gmail.com'
                                onFocus={(e) => {
                                    setError((prev) => prev.filter((err) => err.field !== 'email'));
                                }}
                                className='block w-full p-2 rounded-md shadow-sm  outline-none border-black border-[2px] focus:border-transparent  '
                                style={{
                                    borderColor: error.find((err) => err.field === 'email') ? 'red' : '#999',
                                }}
                            />
                            {error.map(
                                (err, index) =>
                                    err.field === 'email' && (
                                        <span key={index} className='text-red-500 text-sm'>
                                            {err.message}
                                        </span>
                                    ),
                            )}
                        </label>
                        <label className='flex flex-col items-start'>
                            <div>
                                <span className='mb-1 text-lg dark:text-white'>A Few Words </span>
                                <span className='text-red-500 text-lg'>*</span>
                            </div>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onFocus={(e) => {
                                    setError((prev) => prev.filter((err) => err.field !== 'message'));
                                }}
                                placeholder='Hello, I would like to work with you on a project...'
                                rows='3'
                                className='block w-full p-2 rounded-md  outline-none border-black border-[2px] focus:border-transparent  '
                                style={{
                                    borderColor: error.find((err) => err.field === 'message') ? 'red' : '#999',
                                }}
                            ></textarea>
                            {error.map(
                                (err, index) =>
                                    err.field === 'message' && (
                                        <span key={index} className='text-red-500 text-sm'>
                                            {err.message}
                                        </span>
                                    ),
                            )}
                        </label>
                        {isLoading ? (
                            <button
                                type='button'
                                disabled
                                className='md:self-start px-8 py-2 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 focus:ring-orange-600 bg-orange-600 text-gray-50  hover:ring-orange-600'
                            >
                                Sending <LoaderIcon size={18} speed={1} color='#fff' />
                            </button>
                        ) : (
                            <button
                                type='button'
                                onClick={handleSubmit}
                                className='md:self-start px-8 py-2 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 focus:ring-orange-600 bg-orange-600 text-gray-50  hover:ring-orange-600'
                            >
                                Send Message
                            </button>
                        )}
                        {
                            <p className='text-green-500 text-lg self-start'>
                                {successMessage && <span>{successMessage} (ღ˘⌣˘ღ)</span>}
                            </p>
                        }
                    </form>
                </motion.section>
            </div>
        </div>
    );
}
