import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu,Image, Row, Col } from 'antd';
import React from 'react';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Me', 'sub1', '', [
    getItem('News Feed', 'new'),
    getItem('Albums', 'album'),
    getItem('Saved Posts', 'post'),
  ]),
  getItem('Community', 'sub2', '', [
    getItem('Events', 'event'),
    getItem('Market', 'market'),
    getItem('My Products', 'product'),
    getItem('My Group', 'group'),
    getItem('My Pages', 'page'),
  ]),
  getItem('Navigation Three', 'sub3', '', [
    getItem('Explore', 'explore'),
    getItem('Popular Posts', 'ppost'),
    getItem('Movies', 'movie'),
    getItem('Offers', 'offer'),
    getItem('Memories', 'memory'),
    getItem('Find Friends', 'find'),
    getItem('Common Things', 'common'),
    getItem('Fundings', 'fund'),
  ]),
];

const SiderLeft = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
      <Menu onClick={onClick}
      style={{
        width: "200px", overflowY:"auto",overscrollBehaviorX:"none"
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    >
      
      
      {/* <Row gutter={[16,8]}>
        <Col className="gutter-row" span={2}>
        </Col>
        <Col className="gutter-row" span={2}>
        </Col>
      </Row> */}
    </Menu>

    
  );
};

export default SiderLeft;