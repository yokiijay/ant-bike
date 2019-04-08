import React, { Component, Fragment } from 'react'

// Components
import { message, Button, Card } from 'antd'

class Messages extends Component {

  success = ()=>{
    const hide = message.loading('Fetching data', 0)
    setTimeout(hide, 1000)
  }
  download = ()=>{
    message.loading('Downloading initializing', 1)
    .then(()=>message.success('Download finished'))
    .then(()=>message.info('Please check your directory'))
  }

  render(){
    return(
      <div className='message-wrapper'>
        <Card title='普通提示' bordered={false} hoverable={true}>
          <Button type='primary' onClick={()=>message.info('This is a normal message')}>Normal message</Button>
        </Card>
        <Card title='其他提示类型' bordered={false} hoverable={true}>
          <Button onClick={()=>message.success('Successful login')}>Login</Button>
          <Button onClick={()=>message.error('Username is invalid')}>Check name</Button>
          <Button onClick={()=>message.warning('You just deleted your account')}>Delete Account</Button>
        </Card>
        <Card title='修改延迟' bordered={false} hoverable={true}>
          <Button onClick={()=>message.success(`Successful login, this message will disapear in 10s`, 10)}>Customized display duration</Button>
        </Card>
        <Card title='异步加载' bordered={false} hoverable={true}>
          <Button onClick={this.success}>Download</Button>
        </Card>
        <Card title='Promise接口' bordered={false} hoverable={true}>
          <Button onClick={this.download}>Download</Button>
        </Card>
      </div>
    )
  }
}

export default Messages
