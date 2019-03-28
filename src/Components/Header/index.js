import React, { Component } from 'react'
import './style.less'
import fetchJsonp from 'fetch-jsonp'

// Components
import {
	Layout,
	Row, Col,
	Button
} from 'antd'

class Header extends Component {
	state = {
		username: 'Yokiijay',
		weather: {}
	}

	render(){
		const { username, weather } = this.state

		return(
			<Layout.Header className='header' style={{ background: '#fff'}}>
				<Row type='flex' justify='space-between'>
					<Col>{weather.city} {weather.dayweather} <span className='temp'>{weather.daytemp}</span></Col>
					<Col span={4} style={{textAlign: "right"}}>
						欢迎, {username}
						<Button className='btn-exit'>退出</Button>
					</Col>
				</Row>
			</Layout.Header>
		)
	}

	componentDidMount(){
		fetchJsonp('https://api.asilu.com/weather_v2', {
			jsonpCallback: 'callback'
		})
		.then(res=>{
			return res.json()
		})
		.then(json=>{
			const result = json.forecasts[0]
			const { city, province } = result
			const weather = result.casts[0]
			let { week, dayweather, daytemp } = weather
			daytemp+='℃'
			week = new Array('星期一','星期二','星期三','星期四','星期五','星期六','星期日')[Number(week-1)]
			
			this.setState({
				weather: { city, province, week, dayweather, daytemp }
			})
		})
		.catch(err=>{
			console.error( err )
		})
	}
}

export default Header
