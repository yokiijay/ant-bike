import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Axios from '../axios'

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
const columns2 = [
  {title: 'Username', dataIndex: 'username', render: text=><a href="javascript:;">{text}</a>},
  {title: 'Gender', dataIndex: 'sex'},
  {title: 'Motion', dataIndex: 'state'},
  {title: 'Favorite', dataIndex: 'interest'},
  {title: 'Born In', dataIndex: 'birthday', render: tag=>(
    <span><Tag color='green'>{tag.toUpperCase()}</Tag></span>
  )},
  {title: 'Address', dataIndex: 'address'},
  {title: 'Time', dataIndex: 'time'},
]

class BasicTable extends Component {
  state = {
    dataSource: [],
    dongtaiSource: [],
    loading: true
  }

  render(){
    const { dataSource, dongtaiSource, loading } = this.state
    return(
      <div>
        <Card title='基础表格' bordered={false} hoverable>
          <Table dataSource={ dataSource } columns={ columns } pagination={false} bordered />
        </Card>
        <Card title='动态表格' bordered={false} hoverable>
          <Table loading={loading} dataSource={ dongtaiSource } columns={ columns2 } pagination={false} bordered />
        </Card>
      </div>
    )
  }

  request = ()=>{
    const baseUrl = 'https://easy-mock.com/mock/5cb68dd0e3926e3006389002/api/'
    axios.get(`${baseUrl}getlist`).then((res)=>{
      const dongtaiSource = res.data.data.list
      this.setState({
        dongtaiSource,
        loading: false
      })
    })
  }

  componentDidMount(){
    Axios.ajax({
      url: '/getlist',
      data: {
        params: {
          page: 1
        }
      }
    })
    .then(res=>{
      console.log( res )
    })
    .catch(err=>{
      console.log( err )
    })

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
      dataSource,
      loading: true
    },()=>{
      this.request()
    })
  }
}

export default BasicTable