import React from 'react';
import { Card, Row, Col, Statistic, Table } from 'antd';
import { FileTextOutlined, UserOutlined, CommentOutlined, LineChartOutlined } from '@ant-design/icons';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const DashboardPage = () => {
  const recentActivity = [
    { key: 1, activity: 'New post created: "How to use Django with React"', date: '2024-09-01' },
    { key: 2, activity: 'User registered: john_doe', date: '2024-09-02' },
    { key: 3, activity: 'Comment added on "Vue.js vs React": "Great comparison!"', date: '2024-09-03' },
  ];

  const columns = [
    {
      title: 'Activity',
      dataIndex: 'activity',
      key: 'activity',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  const dataBar = [
    { name: 'Jan', value: 30 },
    { name: 'Feb', value: 45 },
    { name: 'Mar', value: 50 },
    { name: 'Apr', value: 60 },
  ];

  const dataLine = [
    { name: 'Jan', uv: 4000, pv: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398 },
    { name: 'Mar', uv: 2000, pv: 9800 },
    { name: 'Apr', uv: 2780, pv: 3908 },
  ];

  const dataPie = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  return (
    <>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Posts"
              value={112}
              prefix={<FileTextOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Users"
              value={45}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Comments"
              value={76}
              prefix={<CommentOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Site Traffic"
              value={2345}
              prefix={<LineChartOutlined />}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: '20px' }}>
        <Col span={8}>
          <Card title="Bar Chart">
            <BarChart width={300} height={200} data={dataBar}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Line Chart">
            <LineChart width={300} height={200} data={dataLine}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            </LineChart>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Pie Chart">
            <PieChart width={300} height={200}>
              <Pie data={dataPie} dataKey="value" outerRadius={80} fill="#8884d8" label />
              <Tooltip />
            </PieChart>
          </Card>
        </Col>
      </Row>
      <Card title="Recent Activity" style={{ marginTop: '20px' }}>
        <Table dataSource={recentActivity} columns={columns} pagination={false} />
      </Card>
    </>
  );
};

export default DashboardPage;
