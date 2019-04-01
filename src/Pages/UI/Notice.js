import React, { Component, Fragment } from 'react'

// Components
import {
	Card,
	Button,
	notification
} from 'antd'

class Notice extends Component {

	openNotification = ()=>{
		notification.config({
			duration: 2
		})
		notification.open({
			message: '请注意休息',
			description: '您的工作时长已超过10小时，请停止手中的工作出去走动一会'
		})
	}

	render(){
		return(
			<div className='notice-wrap'>
				<Card title='通知提醒' bordered={false} hoverable={true}>
					<Button onClick={this.openNotification}>Open The Notice</Button>
				</Card>
			</div>
		)
	}
}

export default Notice
