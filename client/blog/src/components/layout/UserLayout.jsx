import React from 'react';
import { Layout, Menu, Dropdown, Button, Avatar } from 'antd';
import { UserOutlined, HomeOutlined, SearchOutlined, BookOutlined, NotificationOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const UserLayout = () => {
  const menuItems = [
    { key: 'home',  label: 'Blog', path: '/user/blog' },
    { key: 'search',  label: 'Search', path: '/user/search' },
    { key: 'bookmarks',  label: 'Bookmarks', path: '/user/bookmarks' },
    { key: 'subscription',  label: 'Subscription', path: '/user/subscription' },
    { key: 'favorites',  label: 'Favorites', path: '/user/favorites' },
  ];

  const profileMenu = (
    <Menu>
      <Menu.Item key="profile">
        <UserOutlined />
        <Link to="/user/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="edit-profile">
        <UserOutlined />
        <Link to="/user/profile/edit">Edit Profile</Link>
      </Menu.Item>
      <Menu.Item key="change-password">
        <UserOutlined />
        <Link to="/user/profile/change-password">Change Password</Link>
      </Menu.Item>
      <Menu.Item key="subscriptions">
        <NotificationOutlined />
        <Link to="/user/subscription">Subscriptions</Link>
      </Menu.Item>
      <Menu.Item key="social-media">
        <UserOutlined />
        <Link to="/user/social-media">Social Media</Link>
      </Menu.Item>
      <Menu.Item key="feedback">
        <UserOutlined />
        <Link to="/user/feedback">Feedback</Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <LogoutOutlined />
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', padding: '0 20px', display: 'flex', alignItems: 'center' }}>
        <div className="logo" style={{ fontSize: '18px', fontWeight: 'bold', flex: '0 1 auto' }}>
          <Link to="/">Your Blog</Link>
        </div>
        <div style={{ flex: '1', textAlign: 'center' }}>
          <Menu
            theme="light"
            mode="horizontal"
            items={menuItems.map(item => ({
              key: item.key,
              icon: item.icon,
              label: <Link to={item.path}>{item.label}</Link>,
            }))}
            style={{ lineHeight: '64px', display: 'inline-block' }}
          />
        </div>
        <div style={{ flex: '0 1 auto' }}>
          <Dropdown
            overlay={profileMenu}
            trigger={['click']}
            placement="bottomRight"
            arrow
          >
            <Button type="text" icon={<Avatar icon={<UserOutlined />} />} />
          </Dropdown>
        </div>
      </Header>
      <Content style={{ margin: '16px' }}>
        <div style={{ padding: '24px', background: '#fff' }}>
          <Outlet /> {/* This renders child routes */}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2024 Your Blog
      </Footer>
    </Layout>
  );
};

export default UserLayout;
