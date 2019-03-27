import React, { Component } from 'react'
import MenuConfig from '../../resources/menuConfig'
import './style.less'

// Components
import {
	Layout, 
	Menu,
	Icon,
	Typography
} from 'antd'
const { SubMenu } = Menu

class NavLeft extends Component {
	state = {
		menuTreeNode: []
	}

	render(){
		return(
			<Layout.Sider
				className='navLeft'
				collapsible
				collapsed={this.props.collapsed}
				onCollapse={this.props.toggle}
				theme='light'
			>
				<div className="logo">
					<img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt=""/>
					<Typography.Title className='title' level={this.props.collapsed ? 4 : 3} ellipsis> Dashboard </Typography.Title>
				</div>
				<Menu
          defaultSelectedKeys={['/home']}
					mode='vertical'
					className='menu'
        >
          { this.state.menuTreeNode }
        </Menu>
			</Layout.Sider>
		)
	}

	componentDidMount(){
		const menuTreeNode = this.renderMenu(MenuConfig)

		this.setState({
			menuTreeNode
		})
	}
	renderMenu = (data)=>{
		return data.map((item,index)=>{
			if(item.children){
				return <SubMenu key={item.key} title={item.icon?<span><Icon type={item.icon} /><span>{item.title}</span></span>:<span>{item.title}</span>}>
					{ this.renderMenu(item.children) }
				</SubMenu>
			}
		return <Menu.Item key={item.key}>
				{item.icon?<Icon type={item.icon} />:null}
				<span>{item.title}</span>
			</Menu.Item>
		})
	}
}

export default NavLeft
