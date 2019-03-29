import React, { Component, Fragment } from 'react'
import './style.less'

// Components
import {
	Card,
	Modal,
	Button
} from 'antd'

class Modals extends Component {

	state = {
		modal: false
	}

	handleModal = ()=>{
		this.setState({
			modal: true
		})
	}
	handleOk = ()=>{
		this.setState({
			modal: false
		})
	}
	
	handleCancel = ()=>{
		this.setState({
			modal: false
		})
	}

	render(){
		return(
			<div className='modal-wrap'>
				<Card title='基础模态框' bordered={false} hoverable={true}>
					<Button size='large' onClick={this.handleModal}>出来</Button>
				</Card>
				<Modal
					title='Basic Modal'
					visible={this.state.modal}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					okText='继续'
					cancelText='取消'
				>
					haha
				</Modal>
			</div>
		)
	}
}

export default Modals
