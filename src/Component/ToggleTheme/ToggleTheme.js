import React, { useContext } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { ThemeContext } from '../../context/ThemeContext';

function ToggleTheme() {
    const { dark, handleSetDark } = useContext(ThemeContext);
    return (
        <label
            title={`Change to ${dark ? 'light' : 'dark'} theme`}
            className='inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100 md:static fixed top-[20px] right-[20px]'
        >
            <span
                onClick={handleSetDark}
                className='text-[24px] font-semibold p-1 bg-white/50 md:bg-transparent md:dark:bg-transparent dark:bg-black/50 rounded-full'
            >
                {dark ? <MdLightMode /> : <MdDarkMode />}
            </span>
        </label>
    );
}

export default ToggleTheme;
