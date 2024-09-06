import React from 'react';
import { List, Button } from 'antd';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const posts = [
    { id: 1, title: 'Understanding React', content: 'An introductory guide to React.' },
    { id: 2, title: 'Mastering Django', content: 'A comprehensive guide to Django.' },
    // Add more posts here
  ];

  return (
    <div style={{ margin: '16px', maxWidth: '800px' }}>
      <h2>Blog</h2>
      <List
        itemLayout="horizontal"
        dataSource={posts}
        renderItem={item => (
          <List.Item
            key={item.id} // Ensure key is here
            actions={[
              <Link key={`link-${item.id}`} to={`/post/${item.id}`}>
                <Button>Read More</Button>
              </Link>
            ]}
          >
            <List.Item.Meta
              title={item.title}
              description={item.content}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default BlogPage;
