
import { Layout, Table, Button, Space, Popconfirm } from 'antd';
import {
  CheckOutlined,
  DeleteOutlined,
  CommentOutlined,
} from '@ant-design/icons';

const { Content } = Layout;

const CommentModerationPage = () => {
  const comments = [
    { key: 1, user: 'john_doe', post: 'How to use Django with React', comment: 'Great post!', date: '2024-08-01', status: 'Pending' },
    { key: 2, user: 'jane_smith', post: 'Understanding Vue.js Lifecycle', comment: 'Very informative.', date: '2024-08-05', status: 'Approved' },
    // Add more comments here
  ];

  const columns = [
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Post',
      dataIndex: 'post',
      key: 'post',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          {record.status === 'Pending' && (
            <Button icon={<CheckOutlined />} onClick={() => console.log('Approved', record.key)}>
              Approve
            </Button>
          )}
          <Popconfirm
            title="Are you sure you want to delete this comment?"
            onConfirm={() => console.log('Deleted', record.key)}
          >
            <Button icon={<DeleteOutlined />} danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
      <Content style={{ margin: '16px' }}>
        <h2>Comment Moderation</h2>
        <Table columns={columns} dataSource={comments} />
      </Content>
  );
};

export default CommentModerationPage;
