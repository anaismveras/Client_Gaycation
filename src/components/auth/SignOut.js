import { useNavigate } from 'react-router-dom'

import {Button, ButtonGroup} from 'react-bootstrap'

import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

const SignOut = (props) => {
	const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
		signOut(user)
			.finally(() => navigate('/'))
			.finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

	return (
		<>
            <div className='signOutPage'>
                <div className='row'>
                    <div className='col-sm-4 col-md-4 mx-auto mt-5 signOutText'>
                        <h4>Are you sure you want to sign out?</h4><br></br>
                        <h5>We would <em>hate</em> to see you go!</h5><br></br>
                        <ButtonGroup>
                            <Button variant='danger' onClick={onSignOut}>
                                Sign Out
                            </Button>
                            <Button variant='warning' onClick={onCancel}>
                                Cancel
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
		</>
	)
}

export default SignOut
