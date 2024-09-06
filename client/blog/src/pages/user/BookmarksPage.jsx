import React from 'react';
import { Layout, List, Card, Button } from 'antd';

const { Content } = Layout;

const BookmarksPage = () => {
  const bookmarks = [
    { id: 1, title: 'React Hooks Explained', content: 'Understanding hooks in React.' },
    { id: 2, title: 'Advanced Django Techniques', content: 'Deep dive into Django.' },
    // Add more bookmarked posts here
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '16px auto', maxWidth: '800px'}}>
        <h2>Bookmarks</h2>
        <List
          itemLayout="horizontal"
          dataSource={bookmarks}
          renderItem={item => (
            <List.Item
              actions={[<Button href={`/post/${item.id}`}>Read More</Button>]}
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

export default BookmarksPage;
