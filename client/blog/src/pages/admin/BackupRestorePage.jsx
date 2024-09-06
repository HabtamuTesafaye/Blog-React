
import { Layout, Button, Form, Upload, message } from 'antd';
import { UploadOutlined, DownloadOutlined } from '@ant-design/icons';

const { Content } = Layout;

const BackupRestorePage = () => {
  const handleBackup = () => {
    console.log('Backing up data...');
    message.success('Backup created successfully!');
  };

  const handleRestore = (info) => {
    console.log('Restoring from file:', info.file.originFileObj);
    message.success('Data restored successfully!');
  };

  return (
      <Content style={{ margin: '16px' }}>
        <h2>Backup and Restore</h2>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          onClick={handleBackup}
          style={{ marginBottom: '16px' }}
        >
          Create Backup
        </Button>
        <Form layout="vertical">
          <Form.Item label="Restore from Backup">
            <Upload
              name="backup"
              action="/upload"
              showUploadList={false}
              customRequest={handleRestore}
            >
              <Button icon={<UploadOutlined />}>Upload Backup File</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Content>
  );
};

export default BackupRestorePage;
