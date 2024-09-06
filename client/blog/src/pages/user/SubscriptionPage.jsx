import { Layout, Form, Input, Button, message } from 'antd';

const { Content } = Layout;

const SubscriptionPage = () => {
  const onFinish = (values) => {
    console.log('Subscription data:', values);
    message.success('Subscribed successfully!');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '16px auto', maxWidth: '600px'}}>
        <h2>Subscription Options</h2>
        <Form
          name="subscription"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Email Address"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Subscribe
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default SubscriptionPage;
