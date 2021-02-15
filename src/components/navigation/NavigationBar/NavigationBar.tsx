import './NavigationBar.css'
import Logotype from '../../../shared/images/logotype.svg'
import { useContext } from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'
import { useHistory } from 'react-router-dom'
import { NavigationTabs } from './NavigationTabs/NavigationTabs'

export const NavigationBar = () => {
	const history = useHistory()
	const [authUser, setAuthUser] = useContext(UserContext)

	const signInButtonOrUsernameDependingOnAuthentication = () => {
		return authUser?.username
			? <div className='profile'><Profile /></div>
			: <span className='signInButton' onClick={() => history.push(RoutingPath.LoginView)}>Signin</span>
	}

	return (
		<div className='NavigationWrapper'>
			<img className='navigationLogo'
				src={Logotype}
				alt={'Logotype'} />
			<div className='NavigationTabs'>
				<NavigationTabs />
			</div>
			{signInButtonOrUsernameDependingOnAuthentication()}
		</div>
	)
}
