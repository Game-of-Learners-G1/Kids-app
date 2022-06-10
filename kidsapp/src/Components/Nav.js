
import {Link} from 'react-router-dom';

import React from 'react';

const Nav = () => {
    return (
        <div className="navbar">
            <h1>Course Correct</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>
            </div>

        </div>
    )
}

export default Nav
