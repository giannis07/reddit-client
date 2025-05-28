import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../features/postsSlice';
import PostCard from './PostCard';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const searchQuery = useSelector((state) => state.search.query);
  const subreddit = useSelector((state) => state.subreddit.subreddit);

  useEffect(() => {
    dispatch(getPosts({ subreddit, searchQuery }));
  }, [dispatch, searchQuery, subreddit]);

  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
};

export default PostList;
