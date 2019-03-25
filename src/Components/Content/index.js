import React, { Component, Fragment } from 'react'

// Components
import {
	Layout, 
} from 'antd'

class Content extends Component {
	render(){
		return(
			<Layout.Content style={{
				margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
			}}
			>
				Content
			</Layout.Content>
		)
	}
}

export default Content
