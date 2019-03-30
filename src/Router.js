import React, { Component, Fragment } from 'react'
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

// Components
import App from './App'
import Home from './Pages/Home'
import NoMatch from './Pages/NoMatch'
import Buttons from './Pages/UI/Buttons'
import Modals from './Pages/UI/Modals'
import Loadings from './Pages/UI/Loadings';

export default class extends Component {
	render(){
		return(
			<Router>
				<Fragment>
					<Route path='/' render={()=>(
						<App>
							<Switch>
								<Route exact path='/' render={()=><Redirect to='/home' />} />
								<Route path='/home' component={ Home } />
								<Route path='/ui/buttons' component={ Buttons } />
								<Route path='/ui/modals' component={ Modals } />
								<Route path='/ui/loadings' component={ Loadings } />
								<Route component={ NoMatch } />
							</Switch>
						</App>
					)} />
				</Fragment>
			</Router>
		)
	}
}