import React, { useContext } from 'react'
import WeatherContext from '../contexts/WeatherContext';
import data from '../data/cities.json'
function Dropdown() {
    const cities = data;
    const context = useContext(WeatherContext);
    const { city, setCity } = context;
    const handleChange = (e) => {
        setCity(e.target.value)
    };
    return (
        <div className='dropdown'>
            <select onChange={(e) => handleChange(e)} value={city} >
                <optgroup>
                    {
                        cities.cities.map((item) => {
                            return (
                                <option key={item.geonameid} value={item.name}>
                                    {
                                        item.name
                                    }
                                </option>
                            )
                        })
                    }
                </optgroup>
            </select>
        </div>
    )
};
export default Dropdown;