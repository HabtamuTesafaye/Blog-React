import React from 'react';
import { Layout, Form, Input, Button, message } from 'antd';

const { Content } = Layout;

const LoginPage = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log('Login details:', values);
    message.success('Logged in successfully!');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '16px auto', maxWidth: '600px'}}>
        <h2>Login</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default LoginPage;
