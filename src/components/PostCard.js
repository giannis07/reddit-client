/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {  Button } from 'react-bootstrap';
import { FaArrowUp, FaArrowDown, FaComment } from 'react-icons/fa'; // Εικονίδια για upvote, downvote και σχόλια
import { useDispatch } from 'react-redux';
import { getPosts } from '../features/postsSlice';


const PostCard = ({ post }) => {
    const dispatch = useDispatch();

    const handleCommentsClick = () => {
        // Αυτό θα μπορούσε να ανοίξει τα σχόλια για το συγκεκριμένο post         
        dispatch(getPosts({ postId: post.id }));
      };

  return (
   
      <div className="postcard d-flex p-4 whiteBg">
        
        <div className="d-flex flex-column  align-items-center me-4">
            
            <Button variant="outline-success" size="sm" className="mb-2">
              <FaArrowUp />
            </Button>
            <div className=""><b>{post.score}</b></div>
            
            <Button variant="outline-danger" size="sm" className="mt-2">
              <FaArrowDown />
            </Button>
        </div>



        <div className="w-100">
            

            {/* Card Body with Post Title and Body */}
            <div>
                <div><b><h4>{post.title}</h4></b></div>
                <div className='imgCardBox'>
                    
                    <img src={post.url} className='imgCard'/>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center w-100">
                     
                    <div>
                        <strong>{post.author}</strong> 
                    </div>

                    <div className="text-muted">• {post.created_utc}</div>
                    
                    <div>
                        <Button variant="link" size="sm" className="d-flex align-items-center p-0">
                            <FaComment />  {post.num_comments}
                        </Button>
                    </div>
                    
                </div>
               
            </div>
        </div>



      </div>
    
  );
};

export default PostCard;
