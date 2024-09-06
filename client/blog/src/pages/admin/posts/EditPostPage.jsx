
import { Layout, Form, Input, Button, Upload, message, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { TextArea } = Input;

const EditPostPage = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log('Editing post:', values);
    message.success('Post updated successfully!');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '16px', maxWidth: '800px'}}>
        <h2>Edit Post</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{
            title: 'Sample Title',
            content: 'Sample content...',
            publishDate: null,
          }}
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
              Update Post
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default EditPostPage;
