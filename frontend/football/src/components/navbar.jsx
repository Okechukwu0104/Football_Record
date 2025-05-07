import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MailOutlined,
  SettingOutlined,
  LogoutOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Menu, Layout, Avatar, Typography, theme } from 'antd';

const { Sider } = Layout;
const { Text } = Typography;

const Navbar = ({ collapsed }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const items = [
    { 
      key: '1', 
      icon: <HomeOutlined />, 
      label: 'Home',
      onClick: () => navigate('/')
    },

    {
      key: 'sub1',
      label: 'Football clubs',
      icon: <DesktopOutlined />,
      children: [
        { key: '2', label: 'France', onClick: () => navigate('/inbox') },
        { key: '3', label: 'Netherlands', onClick: () => navigate('/compose') },
        { key: '4', label: 'Nigeria', onClick: () => navigate('/compose') }

      ],
    },

        
    { 
      key: '5', 
      icon: <PieChartOutlined />, 
      label: 'Create clubs',
      onClick: () => navigate('/create')
    },

    // {
    //   key: 'sub2',
    //   label: 'Create records',
    //   icon: <DesktopOutlined />,
    //   children: [
    //     { key: '5', label: 'France', onClick: () => navigate('/inbox') },
    //     { key: '6', label: 'Netherlands', onClick: () => navigate('/compose') },
    //     { key: '7', label: 'Nigeria', onClick: () => navigate('/compose') }

    //   ],
    // },


    // { 
    //   key: '2', 
    //   icon: <DesktopOutlined />, 
    //   label: 'Football Clubs',
    //   onClick: () => navigate('/create')
    // },

    // {
    //   key: 'sub1',
    //   label: 'Communication',
    //   icon: <MailOutlined />,
    //   children: [
    //     { key: '5', label: 'Inbox', onClick: () => navigate('/inbox') },
    //     { key: '6', label: 'Compose', onClick: () => navigate('/compose') }
    //   ],
    // },
    { 
      key: '11', 
      icon: <LogoutOutlined />, 
      label: 'Logout',
      danger: true,
      onClick: () => console.log('Logging out...')
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      width={250}
      style={{
        background: colorBgContainer,
        height: '100vh',
        position: 'sticky',
        top: 0,
        left: 0,
        boxShadow: '2px 0 8px 0 rgba(29, 35, 41, 0.05)'
      }}
    >
      <div style={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        borderBottom: '1px solid #f0f0f0'
      }}>
        {/* <Avatar 
          size={collapsed ? 40 : 64} 
          icon={<UserOutlined />} 
          style={{ backgroundColor: '#
          1890ff' }}
        /> */}


        
        {!collapsed && (
          <>
            <Text strong>John Doe</Text>
            <Text type="secondary">Admin</Text>
          </>
        )}
      </div>
      
      <Menu
        theme="light"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
        style={{
          borderRight: 0,
          padding: '0 8px'
        }}
      />
    </Sider>
  );
};

export default Navbar;