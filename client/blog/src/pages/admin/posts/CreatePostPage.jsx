
import { Layout, Form, Input, Button, Upload, message, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { TextArea } = Input;

const CreatePostPage = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log('Creating post:', values);
    message.success('Post created successfully!');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '16px auto', maxWidth: '800px'}}>
        <h2>Create Post</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true, message: 'Please input the content!' }]}
          >
            <TextArea rows={6} />
          </Form.Item>
          <Form.Item
            label="Featured Image"
            name="featuredImage"
          >
            <Upload
              name="featuredImage"
              action="/upload"
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            label="Publish Date"
            name="publishDate"
          >
            <DatePicker showTime />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create Post
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default CreatePostPage;
