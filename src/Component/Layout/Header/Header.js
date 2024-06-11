import React, { useEffect, useState, useRef } from 'react';
import ToggleTheme from '../../ToggleTheme';

function Header() {
    const [stickyClass, setStickyClass] = useState('relative');
    const [activeNav, setActiveNav] = useState(null);
    const headerRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveNav(entry.target.id);
                    }
                });
            },
            { threshold: 0.2 } // Adjust the threshold as needed
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

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 80 ? setStickyClass('!bg-white md:py-5 dark:!bg-black') : setStickyClass('');
        }
    };

    return (
        <div
            ref={headerRef}
            className={`flex px-[10%] items-center justify-between md:py-10 fixed  top-0 left-0 z-50 dark:text-white md:w-full transition-all ${stickyClass}`}
        >
            <div>
                <img src='' alt='' />
            </div>
            <ul className='lg:text-3xl text-2xl md:flex gap-8 font-semibold hidden'>
                <li
                    className={`cursor-pointer hover:text-orange-500 transition-colors relative nav-menu ${
                        activeNav === 'overview' ? 'text-orange-500 active' : ''
                    }`}
                >
                    <a href='#overview'>OVERVIEW</a>
                </li>

                <li
                    className={`cursor-pointer hover:text-orange-500 transition-colors relative nav-menu ${
                        activeNav === 'skills' ? 'text-orange-500 active' : ''
                    }`}
                >
                    <a href='#skills'>SKILLS</a>
                </li>
                <li
                    className={`cursor-pointer hover:text-orange-500 transition-colors relative nav-menu ${
                        activeNav === 'projects' ? 'text-orange-500 active' : ''
                    }`}
                >
                    <a href='#projects'>PROJECTS</a>
                </li>
                <li
                    className={`cursor-pointer hover:text-orange-500 transition-colors relative nav-menu ${
                        activeNav === 'about-me' ? 'text-orange-500 active' : ''
                    }`}
                >
                    <a href='#about-me'>ABOUT ME</a>
                </li>
                <li
                    className={`cursor-pointer hover:text-orange-500 transition-colors relative nav-menu ${
                        activeNav === 'the-end' ? 'text-orange-500 active' : ''
                    }`}
                >
                    <a href='#the-end'>THE END</a>
                </li>
            </ul>
            <ToggleTheme />
        </div>
    );
}

export default Header;
