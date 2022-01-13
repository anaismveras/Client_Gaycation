import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
// import '../Home.css'
import './auth.css'
import gaycationLogo from './images/logo.png'

const linkStyle = {
	color: '#424874',
	textDecoration: 'none',
}

const navBarStyling = {
	backgroundColor: '#FFFDDE',
	textColor: '#424874',
}

const imageStyle = {
	height: '20%',
	width: '20%'
}

const authenticatedOptions = (
	<>
		<Nav.Link>
			<Link to='search-destination' className='sdNav' style={linkStyle}>
				Search Destinations
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='gaycation-profile' className='gpNav' style={linkStyle}>
				My Gaycations
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='change-password' className='cpNav' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='sign-out' className='soNav' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='contact' className='cuNav' style={linkStyle}>
				Contact Us
			</Link>
		</Nav.Link>
	</>
)

const unauthenticatedOptions = (
	<>
		<Nav.Link>
			<Link to='/' className='homeNav' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='contact' className='cuNav' style={linkStyle}>
				Contact Us
			</Link>
		</Nav.Link>
	</>
)

const alwaysOptionIsUser = (
	<>
	<Navbar.Brand>
	<img src={gaycationLogo} alt="Gaycation Logo" style={imageStyle} />
		</Navbar.Brand>
	</>
)

const alwaysOptionsNotUser = (
	<>
	<Navbar.Brand>
	<img src={gaycationLogo} alt="Gaycation Logo" style={imageStyle} />
		</Navbar.Brand>
	</>
)

const Header = ({ user }) => (
	// <Navbar style={navBarStyling} variant='light' expand='md'>
	<Navbar style={navBarStyling} className='d-flex flex-row' expand='md'>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		{user ? alwaysOptionIsUser : alwaysOptionsNotUser}
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-6'>Welcome, {user.username}!</span>
				)}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header


