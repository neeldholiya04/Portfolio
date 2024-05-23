import React from 'react';
import './Header.css';
import { FaHome, FaUser, FaCode, FaFileAlt } from 'react-icons/fa';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h1>ND</h1>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home"><FaHome /> Home</a></li>
                    <li><a href="#about"><FaUser /> About</a></li>
                    <li><a href="#projects"><FaCode /> Projects</a></li>
                    <li><a href="#resume"><FaFileAlt /> Resume</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
