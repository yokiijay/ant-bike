import React, { Component, Fragment } from 'react'
import './style.less'

// Components
import {
	Card,
	Modal,
	Button,
	Col, Row,
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

	info = ()=>{
		Modal.info({
			title: 'This is an info',
			content: (
				<p>You have a message</p>
			),
		})
	}
	success = ()=>{
		Modal.success({
			title: 'This is a success',
			content: (
				<p>Glad you made it!</p>
			),
		})
	}
	error = ()=>{
		Modal.error({
			title: 'This is an error',
			content: (
				<p>Something went wrong~~</p>
			),
		})
	}
	warning = ()=>{
		Modal.warning({
			title: 'This is a warning',
			content: (
				<p>warning, too much time you spent.</p>
			),
		})
	}
	confirm = ()=>{
		Modal.confirm({
			title: 'This will cost you 999$',
			content: 'Are you sure?',
			okText: 'Yes',
			cancelText: 'No',
		})
	}
	delete = ()=>{
		Modal.confirm({
			title: 'Delete All files?',
			content: 'This will completely clean over your computer.',
			okText: 'Delete',
			cancelText: 'No',
			okType: 'danger'
		})
	}

	render(){
		return(
			<div className='modal-wrap'>
				<Card title='基础模态框' bordered={false} hoverable={true}>
					<Button type='primary' size='large' onClick={this.handleModal}>最基本的弹框</Button>
				</Card>
				<Modal
					title='最基本的弹框'
					visible={this.state.modal}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					okText='继续'
					cancelText='取消'
				>
					haha
				</Modal>

				<Row gutter={16}>
					<Col span={8}>
						<Card title='Modal.method' bordered={false} hoverable={true}>
							<Button type='primary' size='large' onClick={this.info}>info</Button>
						</Card>
					</Col>
					<Col span={8}>
						<Card title='Modal.method' bordered={false} hoverable={true}>
							<Button type='primary' size='large' onClick={this.success}>success</Button>
						</Card>
					</Col>
					<Col span={8}>
						<Card title='Modal.method' bordered={false} hoverable={true}>
							<Button type='primary' size='large' onClick={this.error}>error</Button>
						</Card>
					</Col>
					<Col span={8}>
						<Card title='Modal.method' bordered={false} hoverable={true}>
							<Button type='primary' size='large' onClick={this.warning}>warning</Button>
						</Card>
					</Col>
					<Col span={8}>
						<Card title='Modal.method' bordered={false} hoverable={true}>
							<Button type='default' size='large' onClick={this.confirm}>confirm</Button>
						</Card>
					</Col>
					<Col span={8}>
						<Card title='Modal.method' bordered={false} hoverable={true}>
							<Button type='default' size='large' onClick={this.delete}>delete</Button>
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}

export default Modals
