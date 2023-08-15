import React, { useState } from 'react';
import './Comments.css'

const CommentForm = ({ postId,owner, addComment }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the addComment function passed from the parent component
     // console.log(postId, owner, content);
    addComment({ postId, owner, content });
    setContent('');
  };

    return (
      <div className="comments-inputs">
    <form className="form" onSubmit={handleSubmit}>
      <textarea
              rows="1"
              cols="100"
              className="comment-input"
        placeholder="Write a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
          {content != '' && <button type="submit" className="add-button" style={{ marginLeft: 440 + 'px' }}>
            Post
          </button>}
            </form>
            </div>
  );
};

export default CommentForm;
