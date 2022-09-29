import React from 'react';
import Cards from './Cards';
import Dropdown from './Dropdown';
import Header from './Header';
import '../styles/Layout.css';
function Layout() {
    return (
        <div className='layout'>
            <Header />
            <Dropdown />
            <Cards />
        </div>
    )
};
export default Layout;