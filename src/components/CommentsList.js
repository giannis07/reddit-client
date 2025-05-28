import React, { useEffect, useState } from 'react';
import { fetchComments } from '../services/redditAPI';


const CommentsList = ({ postId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getComments = async () => {
          const data = await fetchComments(postId);
          setComments(data);
        };

        getComments();
    }, [postId]);

    return (
        <div>
          {comments.length === 0 ? (
            <p>No comments available</p>
          ) : (
            comments.map((comment, index) => (
              <div key={index} className="card mt-2">
                <div className="card-body">
                  <p className="card-text">{comment.body}</p>
                  <small className="text-muted">By {comment.author}</small>
                </div>
              </div>
            ))
          )}
        </div>
      );
    };
    
    export default CommentsList;