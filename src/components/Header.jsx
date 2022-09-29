import React, { useContext } from 'react'
import WeatherContext from '../contexts/WeatherContext'

function Header() {
  const context = useContext(WeatherContext);
  const { city } = context;
  return (
    <div className='header'>
      <h1>City : {city}</h1>
    </div>
  )
};
export default Header