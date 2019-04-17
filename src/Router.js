import React, { Component, Fragment } from 'react'
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

// Components
import App from './App'
import Home from './Pages/Home'
import NoMatch from './Pages/NoMatch'
import Buttons from './Pages/UI/Buttons'
import Modals from './Pages/UI/Modals'
import Loadings from './Pages/UI/Loadings'
import Notice from './Pages/UI/Notice'
import Messages from './Pages/UI/Messages'
import Tab from './Pages/UI/Tab'
import Gallery from './Pages/UI/Gallery'
import Login from './Pages/Form/Login'
import Register from './Pages/Form/Register'
import BasicTable from './Pages/Table/BasicTable'

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
								<Route path='/ui/notification' component={ Notice } />
								<Route path='/ui/messages' component={ Messages } />
								<Route path='/ui/tabs' component={ Tab } />
								<Route path='/ui/gallery' component={ Gallery } />
								<Route path='/form/login' component={ Login } />
								<Route path='/form/reg' component={ Register } />
								<Route path='/table/basic' component={ BasicTable } />
								<Route component={ NoMatch } />
							</Switch>
						</App>
					)} />
				</Fragment>
			</Router>
		)
	}
}