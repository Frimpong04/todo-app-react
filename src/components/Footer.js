import React from 'react';

// styles
import "./Footer.css";

const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (
        <div className='footer'> 
            <p>Made with ❤️ from Accra</p>
            <p>&copy;{currentYear}</p>
        </div>
    )
}

export default Footer;