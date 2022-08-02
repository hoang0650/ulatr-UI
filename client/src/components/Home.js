import React, { useState } from "react";
import {Breadcrumb, Row, Col, Divider, Card, Menu, Button, Badge,Avatar } from "antd";
import Navbar from '../components/Navbar';
import SiderLeft from '../components/SiderLeft';
import SiderRight from '../components/SiderRight';
import { Layout } from 'antd';
const {Header,Content,Sider} = Layout;
const {Meta} = Card;
const style = {
    background: '#0092ff',
    padding: '8px 0',
    outerHeight: '140px'
  };


const Home = ()=>{
    const [loading, setLoading] = useState(true);

    const onChange = (checked) => {
        setLoading(!checked);
    };

        return(
            <div>
            <Header className="App-header">
          <Navbar />
        </Header>
        <Layout>
           <SiderLeft></SiderLeft>     
          <Content className='site-layout-background'>   
          
            <div style={{margin: '16px 0 16px 15px',}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Good morning, hoang0650</Breadcrumb.Item>
                    
                </Breadcrumb>
                {/* <SiderLeft/>
                <div> */}
                <Row gutter={[16,8]}>
                    <Col className="gutter-row" span={4}>
                        <div style={style}>
                            <Menu>                              
                                <Card  bordered={false} loading={loading}>
                                    Card content
                                    {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
                                </Card>
                            
                            </Menu>
                          
                        </div>
                       <Button style={{borderRadius:100,height:40, zIndex:3,marginTop:10,marginBottom:10}}>+</Button>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div style={style}>
                            <Menu>
                                <Card  bordered={false} loading={loading}>
                                    Card content
                                </Card>
                              
                            </Menu>
                          
                        </div>
                        <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} />
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div style={style}>
                            <Menu>
                                <Card  bordered={false} loading={loading}>
                                    Card content
                                </Card>
                            </Menu>
                        </div>
                        <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} />
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div style={style}>
                            <Menu>
                                <Card  bordered={false} loading={loading}>
                                    Card content
                                </Card>
                            </Menu>
                        </div>
                        <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} />
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div style={style}>
                            <Menu>
                                <Card  bordered={false} loading={loading}>
                                    Card content
                                </Card>
                            </Menu>
                        </div>
                        <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} />
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div style={style}>
                            <Menu>
                                <Card  bordered={false} loading={loading}>
                                    Card content
                                </Card>
                            </Menu>
                        </div>
                        <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} />
                    </Col>
                </Row>
                <Divider></Divider>
                    <Menu mode="horizontal">
                        <Menu.Item>
                            1
                        </Menu.Item>
                        <Menu.Item>
                            2
                        </Menu.Item>
                    </Menu>

                {/* </div> */}
                {/* </Content> */}
            </div>

            </Content>

         
  <Sider  style={{marginLeft:20,float:"right",maxWidth:0, backgroundColor:"transparent"}}> <SiderRight/></Sider>
        </Layout>
        </div>
        )
    }


export default Home;