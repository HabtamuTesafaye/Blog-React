import React from 'react';
import { Layout, Form, Input, Button } from 'antd';

const { Content } = Layout;

const SEOToolsPage = () => {
  const onFinish = (values) => {
    console.log('SEO data submitted: ', values);
  };

  return (
      <Content style={{ margin: '16px' }}>
        <h2>SEO Tools</h2>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Meta Title" name="metaTitle" rules={[{ required: true, message: 'Please input the meta title!' }]}>
            <Input placeholder="Enter meta title" />
          </Form.Item>
          <Form.Item label="Meta Description" name="metaDescription" rules={[{ required: true, message: 'Please input the meta description!' }]}>
            <Input.TextArea placeholder="Enter meta description" />
          </Form.Item>
          <Form.Item label="Keywords" name="keywords" rules={[{ required: true, message: 'Please input keywords!' }]}>
            <Input placeholder="Enter keywords separated by commas" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Save SEO Settings</Button>
          </Form.Item>
        </Form>
      </Content>
  );
};

export default SEOToolsPage;
