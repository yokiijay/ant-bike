import React, { Component, Fragment } from 'react'

// Components

class NoMatch extends Component {
	render(){
		return(
			<Fragment>
				<h1>404 Not Found</h1>
			</Fragment>
		)
	}

	componentDidMount(){
		console.log( `%c The url: '${this.props.location.pathname}' not found`, 'font-size: 2em; color: deeppink;' )
	}
}

export default NoMatch
