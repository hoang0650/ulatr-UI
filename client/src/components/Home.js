import React, { useState } from "react";
import {Breadcrumb, Row, Col, Divider, Card, Menu } from "antd";
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
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div style={style}>
                            <Menu>
                                <Card  bordered={false} loading={loading}>
                                    Card content
                                </Card>
                            </Menu>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div style={style}>
                            <Menu>
                                <Card  bordered={false} loading={loading}>
                                    Card content
                                </Card>
                            </Menu>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div style={style}>
                            <Menu>
                                <Card  bordered={false} loading={loading}>
                                    Card content
                                </Card>
                            </Menu>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div style={style}>
                            <Menu>
                                <Card  bordered={false} loading={loading}>
                                    Card content
                                </Card>
                            </Menu>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div style={style}>
                            <Menu>
                                <Card  bordered={false} loading={loading}>
                                    Card content
                                </Card>
                            </Menu>
                        </div>
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
        )
    }


export default Home;