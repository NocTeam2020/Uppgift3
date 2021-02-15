import { useState, useContext } from 'react'
import { loginCred } from '../shared/interface/Interface'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'

export const LoginView = () => {
	const history = useHistory()
	const [loginCred, setloginCred] = useState<loginCred>({ username: '', password: '' })
	const [authUser, setAuthUser] = useContext(UserContext)

	const signIn = () => {
		localStorage.setItem('user', loginCred.username)
		setAuthUser(loginCred)
		history.push(RoutingPath.homeView)
	}

	return (
		<div>
			<h1>{loginCred.username}</h1>
			<form>
				<input
					placeholder='username'
					onChange={event => setloginCred({ ...loginCred, username: event.target.value })} /> <br /><br />
				<input
					placeholder='password'
					onChange={event => setloginCred({ ...loginCred, password: event.target.value })} />
					<br></br>
				<button onClick={() => signIn()}>Sign in</button>
			</form>
		</div>
	)
}
