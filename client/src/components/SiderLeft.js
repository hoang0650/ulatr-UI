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
  getItem('Explore', 'sub3', '', [
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
    <div style={{  width: '230px',height: '500px',backgroundColor: '#ffffff'}}>
      <Menu onClick={onClick}
      style={{
        width: "200px", marginLeft: 'auto', marginRight:'auto', marginTop:10, backgroundColor: 'silver',borderRadius:10, marginBlock:10,fontWeight:'bold'
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}>
        <Menu.Item>
          <Row gutter={[16,8]}>
            <Col span={12} items={'News Feed'}/>
            <Col span={12} items={'News Feed'}/>
            <Col span={12} items={'News Feed'}/>
          </Row>
        </Menu.Item>
        <Menu.Item to='sub1' key = 'new'>
        <Image src="https://static.vecteezy.com/system/resources/thumbnails/002/002/300/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"></Image>
        </Menu.Item>
      </Menu>
</div>
  );
};

      
export default SiderLeft;
    
