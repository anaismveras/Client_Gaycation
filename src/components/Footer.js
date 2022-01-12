import React from "react";
import { Link } from 'react-router-dom'


const linkStyle = {
	color: '#424874',
	textDecoration: 'none',
}

const Footer = () => (
  <div className="footer">
    			<Link to='/contact' className='cuNav' style={linkStyle}>
				Contact Us
			</Link>
  </div>
);

export default Footer;