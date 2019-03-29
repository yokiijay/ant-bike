/* Admin */
import React, { Component } from 'react'
import './style.less'

// Components
import Header from './Components/Header'
import Footer from './Components/Footer'
import NavLeft from './Components/NavLeft'
import {
  Layout
} from 'antd'

class App extends Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render(){
    return(
      <Layout className='main'>
        <NavLeft
					collapsed={this.state.collapsed}
					toggle={this.toggle}
        />

        <Layout className='right'>
          <Header collapsed={this.state.collapsed} />
          <Layout.Content
            style={{margin: '24px 16px', padding: 24, minHeight: 280}}
          >
            { this.props.children }
          </Layout.Content>
          <Footer />
        </Layout>
      </Layout>
    )
  }
}

export default App
