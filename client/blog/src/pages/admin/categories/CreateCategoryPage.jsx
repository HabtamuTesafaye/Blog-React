
import { Layout, Form, Input, Button, message } from 'antd';

const { Content } = Layout;

const CreateCategoryPage = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log('Creating category:', values);
    message.success('Category created successfully!');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '16px auto', maxWidth: '600px', }}>
        <h2>Create Category</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
        >
          <Form.Item
            label="Category Name"
            name="name"
            rules={[{ required: true, message: 'Please input the category name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create Category
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default CreateCategoryPage;
