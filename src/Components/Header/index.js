import React, { Component } from 'react'

// Components
import {
	Layout, 
	Typography
} from 'antd'
const { Title, Text } = Typography

class Header extends Component {
	render(){
		return(
			<Layout.Header style={{ background: '#fff', padding: 0, paddingLeft: 20 }}>
				<Title level={2}>
					<Text mark>
						Header
					</Text>
				</Title>
			</Layout.Header>
		)
	}
}

export default Header
