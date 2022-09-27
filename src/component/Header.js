import React from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';

const Header = () => {
    return (
        <header className="Header">
            <div className="inner">
                <h1>
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + "/images/t_logo.png"} alt="" />
                    </Link>
                </h1>
                <nav>
                    <NavMenu/>
                </nav>
            </div>
        </header>
    )
}

export default Header