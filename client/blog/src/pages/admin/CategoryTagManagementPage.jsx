
import { Layout, Table, Button, Space, Popconfirm } from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

const { Content } = Layout;

const CategoryTagManagementPage = () => {
  const categories = [
    { key: 1, name: 'Django', type: 'Category' },
    { key: 2, name: 'React', type: 'Category' },
    { key: 3, name: 'Vue', type: 'Tag' },
    { key: 4, name: 'JavaScript', type: 'Tag' },
    // Add more categories and tags here
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EditOutlined />}>Edit</Button>
          <Popconfirm
            title="Are you sure you want to delete this item?"
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
          <h2>Category & Tag Management</h2>
          <Button type="primary" icon={<PlusOutlined />}>
            Add New
          </Button>
        </div>
        <Table columns={columns} dataSource={categories} />
      </Content>
  );
};

export default CategoryTagManagementPage;
