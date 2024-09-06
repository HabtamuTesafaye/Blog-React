
import { Layout, Card, Row, Col } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const { Content } = Layout;

const data = [
  { name: 'Aug 1', visitors: 4000, views: 2400, comments: 240 },
  { name: 'Aug 2', visitors: 3000, views: 1398, comments: 221 },
  { name: 'Aug 3', visitors: 2000, views: 9800, comments: 229 },
  { name: 'Aug 4', visitors: 2780, views: 3908, comments: 200 },
  { name: 'Aug 5', visitors: 1890, views: 4800, comments: 218 },
  // Add more data here
];

const AnalyticsPage = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '16px' }}>
        <h2>Site Analytics</h2>
        <Row gutter={16}>
          <Col span={24}>
            <Card title="Traffic Overview">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="visitors" stroke="#8884d8" />
                  <Line type="monotone" dataKey="views" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="comments" stroke="#ff7300" />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default AnalyticsPage;
