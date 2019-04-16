import React, { Component, Fragment } from 'react'

// Components
import { Card, Button, Icon, Form, Input, InputNumber, Checkbox, Radio, Select, Switch, DatePicker } from 'antd'
const { Item } = Form

class Register extends Component {
  state = {
    usernameValidation: { type: '', message: '' },
    passwdValidation: { type: '', message: '' },
    gender: 'male',
    loading: false
  }

  handleSubmit = ()=>{
    this.setState({
      loading: true
    },()=>{
      setTimeout(() => {
        this.setState({
          loading: false
        })
      }, 1500);
    })
  }
  usernameInput = (e)=>{
    const { value } = e.target
    const pattern = /^[a-zA-Z]{4,12}$/g   // 4-12位英文字符required
    if (pattern.test(value)) {
      this.setState((state)=>({
        usernameValidation: {...state.usernameValidation, type: 'success', message: ''}   
      }))
    } else {
      this.setState((state)=>({
        usernameValidation: {...state.usernameValidation, type: 'error', message: 'Should be 4-12 words'}
      }))
    }
  }
  passwordInput = ({target:{value}})=>{
    const pattern = /^\w{6,}$/g   // 至少6位数字或英文字符required
    if (pattern.test(value)) {
      this.setState((state)=>({
        passwdValidation: {...state.passwdValidation, type: 'success', message: ''}
      }))
      if(value.length<12) // 少于12位不warning
      this.setState((state)=>({
        passwdValidation: {...state.passwdValidation, type: 'warning', message: 'Too short is not good'}
      }))
    } else {
      this.setState((state)=>({
        passwdValidation: {...state.passwdValidation, type: 'error', message: 'Should be at least 6 words or numbers'}        
      }))
    }
  }
  genderChange = ({target:{value}})=>{
    this.setState({
      gender: value
    })
  }

  render(){
    const {
      usernameValidation,
      passwdValidation,
      gender

    } = this.state

    return(
      <div className='register-wrapper'>
        <Card title='注册表单' bordered={false} hoverable>
          <Form
            className='register-form'
            labelCol={{span:8}}
            wrapperCol={{span:16}}
            style={{
              maxWidth:'300px'
            }}
            onSubmit={this.handleSubmit}
          >
            <Item
              label='Username'
              validateStatus={ usernameValidation.type }
              help={ usernameValidation.message }
              hasFeedback
              required
            >
              <Input onInput={this.usernameInput} prefix={<Icon type='user' />} />
            </Item>
            <Item
              label='Password'
              validateStatus={ passwdValidation.type }
              help={ passwdValidation.message }
              hasFeedback
              required
            >
              <Input onInput={this.passwordInput} type='password' prefix={<Icon type='lock' />} />
            </Item>
            <Item
              label='Gender'
            >
              <Radio.Group onChange={this.genderChange} value={gender}>
                <Radio value='male'>Male</Radio>
                <Radio value='female'>Female</Radio>
              </Radio.Group>
            </Item>
            <Item
              label='Age'
            >
              <InputNumber min={1} max={120}  />
            </Item>
            <Item
              label='Recent Status'
            >
              <Select
                showSearch
                placeholder='Select a motion'
              >
                <Select.Option value='happy'>happy</Select.Option>
                <Select.Option value='sad'>sad</Select.Option>
                <Select.Option value='normal'>normal</Select.Option>
              </Select>
            </Item>
            <Item
              label='favorite'
            >
              <Select
                mode='multiple'
                defaultValue={['eat','sleep']}
              >
                <Select.Option value='drink'>drink</Select.Option>
                <Select.Option value='sport'>sport</Select.Option>
                <Select.Option value='study'>study</Select.Option>
                <Select.Option value='movies'>movies</Select.Option>
              </Select>

            </Item>
            <Item
              label='是否已婚'
            >
              <Switch checkedChildren='已婚' unCheckedChildren='未婚' defaultChecked />
              <Switch loading checkedChildren='Loading' defaultChecked style={{marginLeft:'10px'}} />
            </Item>
            <Item
              label='Select Date'
            >
              <DatePicker />
            </Item>
            <Item
              wrapperCol={{offset: 8}}
            >
              <Button loading={this.state.loading} type='primary' htmlType='submit'>Register</Button>
            </Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Register
