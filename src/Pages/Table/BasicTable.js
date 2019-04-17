import React, { Component, Fragment } from 'react'

// Components
import { Card, Table, Tag } from 'antd'

const columns = [
  {title: 'Username', dataIndex: 'username', render: text=><a href="javascript:;">{text}</a>},
  {title: 'Gender', dataIndex: 'sex'},
  {title: 'Motion', dataIndex: 'state'},
  {title: 'Favorite', dataIndex: 'interest', render: tag=>(
    <span><Tag color='green'>{tag.toUpperCase()}</Tag></span>
  )},
  {title: 'Birthday', dataIndex: 'birthday'},
]

class BasicTable extends Component {
  state = {
    dataSource: [],
    dongtaiSource: [],
  }

  render(){
    const { dataSource, dongtaiSource } = this.state
    return(
      <div>
        <Card title='基础表格' bordered={false} hoverable>
          <Table dataSource={ dataSource } columns={ columns } pagination={false} bordered />
        </Card>
        <Card title='动态表格' bordered={false} hoverable>
          <Table dataSource={ dongtaiSource } columns={ columns } pagination={false} bordered />
        </Card>
      </div>
    )
  }

  componentDidMount(){
    const dataSource = [{
      key: '1',
      username: 'Yokiijay',
      sex: 'male',
      state: 'happy',
      interest: 'coding',
      birthday: '2019-04-17',
      address: 'Zhuhai, Guangdong',
      time: '09:25:26'
    },{
      key: '2',
      username: 'Fiber',
      sex: 'female',
      state: 'sad',
      interest: 'eat',
      birthday: '2019-02-10',
      address: 'Shenzhen, Guangdong',
      time: '19:22:13'
    }]

    this.setState({
      dataSource
    })
  }
}

export default BasicTable