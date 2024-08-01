const localStorageKey = "darkMode";

export const saveThemeInLocalStorage = (darkMode) =>
    localStorage.setItem(localStorageKey, JSON.stringify(darkMode));

export const getThemeFromLocalStorage = () => {
    const savedTheme = localStorage.getItem(localStorageKey);
    return savedTheme ? JSON.parse(savedTheme) : false;
};