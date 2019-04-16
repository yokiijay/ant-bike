import React, { Component, Fragment } from 'react'

// Components
import { Card, Tabs, Icon, message, Radio } from 'antd'
const { TabPane } = Tabs

class Tab extends Component {
  state = {
    mode: 'top',
    size: 'default',
    activeKey: '4',
    panes: [
      {
        title: 'Tab 1',
        key: '4',
        content:'Content of Tab 1'
      },
      {
        title: 'Tab 2',
        key: '5',
        content:'Content of Tab 2'
      },
      {
        title: 'Tab 3',
        key: '6',
        content:'Content of Tab 3'
      },
      {
        title: 'Tab 4',
        key: '7',
        content:'Content of Tab 4'
      },
      {
        title: 'Tab 5',
        key: '8',
        content:'Content of Tab 5'
      },
      {
        title: 'Tab 6',
        key: '9',
        content:'Content of Tab 6'
      },
    ]
  }

  handleTabs = (key)=>{
    message.info(`current tab is ${key}`)
  }
  handleMode = (e)=>{
    const mode = e.target.value
    this.setState({ mode })
  }
  handleSize = (e)=>{
    const size = e.target.value
    this.setState({ size })
  }
  onChange = (activeKey)=>{
    this.setState({ activeKey })
  }
  onEdit = (targetKey, action)=>{
    this[action](targetKey)
  }
  add = ()=>{
    const newPane = { title:'New Tab', key: new Date().getTime().toString(), content: 'New content' }
    this.setState((state)=>({
      ...state,
      panes: [...state.panes, newPane]
    }))
  }
  remove = (targetKey)=>{
    let activeKey = this.state.activeKey
    let lastIndex
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1
      }
    })
    const panes = this.state.panes.filter(pane => pane.key !== targetKey)
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key
      } else {
        activeKey = panes[0].key
      }
    }
    this.setState({ panes, activeKey })
  }

  render(){
    return(
      <div className='tab-wrapper'>
        <Card title='基本标签页' bordered={false} hoverable={false}>
          <Radio.Group onChange={this.handleMode} style={{marginBottom: '20px'}} defaultValue='top'>
            <Radio.Button value='top'>horizontal</Radio.Button>
            <Radio.Button value='left'>vertical</Radio.Button>
          </Radio.Group> <br/>
          <Radio.Group onChange={this.handleSize} style={{marginBottom: '20px'}} defaultValue='default'>
            <Radio.Button value='small'>small</Radio.Button>
            <Radio.Button value='default'>default</Radio.Button>
            <Radio.Button value='large'>large</Radio.Button>
          </Radio.Group>

          <Tabs
            defaultActiveKey='1'
            onChange={this.handleTabs}
            tabPosition={this.state.mode}
            size={this.state.size}
          >
            <TabPane tab={<span><Icon type='home' />Tab 1</span>} key='1'> content of Tab pane 1 </TabPane>
            <TabPane tab={<span><Icon type='setting' />Tab 2</span>} key='2'> content of Tab pane 2 </TabPane>
            <TabPane tab={<span><Icon type='inbox' />Tab 3</span>} key='3'> content of Tab pane 3 </TabPane>
          </Tabs>
        </Card>

        <Card title='卡片式标签页' bordered={false} hoverable={true}>
          <Tabs
            onChange={this.onChange}
            defaultActiveKey='4'
            type='editable-card'
            onEdit={this.onEdit}
          >
            { this.state.panes.map((val,index)=>(
              <TabPane tab={val.title} key={val.key} closable={true}>{val.content}</TabPane>	
            )) }
          </Tabs>
        </Card>
      </div>
    )
  }
}

export default Tab
