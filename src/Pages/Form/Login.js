import React, { Component, Fragment } from 'react'

// Components
import { Card, Form, Icon, Input, Button, message, Checkbox } from 'antd'
const { Item } = Form
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 11 },
};

class Login extends Component {

  handleSubmit = (e)=>{
    const userInfo = this.props.form.getFieldsValue()
    this.props.form.validateFields((err, values)=>{
      if(!err){
        message.success(`${userInfo.user}, 你好`)
      }
    })
  }

  render(){
    const { getFieldDecorator } = this.props.form

    return(
      <div className='login-wrapper'>
        <Card title='水平登录栏' bordered={false} hoverable={true}>
          <Form onSubmit={this.handleSubmit} style={{width: '300px'}} {...formItemLayout} >
            <Item label='Username'>
              {getFieldDecorator('user', {
                initialValue: 'yokiijay',
                rules: [
                  { required: true, message: 'Please input your username!' },
                  { min: 5, max:10, message: '长度不在范围内' },
                  { pattern: /^\w+$/g, message: '必须为英文字母' }
                ],
              })(
                <Input prefix={<Icon type='user'></Icon>} placeholder='Username' />
              )}
            </Item>
            <Item label='Passowrd'>
              {getFieldDecorator('psword', {
                rules: [{ required: true, message: 'Please input your password!' }],
              })(
                <Input prefix={<Icon type='lock'></Icon>} type='password' placeholder='Password' />
              )}
            </Item>
            <Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,                
              })(
                <Checkbox>Remember</Checkbox>
              )}
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" >
                Log in
              </Button>
            </Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(Login)
