/* Admin */
import React, { Component } from 'react'
import './theme.less'
import './style.less'

// Components
import Header from './Components/Header'
import Content from './Components/Content'
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

        <Layout>
          <Header collapsed={this.state.collapsed} />
          <Content />
          <Footer />
        </Layout>
      </Layout>
    )
  }
}

export default App
