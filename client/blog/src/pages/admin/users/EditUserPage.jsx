import React from 'react';
import { Layout, Form, Input, Button, message } from 'antd';

const { Content } = Layout;

const EditUserPage = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log('Editing user:', values);
    message.success('User updated successfully!');
  };

  return (
      <Content style={{ margin: '16px auto', maxWidth: '800px' }}>
        <h2>Edit User</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{
            username: 'SampleUser',
            email: 'user@example.com',
          }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input the username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input the email!' }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update User
            </Button>
          </Form.Item>
        </Form>
      </Content>
  );
};

export default EditUserPage;
