import React, { useState } from "react";
import {Breadcrumb, Row, Col, Divider, Card, Menu, Button, Badge,Avatar, Layout, Input, Space } from "antd";
import { SwapOutlined, SearchOutlined, AlignLeftOutlined, SettingOutlined,EditOutlined,EllipsisOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';
import styles from '../styles/home.css';
import SiderLeft from '../components/SiderLeft';
import SiderRight from '../components/SiderRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie,faTree, faCamera, faVideo, faMusic, faFile, faMap, faPlus, faThumbsUp, faComment, faShare} from '@fortawesome/fontawesome-free-solid'

const {Header,Content,Sider} = Layout;
const {Meta} = Card;
const style = {
    background: 'none',
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
            <Layout style={{background:"none"}}>
                <SiderLeft ></SiderLeft>     
                <Content className='site-layout-background'>   
          
                <div style={{margin: '16px 0 16px 15px',}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Good morning, hoang0650</Breadcrumb.Item>
                        
                    </Breadcrumb>
                    <Row gutter={[24,8]}>
                        <Col className="gutter-row" span={4}>
                            <div style={style}>
                                <Menu>                              
                                    <Card  bordered={false} loading={loading}>
                                        Card content
                                        {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
                                    </Card>
                                
                                </Menu>
                            
                                <Button shape="circle" size="large" icon={<FontAwesomeIcon icon={faPlus}/>}></Button>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style}>
                                <Menu>
                                    <Card  bordered={false} loading={loading}>
                                        Card content
                                    </Card>
                                
                                </Menu>
                                <Button shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie}/>}></Button>
                                {/* <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} /> */}
                            
                            </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style}>
                                <Menu>
                                    <Card  bordered={false} loading={loading}>
                                        Card content
                                    </Card>
                                </Menu>
                                <Button shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie}/>}></Button>
                                {/* <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} /> */}
                            </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style}>
                                <Menu>
                                    <Card  bordered={false} loading={loading}>
                                        Card content
                                    </Card>
                                </Menu>
                                <Button shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie}/>}></Button>
                                {/* <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} /> */}
                            </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style}>
                                <Menu>
                                    <Card  bordered={false} loading={loading}>
                                        Card content
                                    </Card>
                                </Menu>
                                <Button shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie}/>}></Button>
                                {/* <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} /> */}
                            </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style}>
                                <Menu>
                                    <Card  bordered={false} loading={loading}>
                                        Card content
                                    </Card>
                                </Menu>
                                <Button shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie}/>}></Button>
                                {/* <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} /> */}
                            </div>
                        </Col>
                    </Row>
                    <Divider style={ { margin: "10px 0"}  }></Divider>
                        <Space>
                                <Button shape="round" size="large" icon={<SwapOutlined />}></Button>
                           
                                <Button shape="round" size="large"><Space><FontAwesomeIcon icon={faTree} />All</Space></Button>
                            
                                <Button shape="round" size="large" icon={<AlignLeftOutlined />}>Text</Button>
                           
                                <Button shape="round" size="large"><Space><FontAwesomeIcon icon={faCamera} />Photos</Space> </Button>
                            
                                <Button shape="round" size="large"><Space><FontAwesomeIcon icon={faVideo} />Videos</Space></Button>
                            
                                <Button shape="round" size="large"><Space><FontAwesomeIcon icon={faMusic} />Sounds</Space></Button>
                            
                                <Button shape="round" size="large"><Space><FontAwesomeIcon icon={faFile} />Files</Space></Button>
                          
                                <Button shape="round" size="large"><Space><FontAwesomeIcon icon={faMap} />Maps</Space></Button>

                        </Space>

                        <Row>
                            <Col span={16} style={{width:"60%",padding:"10px 10px 10px 0px"}}>

                                {/* <Space>
                                    <Card>
                                        <Space>
                                            <Button style={{marginLeft:"0px",color:'#ffffff',backgroundColor:'#333333',border:0,marginBottom:10}} type="primary" shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie} />}></Button>
                                            <Input prefix={ <SearchOutlined/> }  style={{ borderRadius:"2em", border:0,padding:"10px 19px 10px 19px"}}  size="large" color='#ffffff' inputMode="search"  placeholder="What's going on? #Hashtag.. @Mention.. Link.."  />
                                            <Button style={{marginLeft:"0px",color:'#ffffff',backgroundColor:'#333333',border:0,marginBottom:10}} type="primary" shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie} />}></Button>

                                        </Space>
                                    </Card>
                                </Space> */}

                                <Card style={{padding:"10px 10px 10px 0px"}}>
                                <Menu mode="horizontal">
                                        <Menu.Item style={{alignItems:"center"}}> 
                                            <Button style={{marginLeft:"0px",color:'#ffffff',backgroundColor:'#333333',border:0,marginBottom:10}} type="primary" shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie} />}></Button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Input prefix={ <SearchOutlined/> }  style={{borderRadius:"2em", border:0,padding:"10px 19px 10px 19px"}}  size="large" color='#ffffff' inputMode="search"  placeholder="What's going on? #Hashtag.. @Mention.. Link.."  />
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Button style={{marginLeft:"0px",color:'#ffffff',backgroundColor:'#333333',border:0,marginBottom:10}} type="primary" shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie} />}></Button>
                                        </Menu.Item>
                                </Menu>

                                </Card>

                                <Card style={{padding:"10px 0px"}} actions={[
                                <FontAwesomeIcon icon={faThumbsUp} key="like" />,
                                <FontAwesomeIcon icon={faComment} key="comment" />,
                                <FontAwesomeIcon icon={faShare} key="share" />,
                                ]}>
                                    <Meta avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                    title="Phan Hoàng"
                                    description="vừa cập nhật ảnh của anh ấy"
                                    
                                    />
                                    <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
                                </Card>

                            </Col>
                            <Col span={8} style={{width:"60%",padding:"10px 10px 10px 0px"}}>
                                <Card>col-12</Card>
                            </Col>
                        </Row>                 
                     
                      

                </div>
                </Content>
                <Sider width={80}  style={{marginLeft:20,float:"right",maxWidth:0, backgroundColor:"transparent"}}> <SiderRight/></Sider>
        </Layout>
        </div>
        )
    }


export default Home;


         