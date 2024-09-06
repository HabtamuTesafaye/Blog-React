import { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  DashboardOutlined,
  FileTextOutlined,
  UserOutlined,
  CommentOutlined,
  FolderOutlined,
  PictureOutlined,
  LineChartOutlined,
  ToolOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;

// Map paths to breadcrumb names
const breadcrumbNameMap = {
  '/admin/dashboard': 'Dashboard',
  '/admin/posts': 'Post Management',
  '/admin/posts/create': 'Create Post',
  '/admin/posts/edit': 'Edit Post',
  '/admin/posts/schedule': 'Schedule Post',
  '/admin/users': 'User Management',
  '/admin/users/edit': 'Edit User',
  '/admin/users/roles': 'User Roles',
  '/admin/comments': 'Comment Moderation',
  '/admin/categories': 'Category Management',
  '/admin/categories/create': 'Create Category',
  '/admin/categories/edit': 'Edit Category',
  '/admin/media': 'Media Library',
  '/admin/analytics': 'Analytics',
  '/admin/seo': 'SEO Tools',
  '/admin/theme': 'Theme Customization',
  '/admin/backup': 'Backup & Restore',
};

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  // Get the path snippets, filter out any that are empty, and exclude "admin"
  const pathSnippets = location.pathname.split('/').filter(i => i && i !== 'admin');

  // Map each path snippet to its corresponding breadcrumb item
  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/admin/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url] || 'Dashboard'}</Link>
      </Breadcrumb.Item>
    );
  });

  // Add "Home" as the first breadcrumb item
  breadcrumbItems.unshift(
    <Breadcrumb.Item key="home">
      <Link to="/admin/dashboard">Home</Link>
    </Breadcrumb.Item>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        style={{ position: 'fixed', left: 0, top: 0, bottom: 0 }}  // Fix the sidebar to the left edge
      >
        <div className="logo" style={{ color: '#fff', padding: '30px', textAlign: 'center' }}>
          {collapsed ? "AD" : "Admin Dashboard"}
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            <Link to="/admin/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="posts" icon={<FileTextOutlined />}>
            <Link to="/admin/posts">Post Management</Link>
          </Menu.Item>
          <Menu.Item key="users" icon={<UserOutlined />}>
            <Link to="/admin/users">User Management</Link>
          </Menu.Item>
          <Menu.Item key="comments" icon={<CommentOutlined />}>
            <Link to="/admin/comments">Comment Moderation</Link>
          </Menu.Item>
          <Menu.Item key="categories" icon={<FolderOutlined />}>
            <Link to="/admin/categories">Category Management</Link>
          </Menu.Item>
          <Menu.Item key="media" icon={<PictureOutlined />}>
            <Link to="/admin/media">Media Library</Link>
          </Menu.Item>
          <Menu.Item key="analytics" icon={<LineChartOutlined />}>
            <Link to="/admin/analytics">Analytics</Link>
          </Menu.Item>
          <Menu.Item key="seo" icon={<ToolOutlined />}>
            <Link to="/admin/seo">SEO Tools</Link>
          </Menu.Item>
          <Menu.Item key="theme" icon={<SettingOutlined />}>
            <Link to="/admin/theme">Theme Customization</Link>
          </Menu.Item>
          <Menu.Item key="backup" icon={<SettingOutlined />}>
            <Link to="/admin/backup">Backup & Restore</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>  {/* Adjust content margin based on collapsed state */}
        <Header style={{ background: '#fff', padding: '0 20px', display: 'flex', justifyContent: 'space-between' }}>
          <h1>Welcome, Habtamu</h1>
        </Header>
        <Content style={{ margin: '16px', paddingLeft: collapsed ? 0 : 20 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {breadcrumbItems}
          </Breadcrumb>
          <Outlet /> {/* Render the nested routes here */}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2024 Your Blog
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
