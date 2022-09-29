import React from 'react';
import Layout from './components/Layout';
import { CallContextProvider } from './contexts/CallContext';
import { WeatherContextProvider } from './contexts/WeatherContext';

function App() {
  return (
    <div className='parent'>
      <WeatherContextProvider>
        <CallContextProvider>
          <Layout />
        </CallContextProvider>
      </WeatherContextProvider>
    </div>
  )
};
export default App;