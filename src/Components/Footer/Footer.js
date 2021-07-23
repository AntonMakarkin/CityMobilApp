import React from 'react'
import {ReactComponent as Logo } from '../../Images/citymobil.svg'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <Logo/>
            <div className="contacts">
                <p>+7(495)222-22-22</p>
                <a href="https://city-mobil.ru/">www.city-mobil.ru</a>
            </div>
        </footer>
    )
}

export default Footer
