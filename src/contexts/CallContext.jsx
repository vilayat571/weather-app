import { createContext, useContext, useEffect, useState } from "react";
import WeatherContext from "./WeatherContext";
const CallContext = createContext();
export const CallContextProvider = ({ children }) => {
    const context = useContext(WeatherContext);
    const [data, setData] = useState('')
    const { city } = context;
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},AZ&appid=d32bd17e782e54a0729a829c462c76ac`)
            .then(res => res.json())
            .then(veri => setData(veri));
    }, [city])
    return (
        <CallContext.Provider value={data}>
            {children}
        </CallContext.Provider>
    )
}
export default CallContext;