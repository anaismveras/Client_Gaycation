import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
// import '../Home.css'
import './auth.css'

const linkStyle = {
    color: '#424874',
    textDecoration: 'none',
	// backgroundColor: 'purple',
	// justifyItems: 'right'
}

const navBarStyling = {
	backgroundColor: '#FFFDDE',
	textColor: '#424874',
	// padding: '0px, 0px, 0px, 50px'
}

const authenticatedOptions = (
	<>
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
			<Link to='search-destination' className='sdNav' style={linkStyle}>
				Search Destinations
			</Link>
		</Nav.Link>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Link>
		    <Link to='sign-up' className='suNav' style={linkStyle}>Sign Up</Link>
        </Nav.Link>
        <Nav.Link>
		    <Link to='sign-in' className='siNav' style={linkStyle}>Sign In</Link>
        </Nav.Link>
	</>
)

// const alwaysOptions = (
// 	<>
// 		<Nav.Link>
// 			<Link to='/' className='homeNav' style={linkStyle}>
// 				Home
// 			</Link>
// 		</Nav.Link>
// 	</>
// )

const Header = ({ user }) => (
	// <Navbar style={navBarStyling} variant='light' expand='md'>
	<Navbar style={navBarStyling} expand='md'>
		<Navbar.Brand>
			<Link to='/' className='headerNav' style={linkStyle}>
				🌈 Gaycation
			</Link>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2 welcomeUser'>Welcome, {user.username}</span>
				)}
				{/* {alwaysOptions} */}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header




// <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
//         <div class="container">
//         <a 
//         href="#" 
//         class="navbar-brand mb-o h1">
//           <img class="d-inline-block align-top"
//           src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
//           width="30" height="30"/>
//         Navbar</a>
//         <button 
//         type="button"
//         data-bs-toggle="collapse"
//         data-target="#navbarNav"
//         class="navbar-toggler"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div 
//         class="collapse navbar-collapse"
//         id="navbarNav">
//         <ul class="navbar-nav">
//           <li class="nav-item active">
//             <a href="#" class="nav-link">
//               Home
//             </a>
//           </li>
//           <li class="nav-item dropdown">
//             <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
//             aria-expanded="false">
//               Sign In
//             </a>
//             <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//               <li><a href="#"
//               class="dropdown-item">Feature #1</a></li>
//               <li><a href="#"
//                 class="dropdown-item">Feature #2</a></li>
//                 <li><a href="#"
//                   class="dropdown-item">Feature #3</a></li>
//             </ul>
//           </li>
//           <li class="nav-item active">
//             <a href="#" class="nav-link">
//               Sign Out
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//       </nav>
