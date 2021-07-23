import React from 'react'
import {ReactComponent as Logo } from '../../Images/citymobil.svg'
import './Header.css'

const Header = () => {
    return (
        <header>
            <Logo className="logo"/>
        </header>
    )
}

export default Header

