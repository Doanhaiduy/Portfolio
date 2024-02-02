import React, { useEffect, useState, useRef } from 'react';
import { AiFillHome } from 'react-icons/ai';
import {
    BsEmojiHeartEyesFill,
    BsFillGrid3X3GapFill,
    BsFillJournalBookmarkFill,
    BsFillPersonFill,
} from 'react-icons/bs';

function HeaderMobile() {
    const [activeNav, setActiveNav] = useState(null);
    const headerMobileRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveNav(entry.target.id);
                    }
                });
            },
            { threshold: 0.1 } // Adjust the threshold as needed
        );

        // Observe each section
        observer.observe(document.getElementById('overview'));
        observer.observe(document.getElementById('about-me'));
        observer.observe(document.getElementById('skills'));
        observer.observe(document.getElementById('projects'));
        observer.observe(document.getElementById('the-end'));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={headerMobileRef}
            className='md:hidden  sm:py-4 py-2 px-4 sm:px-8 rounded-[99px] fixed bottom-[30px] left-1/2 flex gap-5 translate-x-[-50%] bg-gray-400 dark:bg-gray-900 z-[100] text-[20px] sm:text-[25px] text-white dark:text-gray-200 transition-colors'
        >
            <a
                href='#overview'
                className={`p-4 flex justify-center items-center rounded-full ${
                    activeNav === 'overview' ? 'bg-orange-500' : 'bg-transparent hover:bg-orange-500 transition-colors'
                }`}
            >
                <AiFillHome />
            </a>

            <a
                href='#skills'
                className={`p-4 flex justify-center items-center rounded-full ${
                    activeNav === 'skills' ? 'bg-orange-500' : 'bg-transparent hover:bg-orange-500 transition-colors'
                }`}
            >
                <BsFillJournalBookmarkFill />
            </a>
            <a
                href='#projects'
                className={`p-4 flex justify-center items-center rounded-full ${
                    activeNav === 'projects' ? 'bg-orange-500' : 'bg-transparent hover:bg-orange-500 transition-colors'
                }`}
            >
                <BsFillGrid3X3GapFill />
            </a>
            <a
                href='#about-me'
                className={`p-4 flex justify-center items-center rounded-full ${
                    activeNav === 'about-me' ? 'bg-orange-500' : 'bg-transparent hover:bg-orange-500 transition-colors'
                }`}
            >
                <BsFillPersonFill />
            </a>
            <a
                href='#the-end'
                className={`p-4 flex justify-center items-center rounded-full ${
                    activeNav === 'the-end' ? 'bg-orange-500' : 'bg-transparent hover:bg-orange-500 transition-colors'
                }`}
            >
                <BsEmojiHeartEyesFill />
            </a>
        </div>
    );
}

export default HeaderMobile;
