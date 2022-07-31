import { Menu, Image, Input, Button } from 'antd';
import { NotificationOutlined, MessageOutlined, UserAddOutlined, SearchOutlined } from '@ant-design/icons';
import React from 'react';
const { SubMenu } = Menu;
class Navbar extends React.Component{
    state = {
        current: 'logo',
    }
    handleClick = e => {
        console.log('click',e);
        this.setState({ current: e.key})
    }

    render() {
        const { current } = this.state;
        return (
          <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
            <Menu.Item key="logo">
                <Image height={45} width={50} src="https://ulatroi.net/themes/wondertag/img/logo.png"/>
            </Menu.Item>
            <Menu.Item key="search">
              <Input size="large"  placeholder="Search for people, pages, groups and #hashtags" prefix={<SearchOutlined />} />
            </Menu.Item>

            <Menu.Item>
              <Button type="dashed" shape="circle" size="large" icon={<UserAddOutlined />}></Button>
              <Button type="primary" size="large" shape="circle" icon={<MessageOutlined />}></Button>
              <Button type="dashed" shape="circle" size="large" icon={<NotificationOutlined />}></Button>
              <Button type="primary" shape="circle" size="large">4</Button>
            </Menu.Item>
          </Menu>
        );
    }
}

export default Navbar;