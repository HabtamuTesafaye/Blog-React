
import { Layout, Form, Input, Button, message } from 'antd';

const { Content } = Layout;

const EditCategoryPage = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log('Editing category:', values);
    message.success('Category updated successfully!');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '16px auto', maxWidth: '600px' }}>
        <h2>Edit Category</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{
            name: 'Sample Category',
            description: 'Sample description...',
          }}
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
              Update Category
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default EditCategoryPage;
