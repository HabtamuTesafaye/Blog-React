import React from 'react';
import { Layout, Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Content } = Layout;

const ThemeCustomizationPage = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log('Theme settings:', values);
    message.success('Theme settings updated successfully!');
  };

  return (
      <Content style={{ margin: '16px' }}>
        <h2>Theme Customization</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
        >
          <Form.Item
            label="Primary Color"
            name="primaryColor"
            rules={[{ required: true, message: 'Please input the primary color!' }]}
          >
            <Input placeholder="#1890ff" />
          </Form.Item>
          <Form.Item
            label="Logo"
            name="logo"
            valuePropName="fileList"
            getValueFromEvent={({ file }) => file.originFileObj}
          >
            <Upload
              name="logo"
              action="/upload"
              listType="picture"
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Upload Logo</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Save Changes</Button>
          </Form.Item>
        </Form>
      </Content>
  );
};

export default ThemeCustomizationPage;
