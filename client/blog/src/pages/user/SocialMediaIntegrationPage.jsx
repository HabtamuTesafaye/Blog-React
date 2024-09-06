import { Layout, Form, Input, Button, message } from 'antd';

const { Content } = Layout;

const SocialMediaIntegrationPage = () => {
  const onFinish = (values) => {
    console.log('Social media accounts:', values);
    message.success('Social media accounts connected successfully!');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '16px auto', maxWidth: '600px' }}>
        <h2>Social Media Integration</h2>
        <Form
          name="socialMedia"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Twitter Handle"
            name="twitter"
          >
            <Input placeholder="@yourhandle" />
          </Form.Item>
          <Form.Item
            label="Facebook Page URL"
            name="facebook"
          >
            <Input placeholder="https://facebook.com/yourpage" />
          </Form.Item>
          <Form.Item
            label="Instagram Handle"
            name="instagram"
          >
            <Input placeholder="@yourhandle" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Connect Accounts
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default SocialMediaIntegrationPage;
