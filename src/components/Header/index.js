import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div className="header">
            <Link to="/" className="header__logo">JOBILY</Link>
        </div>
    )
}

export default Header