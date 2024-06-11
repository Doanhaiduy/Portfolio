import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
    const root = window.document.documentElement;
    const theme = JSON.parse(localStorage.getItem('Theme'));
    const [dark, setDark] = useState(theme ?? false);

    const handleSetDark = () => {
        localStorage.setItem('Theme', JSON.stringify(!dark));
        setDark(!dark);
    };

    useEffect(() => {
        if (theme === true) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    });

    return <ThemeContext.Provider value={{ dark, handleSetDark }}>{children}</ThemeContext.Provider>;
}

export default ThemeContextProvider;
