import React from 'react';
import './Footer.css';
import { FaHome, FaUser, FaCode, FaFileAlt } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="logo">
                <p>Developed by Neel Dholiya</p>
            </div>
            <div className="logo">
                <p>Copyrigt © 2023</p>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><FaHome/></li>
                    <li><FaUser/></li>
                    <li><FaCode/></li>
                    <li><FaFileAlt/></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
