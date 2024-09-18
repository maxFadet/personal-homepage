import { useState, useEffect } from "react";

const localStorageKey = "darkMode";

export const useTheme = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem(localStorageKey);
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    const toggleTheme = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem(localStorageKey, JSON.stringify(newMode));
            return newMode;
        });
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem(localStorageKey);
        if (savedTheme) {
            setDarkMode(JSON.parse(savedTheme));
        }
    }, []);

    return [darkMode, toggleTheme];
};