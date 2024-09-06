
import { Layout, Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Content } = Layout;

const ProfilePage = () => {
  const onFinish = (values) => {
    console.log('Profile updated:', values);
    message.success('Profile updated successfully!');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '16px auto', maxWidth: '600px' }}>
        <h2>Profile Management</h2>
        <Form
          name="profile"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Profile Picture"
            name="profilePicture"
          >
            <Upload
              name="profilePicture"
              action="/upload"
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />}>Upload Profile Picture</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default ProfilePage;
