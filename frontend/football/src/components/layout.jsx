import { Layout } from 'antd';
import { useState } from 'react';
import Navbar from './navbar';
import AppHeader from './header';

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar collapsed={collapsed} />
      <Layout>
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout.Content style={{ 
          margin: '24px 16px', 
          padding: 24,
          background: '#fff',
          minHeight: 280,
          borderRadius: 8
        }}>
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;