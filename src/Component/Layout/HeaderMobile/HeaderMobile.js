import React, { useEffect, useRef } from 'react';
import {
    BsEmojiHeartEyesFill,
    BsFillGrid3X3GapFill,
    BsFillJournalBookmarkFill,
    BsFillPersonFill,
    BsPencilSquare,
} from 'react-icons/bs';
import Dock from '../../DockItem/DockItem';
import { AiFillHome } from 'react-icons/ai';

function HeaderMobile() {
    const headerMobileRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                    }
                });
            },
            { threshold: 0.1 },
        );

        const sectionsToObserve = ['overview', 'skills', 'projects', 'about-me', 'contact', 'the-end'];

        sectionsToObserve.forEach((sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const items = [
        {
            icon: <AiFillHome size={20} />,
            label: 'Home',
            className: 'hover:bg-orange-500',
            onClick: () => {
                document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
            },
        },
        {
            icon: <BsFillJournalBookmarkFill size={20} />,
            label: 'Skills',
            className: 'hover:bg-orange-500',
            onClick: () => {
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
            },
        },
        {
            icon: <BsFillGrid3X3GapFill size={20} />,
            label: 'Projects',
            className: 'hover:bg-orange-500',
            onClick: () => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            },
        },
        {
            icon: <BsFillPersonFill size={20} />,
            label: 'About',
            className: 'hover:bg-orange-500',
            onClick: () => {
                document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' });
            },
        },
        {
            icon: <BsPencilSquare size={20} />,
            label: 'Contact',
            className: 'hover:bg-orange-500',
            onClick: () => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            },
        },
        {
            icon: <BsEmojiHeartEyesFill size={20} />,
            label: 'End',
            className: 'hover:bg-orange-500',
            onClick: () => {
                document.getElementById('the-end')?.scrollIntoView({ behavior: 'smooth' });
            },
        },
    ];

    return (
        <div
            ref={headerMobileRef}
            className='md:hidden py-2 px-4 sm:px-8 rounded-[99px] fixed bottom-[30px] left-1/2 flex gap-2 translate-x-[-50%] text-[14px] sm:text-[22px] text-white dark:text-gray-200 '
        >
            <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
        </div>
    );
}

export default HeaderMobile;
