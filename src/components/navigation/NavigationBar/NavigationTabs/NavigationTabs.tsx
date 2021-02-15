import './NavigationTabs.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'

export const NavigationTabs = () => {
	const history = useHistory()

	return (
		<ul className='ulWrapper'>
			<li className='li' onClick={() => history.push(RoutingPath.homeView)}>Hem</li>
			<li className='li' onClick={() => history.push(RoutingPath.newsView)}>Nyheter</li>
		</ul>
	)
}
