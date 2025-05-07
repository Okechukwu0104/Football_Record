import React from 'react';
import image from '../assets/football.png';

import { 
  MenuFoldOutlined, 
  MenuUnfoldOutlined,
  BellOutlined,
  SearchOutlined,
  UserOutlined,
  DownOutlined
} from '@ant-design/icons';
import { Layout, Input, Avatar, Badge, Dropdown, Menu, Button } from 'antd';
const { Header } = Layout;

const AppHeader = ({ collapsed, setCollapsed }) => {
  const userMenu = (
    <Menu
      items={[
        { key: '1', label: 'Profile', icon: <UserOutlined /> },
        { key: '2', label: 'Settings' },
        { type: 'divider' },
        { key: '3', label: 'Logout', danger: true }
      ]}
    />
  );

  return (
    <Header style={{ 
      padding: 0,
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 1px 4px 0 rgba(0, 21, 41, 0.12)',
      position: 'sticky',
      top: 0,
      zIndex: 1,
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />

        <img src={image} alt="Logo" style={{ width: 140, height: 60, marginLeft: 16 }} />

        <Input
          placeholder="Search..."
          prefix={<SearchOutlined />}
          style={{ width: 200, borderRadius: 4 }}
        />

      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16, paddingRight: 24 }}>
        <Badge count={5}>
          <Button type="text" icon={<BellOutlined />} shape="circle" />
        </Badge>
        
        <Dropdown overlay={userMenu} trigger={['click']}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <Avatar icon={<UserOutlined />} size="small" />
            <span>Admin</span>
            <DownOutlined style={{ fontSize: 12 }} />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;