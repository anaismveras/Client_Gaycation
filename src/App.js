// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import axios from 'axios'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import SearchDestination from './components/main/SearchDestination'
import UsersGaycations from './components/main/UsersGaycations'
import Contact from './components/Contact'
import DestinationProfile from './components/main/DestinationProfile'
// import apiUrl from './apiConfig'

const App = () => {

	const [user, setUser] = useState(null)
	const [msgAlerts, setMsgAlerts] = useState([])
	// gaycations states
	// const [gaycations, setGaycations] = useState([])
	const [inputValue, setInputValue] = useState('')
    const [subValue, setSubValue] = useState('')
    const [destinationsData, setDestinationsData] = useState([])
    const [destinationsIncluded, setDestinationsIncluded] = useState([])


	console.log('user in app', user)
	console.log('message alerts', msgAlerts)
	const clearUser = () => {
		console.log('clear user ran')
		setUser(null)
	}

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id))
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
			)
		})
	}

	// -----------  FOR USERGAYCATIONS.JS --------------- //
	// call API to get gaycations in db
	// const getGaycations = () => {
	// 	if (user !== null) {
	// 		axios.get('http://localhost:8000/destinations',{
	// 			headers: {
	// 				"Authorization": `Bearer ${user.token}`
	// 			}
	// 		})
	// 		.then(foundGaycations => {
	// 			// console.log('this is faves', foundGaycations)
	// 			setGaycations(foundGaycations)
	// 		})
	// 	}
    // }

	// // recall the API whenever a user signs in and whenever a user added it to gaycations
	// useEffect(() => {
	// 	getGaycations()
	// }, [user])


	return (
		<Fragment>
			{/* Auth Routes */}
			<Header user={user} />
			<Routes>
				<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
				<Route
					path='/sign-up'
					element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-in'
					element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/contact'
					element={<Contact msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-out'
					element={
						<RequireAuth user={user}>
							<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path='/change-password'
					element={
						<RequireAuth user={user}>
							<ChangePassword msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>

				{/* Gaycation Routes */}
				<Route
					path='/search-destination'
					element={
						<RequireAuth user={user}>
							<SearchDestination
								user={user}
								msgAlert={msgAlert}
							/>
						</RequireAuth>
					}
				/>
				<Route
					path='/gaycation-profile'
					element={
						<RequireAuth user={user}>
							<UsersGaycations
								user={user}
								msgAlert={msgAlert}
								// gaycations={gaycations.data}
								// getGaycations={getGaycations}
							/>
						</RequireAuth>
					}
				/>
				<Route
					path='/destination-profile'
					element={
						<RequireAuth user={user}>
							<DestinationProfile
								user={user}
								msgAlert={msgAlert}
							/>
						</RequireAuth>
					}
				/>
			</Routes>
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
		</Fragment>
	)
}

export default App
