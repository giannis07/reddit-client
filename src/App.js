import React from 'react';
import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AppNavbar from './components/AppNavbar';
import PostList from './components/PostList';
import SubredditList from './components/SubredditList';

const App = () => {
  return (
    <div>
      <AppNavbar />
      <div className="content d-flex">
        {/* Posts Section */}
        <Col xs={12} sm={12} md={8} lg={8} className="py-3">
          <div className="posts">
            <PostList />
          </div>
        </Col>

        {/* Subreddit List Section */}
        <Col xs={0} sm={0} md={4} lg={4} className="d-none d-md-block d-lg-block py-3">
          <SubredditList />
        </Col>
      </div>
    </div>
  );
};

export default App;
