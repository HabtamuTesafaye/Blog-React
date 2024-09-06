import React from 'react';
import { Layout, Card, Button, Input, List, Form, message } from 'antd';
import { LikeOutlined, ShareAltOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { TextArea } = Input;

const PostPage = () => {
  const [comments, setComments] = React.useState([
    { id: 1, text: 'Interesting post!' },
    { id: 2, text: 'Very helpful, thanks!' },
    // Add more comments here
  ]);

  const handleCommentSubmit = (values) => {
    console.log('Comment submitted:', values);
    setComments([...comments, { id: comments.length + 1, text: values.comment }]);
    message.success('Comment added successfully!');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '16px', maxWidth: '800px'}}>
        <Card
          title="Post Title"
          extra={<Button icon={<ShareAltOutlined />}>Share</Button>}
        >
          <p>Post content goes here...</p>
          <Button icon={<LikeOutlined />}>Like</Button>
        </Card>
        <Form
          name="comment"
          layout="vertical"
          onFinish={handleCommentSubmit}
          style={{ marginTop: '16px' }}
        >
          <Form.Item
            name="comment"
            rules={[{ required: true, message: 'Please input your comment!' }]}
          >
            <TextArea rows={4} placeholder="Add a comment" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Post Comment
            </Button>
          </Form.Item>
        </Form>
        <List
          header={<div>Comments</div>}
          dataSource={comments}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta description={item.text} />
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};

export default PostPage;
