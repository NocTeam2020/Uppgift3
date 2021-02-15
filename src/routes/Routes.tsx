import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import RoutingPath from './RoutingPath'
import { LoginView } from '../view/LoginView'
import { UserContext } from '../shared/provider/UserProvider'
import { useEffect, useContext } from 'react'
import { Footer } from '../components/footer/footer'
import { NewsView } from '../view/navigationtabviews/news/NewsView'
import { PokemonView } from '../view/navigationtabviews/pokemon/pokemon'
import { StarWarsView } from '../view/navigationtabviews/starwars/starwars'

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
				<Route exact path={RoutingPath.pokemon} component={PokemonView} />
				<Route exact path={RoutingPath.starwars} component={StarWarsView} />

				<Route component={HomeView} />
			</Switch>
			<Footer />
		</BrowserRouter>

	)
}
