import React from 'react';
import { Layout, Upload, Modal, Button, Row, Col, Card } from 'antd';
import { PlusOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';

const { Content } = Layout;

const MediaLibraryPage = () => {
  const [previewVisible, setPreviewVisible] = React.useState(false);
  const [previewImage, setPreviewImage] = React.useState('');
  const [fileList, setFileList] = React.useState([]);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = (file) => {
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  return (
      <Content style={{ margin: '16px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
          <h2>Media Library</h2>
          <Upload
            action="/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </div>
        <Row gutter={16}>
        {fileList.map((file) => (
          <Col span={6} key={file.uid}>
            <Card
              cover={<img alt="media" src={file.url || file.preview} />}
              actions={[
                <EyeOutlined key={`view-${file.uid}`} onClick={() => handlePreview(file)} />,
                <DeleteOutlined key={`delete-${file.uid}`} onClick={() => console.log('Deleted', file.uid)} />,
              ]}
            >
              <Card.Meta title={file.name} />
            </Card>
          </Col>
        ))}
      </Row>

        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </Content>
  );
};

export default MediaLibraryPage;
