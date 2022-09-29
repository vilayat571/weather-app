import React, { useContext } from 'react'
import CallContext from '../contexts/CallContext'
function Cards() {
  const context = useContext(CallContext);
  const degSymbol = '°'
  const kelvin = 273.15
  return (
    <div className="main">
      <div className='cards'>
        {
          context && context.list.slice(0, 7).map((item, index) => {
            return (
              <div className='card' key={index}>
                <div>
                  {
                    item.weather[0].main === 'Clear' &&
                    (<img width={80} height={80} src='https://cdn-icons-png.flaticon.com/512/1669/1669524.png'
                      alt="weather image" />)
                  }
                </div>
                <div>
                  {Math.trunc(Number(item.main.temp_max) - Number(kelvin))}{degSymbol}
                  /
                  {Math.trunc(Number(item.main.temp_min) - Number(kelvin))}{degSymbol}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};
export default Cards