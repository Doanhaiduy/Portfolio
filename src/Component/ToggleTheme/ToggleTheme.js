import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ToggleTheme() {
    const root = window.document.documentElement; //add 'dark class to html root element'
    const theme = JSON.parse(localStorage.getItem("Theme"));
    const [dark, setDark] = useState(theme ?? false);
    const handleSetDark = () => {
        localStorage.setItem("Theme", JSON.stringify(!dark));
        setDark(!dark);
    };
    useEffect(() => {
        if (theme === true) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    });
    return (
        <label
            title={`Change to ${theme ? "light" : "dark"} theme `}
            className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100 md:static fixed top-[20px] right-[20px]"
        >
            {/* <span className="relative">
                <input id="Toggle1" type="checkbox" className="hidden peer" onChange={handleSetDark} checked={theme} />
                <div className="w-10 h-6 rounded-full shadow-inner bg-gray-200 dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                <div
                    className={`absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800 bg-gray-500`}
                ></div>
            </span> */}
            <span
                onClick={handleSetDark}
                className="text-[24px] font-semibold p-1 bg-white/50 md:bg-transparent md:dark:bg-transparent dark:bg-black/50 rounded-full"
            >
                {theme ? <MdDarkMode /> : <MdLightMode />}
            </span>
        </label>
    );
}

export default ToggleTheme;
