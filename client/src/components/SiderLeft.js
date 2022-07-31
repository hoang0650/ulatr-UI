import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu,Image } from 'antd';
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
  getItem('Me', 'sub1', <MailOutlined />, [
    getItem('News Feed', '5',<Image src="https://ulatroi.net/themes/wondertag/img/logo.png"/>),
    getItem('Albums', '5'),
    getItem('Saved Posts', '5'),
  ]),
  getItem('Community', 'sub2', <AppstoreOutlined />, [
    getItem('Events', '5'),
    getItem('Market', '5'),
    getItem('My Products', '5'),
    getItem('My Group', '5'),
    getItem('My Pages', '5'),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Explore', '5'),
    getItem('Popular Posts', '5'),
    getItem('Movies', '5'),
    getItem('Offers', '5'),
    getItem('Memories', '5'),
    getItem('Find Friends', '5'),
    getItem('Common Things', '5'),
    getItem('Fundings', '5'),
  ]),
];

const SiderLeft = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
      <Menu
      onClick={onClick}
      style={{
        width: "100%",
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />

    
  );
};

export default SiderLeft;