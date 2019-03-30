import React, { Component, Fragment } from 'react'
import './style.less'

// Components
import {
	Card,
	Button,
	Radio
} from 'antd'

class Buttons extends Component {

	state = {
		loading: false,
		size: 'default'
	}

	sendMessage = ()=>{
		this.setState((state)=>({
			loading: true
		}))
	}
	handleSize = (e)=>{
		this.setState({
			size: e.target.value
		})
	}

	render(){
		return(
			<div className='buttons-wrap'>
				<Card title='基础按钮' bordered={false} hoverable={true}>
					<Button size='large' type='primary'>primary</Button>
					<Button size='large'>default</Button>
					<Button size='large' type='dashed'>dashed</Button>
					<Button size='large' type='danger'>danger</Button>
					<Button size='large' disabled>disabled</Button>
				</Card>

				<Card title='图形按钮' bordered={false} hoverable={true}>
					<Button size='large' type='primary' icon='search'>search</Button>
					<Button size='large' icon='fullscreen' shape='circle' />
					<Button size='large' icon='fullscreen' shape='round'>fullscreen</Button>
					<Button size='large' type='dashed' icon='edit'>edit</Button>
					<Button size='large' type='danger' icon='delete'>delete</Button>
					<Button size='large' disabled>disabled</Button>
					<br/>
					<Button.Group size='large'>
						<Button type='disabled' icon='left'>backward</Button>
						<Button type='default' icon='right'>forward</Button>
					</Button.Group>
				</Card>

				<Card title='图形按钮' bordered={false} hoverable={true}>
					<Button size='large' type='primary' loading shape='circle' />
					<Button size='large' loading shape='circle' />
					<Button size='large' loading={this.state.loading} onClick={this.sendMessage}>send message</Button>
				</Card>

				<Card title='按钮尺寸' bordered={false} hoverable={true}>
					<Radio.Group>
						<Radio onClick={this.handleSize} value='small'>小</Radio>
						<Radio onClick={this.handleSize} value='default'>中</Radio>
						<Radio onClick={this.handleSize} value='large'>大</Radio>
					</Radio.Group>
					<Button type='primary' size={this.state.size}>i am button</Button>
					<Button type='default' size={this.state.size}>i am button</Button>
					<Button type='danger' size={this.state.size}>i am button</Button>
				</Card>
			</div>
		)
	}
}

export default Buttons
