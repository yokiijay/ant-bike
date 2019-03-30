import React, { Component, Fragment } from 'react'

// Components
import {
	Card,
	Button,
	Spin,
	Icon,
	Alert
} from 'antd'

class Loadings extends Component {
	render(){
		return(
			<div className='loading-wrap'>
				<Card title='SPIN' bordered={false} hoverable={true}>
					<Spin size='small' style={{marginRight:'20px'}} />
					<Spin size='default' style={{marginRight:'20px'}} />
					<Spin size='large' style={{marginRight:'20px'}} />
					<Spin indicator={ <Icon type="loading" style={{ fontSize: 34 }} spin /> } size='large' style={{marginRight:'20px'}} />
				</Card>
				<Card title='SPIN COVER' bordered={false} hoverable={true}>
					<Spin indicator={ <Icon type="loading" style={{ fontSize: 24 }} spin /> }>
						<Alert
							message='Info Text'
							description='Info Text
							Info Description Info Description Info Description Info Description'
							type='info'
							showIcon
							closable={true}
						/>
					</Spin>
				</Card>
			</div>
		)
	}
}

export default Loadings
