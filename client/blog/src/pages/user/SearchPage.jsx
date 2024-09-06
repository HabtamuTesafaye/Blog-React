import React from 'react';
import { Layout, Input, List, Card } from 'antd';

const { Content } = Layout;
const { Search } = Input;

const SearchPage = () => {
  const [searchResults, setSearchResults] = React.useState([
    { id: 1, title: 'How to use React', content: 'Learn React with this comprehensive guide...' },
    { id: 2, title: 'Understanding Django', content: 'Get to know Django with this beginner tutorial...' },
    // Add more results here
  ]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '16px auto', maxWidth: '800px'}}>
        <Search
          placeholder="Search posts..."
          onSearch={value => console.log('Search:', value)}
          style={{ marginBottom: '16px' }}
        />
        <List
          itemLayout="horizontal"
          dataSource={searchResults}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                description={item.content}
              />
              <a href={`/post/${item.id}`}>Read more</a>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};

export default SearchPage;
