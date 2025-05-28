import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSubreddit } from '../features/subredditSlice';

import { ListGroup } from 'react-bootstrap';



const subredditnames = ['Michigan','ReactJS', 'JavaScript', 'Programming', 'WebDevelopment', 'Frontend'];

const SubredditList = ( ) => {
    
    const dispatch = useDispatch();
    const selectedSubreddit = useSelector(state => state.subreddit.subreddit);

    const handleSubredditClick = (name) => {
        dispatch(setSubreddit(name));
         
    };


  return (
    <div className="postcard subreddit-list p-4 whiteBg">
      <h3>Subreddits</h3>
      <ListGroup>
        {subredditnames.map((name, index) => (
          <ListGroup.Item
            key={index}
            className={`d-flex justify-content-between align-items-center custom-listitem py-4
                 ${selectedSubreddit === name ? 'selected' : ''}
                 `}
                 
                
            onClick={() => handleSubredditClick(name)}
          >
            <div className="subreddit-name"><b>{name}</b></div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SubredditList;
