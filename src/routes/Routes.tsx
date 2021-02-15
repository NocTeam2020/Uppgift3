import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import RoutingPath from './RoutingPath'
import { LoginView } from '../view/LoginView'
import { UserContext } from '../shared/provider/UserProvider'
import { useEffect, useContext } from 'react'
import { Footer } from '../components/footer/footer'
import { NewsView } from '../view/navigationtabviews/news/NewsView'

export const Routes = (props: { children: React.ReactChild }) => {
	const [authUser, setAuthUser] = useContext(UserContext)
	const { children } = props

	useEffect(() => {
		setAuthUser({ username: localStorage.getItem('user') })
	}, [])

	return (
		<BrowserRouter>
			{children}
			<Switch>
				<Route exact path={RoutingPath.homeView} component={HomeView} />
				<Route exact path={RoutingPath.LoginView} component={LoginView} />
				<Route exact path={RoutingPath.newsView} component={NewsView} />
				<Route component={HomeView} />
			</Switch>
			<Footer />
		</BrowserRouter>
		
	)
}
