import { createContext, useEffect, useState } from "react";
const WeatherContext = createContext();
export const WeatherContextProvider = ({ children }) => {
    const [city, setCity] = useState(localStorage.getItem('city') || 'Agdash');
    const states = {
        city,
        setCity
    };
    useEffect(() => {
        localStorage.setItem('city', city)
    }, [city])
    return (
        <WeatherContext.Provider value={states}>
            {children}
        </WeatherContext.Provider>
    )
};
export default WeatherContext;