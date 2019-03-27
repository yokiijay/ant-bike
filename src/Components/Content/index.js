import React, { Component } from 'react'

// Components
import {
	Layout, 
} from 'antd'
import Home from '../../Pages/Home'

class Content extends Component {
	render(){
		return(
			<Layout.Content style={{
				margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
			}}
			>
				<Home />
			</Layout.Content>
		)
	}
}

export default Content
