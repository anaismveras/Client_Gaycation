import './Home.css'
import gaycation from '../images/gaycation.png'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<div className="homePage">
			<h1>Find safe and exciting <br></br>LGBTQIA+ friendly vacation destinations</h1>
			<p><img className="homeImg" src={gaycation} alt="homeImage"></img></p>
		</div>
	)
}


export default Home
