import React, { useState } from "react";
import './header.styles.css';

import { Link } from 'react-router-dom';

import Sidebar from "../sidebar/Sidebar.component";

const Header = () => {
    const [sidebarClass, setSidebarClass] = useState('')

    const showSidebar = () => setSidebarClass('show')
    const hideSidebar = () => setSidebarClass('')
    
    return (
        <header className="header">
            <Link to="/" className="home-link"><h1>Bookstore</h1></Link>

            <button className="hamburger-btn" onClick={showSidebar}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>

            <Sidebar className={sidebarClass} hideSidebar={hideSidebar}/>
        </header>
    )
}

export default Header 