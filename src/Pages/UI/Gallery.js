import React, { Component, Fragment } from 'react'
import { Card, Row, Col } from 'antd'

// Components

class Gallery extends Component {
  render(){
    const imgs = [
      ['1.png','2.png','3.png','4.png','5.png'],
      ['6.png','7.png','8.png','9.png','10.png'],
      ['11.png','12.png','13.png','14.png','15.png'],
      ['16.png','17.png','18.png','19.png','20.png'],
      ['21.png','22.png','23.png','24.png','25.png'],
    ]
    const imgList = imgs.map((val)=>(
      val.map((item)=>(
        	<Card bordered={false} hoverable cover={<img src={`/gallery/${item}`} />}>
            <Card.Meta
              title='React Admin'
              description='Sleep, Eat, Code.'
            />
          </Card>
      ))
    ))
    return(
      <div className='gallery-wrapper'>
        <Row gutter={24}>
          {
            imgs.map((val,index)=>(
              <Col key={index} span={4}>
                {
                  val.map((item,index)=>(
                    <Card key={item} bordered={false} hoverable cover={<img src={`/gallery/${item}`}/>}>
                      <Card.Meta
                        title='React Admin'
                        description='Sleep, Eat, Code.'
                      />
                    </Card>
                  ))
                }
              </Col>	
            ))
          }
        </Row>
      </div>
    )
  }
}

export default Gallery
