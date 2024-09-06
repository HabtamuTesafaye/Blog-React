import React from 'react';
import { Layout, Form, Input, Button, message } from 'antd';

const { Content } = Layout;
const { TextArea } = Input;

const FeedbackPage = () => {
  const onFinish = (values) => {
    console.log('Feedback submitted:', values);
    message.success('Feedback submitted successfully!');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '16px auto', maxWidth: '600px'}}>
        <h2>Feedback</h2>
        <Form
          name="feedback"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Feedback"
            name="feedback"
            rules={[{ required: true, message: 'Please provide your feedback!' }]}
          >
            <TextArea rows={4} placeholder="Enter your feedback here..." />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit Feedback
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default FeedbackPage;
