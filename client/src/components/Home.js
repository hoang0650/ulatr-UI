import React, { useState } from "react";
import { Breadcrumb, Image, Row, Col, Divider, Card, Menu, Button, Badge, Avatar, Layout, Input, Space, Typography } from "antd";
import { SwapOutlined, SearchOutlined, AlignLeftOutlined, SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';
import styles from '../styles/home.css';
import SiderLeft from '../components/SiderLeft';
import SiderRight from '../components/SiderRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faCrown, faChevronDown, faUserTie, faTree, faCamera, faVideo, faMusic, faFile, faMap, faPlus, faThumbsUp, faComment, faShare } from '@fortawesome/fontawesome-free-solid'

const { Header, Content, Sider } = Layout;
const { Meta } = Card;
const style = {
    background: 'none',
    padding: '8px 0',
    outerHeight: '140px'
};


const Home = () => {
    const [loading, setLoading] = useState(true);

    const onChange = (checked) => {
        setLoading(!checked);
    };

    return (
        <div>
            <Header className="App-header">
                <Navbar />
            </Header>
            <Layout style={{ background: "#f9f9f9" }}>
                <SiderLeft ></SiderLeft>
                <Content className='site-layout-background'>

                    <div style={{ margin: '16px 0 16px 15px' }}>
                        <Typography style={{ textAlign: 'left', fontSize: 25, fontWeight: 500, color: '#3f51b5', marginBottom: 10 }}>Good evening, hoang0605</Typography>
                        <Row gutter={[24, 8]}>
                            <Col className="gutter-row" span={4}>
                                <div style={style}>
                                    <Menu>
                                        <Card bordered={false} loading={loading}>
                                            Card content
                                            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
                                        </Card>

                                    </Menu>

                                    <Button shape="circle" size="large" icon={<FontAwesomeIcon icon={faPlus} />}></Button>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={4}>
                                <div style={style}>
                                    <Menu>
                                        <Card bordered={false} loading={loading}>
                                            Card content
                                        </Card>

                                    </Menu>
                                    <Button shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie} />}></Button>
                                    {/*  */}

                                </div>
                            </Col>
                            <Col className="gutter-row" span={4}>
                                <div style={style}>
                                    <Menu>
                                        <Card bordered={false} loading={loading}>
                                            Card content
                                        </Card>
                                    </Menu>

                                    <Button shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie} />}></Button>
                                    {/* <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} /> */}
                                </div>
                            </Col>
                            <Col className="gutter-row" span={4}>
                                <div style={style}>
                                    <Menu>
                                        <Card bordered={false} loading={loading}>
                                            Card content
                                        </Card>
                                    </Menu>
                                    <Button shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie} />}></Button>
                                    {/* <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} /> */}
                                </div>
                            </Col>
                            <Col className="gutter-row" span={4}>
                                <div style={style}>
                                    <Menu>
                                        <Card bordered={false} loading={loading}>
                                            Card content
                                        </Card>
                                    </Menu>
                                    <Button shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie} />}></Button>
                                    {/* <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} /> */}
                                </div>
                            </Col>
                            <Col className="gutter-row" span={4}>
                                <div style={style}>
                                    <Menu>
                                        <Card bordered={false} loading={loading}>
                                            Card content
                                        </Card>
                                    </Menu>
                                    <Button shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie} />}></Button>
                                    {/* <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" style={{zIndex:3,marginTop:10,marginBottom:10}} /> */}
                                </div>
                            </Col>
                        </Row>
                        <Divider style={{ margin: "10px 0" }}></Divider>
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
                            <Col span={16} style={{ width: "60%", padding: "10px 10px 10px 0px" }}>

                                {/* <Space>
                                    <Card>
                                        <Space>
                                            <Button style={{marginLeft:"0px",color:'#ffffff',backgroundColor:'#333333',border:0,marginBottom:10}} type="primary" shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie} />}></Button>
                                            <Input prefix={ <SearchOutlined/> }  style={{ borderRadius:"2em", border:0,padding:"10px 19px 10px 19px"}}  size="large" color='#ffffff' inputMode="search"  placeholder="What's going on? #Hashtag.. @Mention.. Link.."  />
                                            <Button style={{marginLeft:"0px",color:'#ffffff',backgroundColor:'#333333',border:0,marginBottom:10}} type="primary" shape="circle" size="large" icon={<FontAwesomeIcon icon={faUserTie} />}></Button>

                                        </Space>
                                    </Card>
                                </Space> */}

                                <Card style={{ marginBottom: 20, borderWidth: 1, borderColor: 'sliver', borderRadius: 10 }}>
                                    <Menu mode="horizontal" style={{ backgroundColor: "transparent", border: 0 }}>
                                        <Menu.Item>
                                            <Avatar style={{ width: 50, height: 50 }} src="https://joeschmoe.io/api/v1/random" />
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Input style={{ backgroundColor: '#ebeef0', borderRadius: 10, border: 0, width: '500px', height: 50, padding: "10px 19px 10px 19px", color: 'black' }} size="large" color='black' inputMode="search" placeholder="What's going on? #Hashtag.. @Mention.. Link.." />
                                        </Menu.Item>
                                        <Menu.Item style={{ alignItems: 'center' }}>
                                            <Button style={{ marginLeft: "0px", color: '#4caf50', backgroundColor: '#ebeef0', border: 0 }} type="primary" shape="circle" size="large" icon={<FontAwesomeIcon icon={faCamera} />}></Button>
                                        </Menu.Item>
                                    </Menu>
                                </Card>

                                <Card style={{ padding: "10px 0px", borderWidth: 1, borderColor: 'sliver', borderRadius: 10 }} actions={[
                                    <span><FontAwesomeIcon icon={faThumbsUp} key="like" /> Like </span>,
                                    <span><FontAwesomeIcon icon={faComment} key="comment" /> Comments </span>,
                                    <span><FontAwesomeIcon icon={faShare} key="share" /> Shares </span>,
                                ]}>
                                    <Button style={{ zIndex: 10, float: 'right', paddingBottom: 20 }} shape="circle" size="large"><Space><FontAwesomeIcon icon={faChevronDown} /></Space></Button>
                                    <Meta avatar={<Avatar style={{ width: 60, height: 60 }} src="https://joeschmoe.io/api/v1/random" />}
                                        title="Phan Hoàng"
                                        description="4d | Translate"

                                    />

                                    <img style={{ marginTop: 30, marginBottom: 10, width: 700, height: 400 }} alt="example" src="https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg" />
                                </Card>

                            </Col>


                            <Col span={8} style={{ width: "60%", padding: "10px 10px 10px 0px" }}>
                                <Card style={{ padding: "10px 0px", borderWidth: 1, borderColor: 'sliver', borderRadius: 10 }}>
                                    <div style={{ width: '319px', height: '48px', alignSelf: 'center' }}>
                                        <Typography style={{ fontSize: '18px', fontWeight: 500, textAlign: 'left' }}>
                                            <FontAwesomeIcon icon={faCrown} key="pro" size="sm" style={{
                                                backgroundColor: '#ff7043', color: 'white', borderRadius: 30, width: 14, height: 14, marginRight: 10, padding: 3
                                            }} />
                                            Pro Members
                                        </Typography>
                                    </div>


                                    <Card style={{ margin: '0px 0px 10px', width: '100%', height: '123px', background: '#ffd5c8', borderRadius: 10 }}>
                                        <p style={{ fontSize: '14px', textAlign: 'left', fontWeight: 500, color: '#212529' }} >Upgrade To Pro & Put Me There</p>
                                        {/* <Image style={{width:80,float:'right',verticalAlign:'middle'}} src="https://ulatroi.net/themes/wondertag/img/pro-me.png"/> */}
                                        <Button style={{ fontSize: '14px', float: 'left', background: '#ff7043', color: 'white', borderRadius: '4px', border: 0, fontWeight: 500 }} size="large">Upgrade</Button>
                                    </Card>
                                    <Row style={{ marginTop: 20 }}>
                                        <Col span={7}>
                                            <Card style={{ borderRadius: 10, borderWidth: 1, height: 120 }}>
                                                <Image style={{ width: '50px', height: '50px', borderRadius: 10, }} src="https://cdn.ulatroi.net/ftp/upload/photos/2022/06/nKxv3SakifDjmG8H6baL_25_47076d77cb9c22a90e3a3a9b46eb7374_avatar.jpg?cache=0" />
                                                <p style={{ fontSize: '13px', fontWeight: 500, color: '#666666' }} >demouse</p>
                                            </Card>
                                        </Col>
                                        <Col span={7} style={{ marginLeft: 10 }}>
                                            <Card style={{ borderRadius: 10, borderWidth: 1, height: 120 }}>
                                                <Image style={{ width: '50px', height: '50px', borderRadius: 10, }} src="https://cdn.ulatroi.net/ftp/upload/photos/2022/06/nKxv3SakifDjmG8H6baL_25_47076d77cb9c22a90e3a3a9b46eb7374_avatar.jpg?cache=0" />
                                                <p style={{ fontSize: '13px', fontWeight: 500, color: '#666666' }} >demouse</p>
                                            </Card>
                                        </Col>
                                        <Col span={7} style={{ marginLeft: 10 }}>
                                            <Card style={{ borderRadius: 10, borderWidth: 1, height: 120 }}>
                                                <Image style={{ width: '50px', height: '50px', borderRadius: 10, }} src="https://cdn.ulatroi.net/ftp/upload/photos/2022/06/nKxv3SakifDjmG8H6baL_25_47076d77cb9c22a90e3a3a9b46eb7374_avatar.jpg?cache=0" />
                                                <p style={{ fontSize: '13px', fontWeight: 500, color: '#666666' }} >demouse</p>
                                            </Card>
                                        </Col>
                                    </Row>

                                    <Row style={{ marginTop: 10 }}>
                                        <Col span={7}>
                                            <Card style={{ borderRadius: 10, borderWidth: 1, height: 120 }}>
                                                <Image style={{ width: '50px', height: '50px', borderRadius: 10, }} src="https://cdn.ulatroi.net/ftp/upload/photos/f-avatar.jpg?cache=0" />
                                                <p style={{ fontSize: '13px', fontWeight: 500, color: '#666666' }} >demouse</p>
                                            </Card>
                                        </Col>
                                        <Col span={7} style={{ marginLeft: 10 }}>
                                            <Card style={{ borderRadius: 10, borderWidth: 1, height: 120 }}>
                                                <Image style={{ width: '50px', height: '50px', borderRadius: 10, }} src="https://cdn.ulatroi.net/ftp/upload/photos/f-avatar.jpg?cache=0" />
                                                <p style={{ fontSize: '13px', fontWeight: 500, color: '#666666' }} >demouse</p>
                                            </Card>
                                        </Col>
                                        <Col span={7} style={{ marginLeft: 10 }}>
                                            <Card style={{ borderRadius: 10, borderWidth: 1, height: 120 }}>
                                                <Image style={{ width: '50px', height: '50px', borderRadius: 10, }} src="https://cdn.ulatroi.net/ftp/upload/photos/f-avatar.jpg?cache=0" />
                                                <p style={{ fontSize: '13px', fontWeight: 500, color: '#666666' }} >demouse</p>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card>


                                <Col span={26} style={{ width: "100%", padding: "10px 10px 10px 0px" }}>
                                    <Card style={{ borderRadius: 10, borderWidth: 1 }}>
                                        <Typography style={{ fontSize: '15px', fontWeight: 500, textAlign: 'left' }}>
                                            Pages you may like  <a style={{float:'right'}}>Refresh</a>
                                        </Typography>
                                        <Image style={{borderRadius: 10,marginTop:10 }} src="https://cdn.ulatroi.net/ftp/upload/photos/d-cover.jpg" />
                                        <Row style={{marginTop:10}}>
                                        <Col span={8}>
                                        <Avatar shape="circle"  style={{width:100,height:100,float:'left'}} src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" size="large" />
                                        </Col>
                                    
                                       <Col span={8} style={{marginTop:10}}>
                                       <Typography style={{ fontSize: '18px', fontWeight: 500,float:'left'}}>Xem cl <Badge><FontAwesomeIcon icon={faCheck} key="check" size="sm" style={{
                                                backgroundColor: '#a52729', color: 'white', borderRadius: 30, width: 14, height: 14, marginRight: 10, padding: 3
                                            }} /></Badge></Typography>
                                        <Button style={{ marginTop:15,float:'left',paddingLeft:10,fontSize: '14px',background: '#ebeef0', color: '#212529', borderRadius: '4px', border: 0, fontWeight: 500 }} size="large"><FontAwesomeIcon icon={faThumbsUp} key="like" style={{marginRight:10}} />Like</Button>
                                       </Col>
                                       </Row>
                                      
                                      
                                    </Card>
                                 
                                </Col>

                                <Col span={26} style={{ width: "100%", padding: "10px 10px 10px 0px" }}>
                                    <Card style={{ borderRadius: 10, borderWidth: 1 }}>
                                        <Typography style={{ fontSize: '15px', fontWeight: 500, textAlign: 'left' }}>
                                            Suggested groups  <a style={{float:'right'}}>Refresh</a>
                                        </Typography>
                                        <Image style={{borderRadius: 10,marginTop:10 }} src="https://cdn.ulatroi.net/ftp/upload/photos/d-cover.jpg" />
                                
                                       <Typography style={{ fontSize: '18px', fontWeight: 500,marginTop:10,float:'left'}}>U Là Trời</Typography> 
                                       <p style={{marginLeft:10,fontSize: '18px', fontWeight: 100,marginTop:10,float:'left'}}>1 Members</p>
                                        <Button style={{width:'100%',textAlign:'center',fontSize: '14px',background: 'pink', color: '#a52729', borderRadius: '4px', border: 0, fontWeight: 500,marginRight:40 }} size="large">Join</Button>
                                      
                                      
                                    </Card>
                                 
                                </Col>

                                <Col span={26} style={{ width: "100%", padding: "10px 10px 10px 0px" }}>
                                    <Card style={{ borderRadius: 10, borderWidth: 1 }}>
                                        <Typography style={{ fontSize: '15px', fontWeight: 500, textAlign: 'left' }}>
                                            Lasted Products  <a style={{float:'right'}}>See All</a>
                                        </Typography>
                                      
                                        <Row style={{marginTop:10}}>
                                       
                                       <Col span={8} style={{marginTop:10}}>
                                       <Image  style={{borderRadius: 10,marginTop:10,width:100,height:100,float:'left' }} src="https://tea-3.lozi.vn/v1/images/resized/kfc-ha-long-kenh-liem-thanh-pho-ha-long-quang-ninh-1631703444490124202-eatery-avatar-1634265211?w=640&type=s" />
                                       <Typography style={{ fontSize: '18px', fontWeight: 500,textAlign:'center'}}>Chicken</Typography>
                                       <p style={{marginLeft:10,fontSize: '18px', fontWeight: 100,marginTop:10,float:'left'}}>250.000 vnđ</p>
                                       </Col>
                                       </Row>
                                      
                                      
                                    </Card>
                                 
                                </Col>

                            </Col>


                        </Row>



                    </div>
                </Content>
                <Sider width={80} style={{ marginLeft: 20, float: "right", maxWidth: 0, backgroundColor: "transparent" }}> <SiderRight /></Sider>
            </Layout>
        </div>
    )
}


export default Home;


