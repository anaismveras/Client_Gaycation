import './Home.css'
import gaycation from '../images/gaycation.png'
import { Link } from 'react-router-dom'

const buttonStyle = {
	backgroundColor: 'white',
	color: '#424874',
	borderRadius: '4px',
	// border: '#424874',
	width: '150px'
}

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<div className="homePage">
			<div className="firstRow">
				<h1>Find safe and exciting <br></br>LGBTQIA+ friendly vacation destinations</h1><br></br>
				<div id="homePageBtns">
					<Link to="/sign-up">
						<button style={buttonStyle}><small>Sign Up</small></button>
					</Link> <h6></h6>
					<Link to="/sign-in">
						<button style={buttonStyle}><small>Sign In</small></button>
					</Link>
				</div>
			</div>
			<div className="secondRow">
				<p><img className="homeImg" src={gaycation} alt="homeImage"></img></p>
			</div>
		</div>
	)
}


export default Home
