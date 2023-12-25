"use client";

import React, { createContext, useState, useEffect, useContext} from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children } : {children : React.ReactNode}) {
    const [mode, setMode] = useState('');

    const handlesThemeChange = () => {
        if (mode === 'dark') {
            setMode('light');
            document.documentElement.classList.add('light');
        } else {
            setMode('dark');
            document.documentElement.classList.add('dark');
        }
    }

    useEffect(() => {
        handlesThemeChange();
    }, [mode])

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeCont)
}