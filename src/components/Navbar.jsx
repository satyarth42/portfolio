import React from 'react';

import './stylesheets/Navbar.css';

import {FaUserAlt,FaEye,FaEnvelope,FaCogs,FaHome,FaTh} from 'react-icons/fa'
import { IconContext } from "react-icons";

import {Link} from "react-router-dom";

import logo from './images/logo.png';

const Navbar = ()=>{
    return (
        <div>
            <div id="bar">
                <div className="barelem">
                    <Link to="/"><img src={ logo } className="logo" alt="logo" /></Link>
                    
                    <IconContext.Provider value={{size:"35px",className:"hamburger"}}>
                            <label for="check">
                                <FaTh />
                            </label>
                        </IconContext.Provider>
                    <input type="checkbox" id="check" style={{"display":"none"}}/>
                    <div className="menu" id="menu">
                        <IconContext.Provider value={{size:"35px", className:"menu-icons" }}>
                            <div id="navigation">
                                <Link to="/"><FaHome /></Link>
                                <Link to="/about"><FaUserAlt /></Link>
                                <Link to="/skills"><FaCogs /></Link>
                                <Link to="/projects"><FaEye /></Link>
                                <Link to="/contact"><FaEnvelope /></Link>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;