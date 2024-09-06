import React from 'react';
import { Layout, Table, Button, Modal, Form, Input, Select, message } from 'antd';

const { Content } = Layout;
const { Option } = Select;

const UserRolesPage = () => {
  const [visible, setVisible] = React.useState(false);
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log('Updating roles:', values);
    message.success('Roles updated successfully!');
    setVisible(false);
  };

  const showModal = () => setVisible(true);
  const handleCancel = () => setVisible(false);

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Button onClick={showModal}>Edit Roles</Button>
      ),
    },
  ];

  const dataSource = [
    { key: '1', username: 'SampleUser', role: 'Admin' },
    // Add more user data as needed
  ];

  return (
      <Content style={{ margin: '16px' }}>
        <h2>User Roles</h2>
        <Table columns={columns} dataSource={dataSource} />
        <Modal
          title="Edit User Roles"
          visible={visible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input the username!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Role"
              name="role"
              rules={[{ required: true, message: 'Please select a role!' }]}
            >
              <Select>
                <Option value="admin">Admin</Option>
                <Option value="editor">Editor</Option>
                <Option value="viewer">Viewer</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update Roles
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Content>
  );
};

export default UserRolesPage;
