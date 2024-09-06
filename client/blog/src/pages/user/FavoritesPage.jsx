import React from 'react';
import { Layout, List, Card, Button } from 'antd';

const { Content } = Layout;

const FavoritesPage = () => {
  const favorites = [
    { id: 1, title: 'How to use React', content: 'Learn React with this comprehensive guide...' },
    { id: 2, title: 'Understanding Django', content: 'Get to know Django with this beginner tutorial...' },
    // Add more favorite posts here
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '16px auto', maxWidth: '800px'}}>
        <h2>Favorite Posts</h2>
        <List
          itemLayout="horizontal"
          dataSource={favorites}
          renderItem={item => (
            <List.Item
              actions={[<Button href={`/post/${item.id}`}>Read more</Button>]}
            >
              <List.Item.Meta
                title={item.title}
                description={item.content}
              />
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};

export default FavoritesPage;
