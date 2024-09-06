import React from 'react';
import { Layout, Table, Button, Space, Popconfirm } from 'antd';
import {
  UserOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

const { Content } = Layout;

const UserManagementPage = () => {
  const users = [
    { key: 1, username: 'john_doe', email: 'john@example.com', role: 'Admin', date: '2024-07-15' },
    { key: 2, username: 'jane_smith', email: 'jane@example.com', role: 'Editor', date: '2024-07-20' },
    // Add more users here
  ];

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Date Joined',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EditOutlined />}>Edit Role</Button>
          <Popconfirm
            title="Are you sure you want to delete this user?"
            onConfirm={() => console.log('Deleted', record.key)}
          >
            <Button icon={<DeleteOutlined />} danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
      <Content style={{ margin: '16px' }}>
        <h2>User Management</h2>
        <Table columns={columns} dataSource={users} />
      </Content>
  );
};

export default UserManagementPage;
