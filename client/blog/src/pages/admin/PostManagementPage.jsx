import { Layout, Table, Button, Space, Popconfirm } from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';


const { Content } = Layout;

const PostManagementPage = () => {
  const posts = [
    { key: 1, title: 'How to use Django with React', author: 'John Doe', date: '2024-08-01', status: 'Published' },
    { key: 2, title: 'Understanding Vue.js Lifecycle', author: 'Jane Smith', date: '2024-08-10', status: 'Draft' },
    // Add more posts here
  ];

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
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
          <Button icon={<EditOutlined />}>Edit</Button>
          <Popconfirm
            title="Are you sure you want to delete this post?"
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
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
          <h2>Post Management</h2>
          <Button type="primary" icon={<PlusOutlined />}>
            Create New Post
          </Button>
        </div>
        <Table columns={columns} dataSource={posts} />
      </Content>

  );
};

export default PostManagementPage;
