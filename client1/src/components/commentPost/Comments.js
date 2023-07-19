import React from 'react';
import Avatar from "../avatar/Avatar";
import './CommentN.scss'

const Comments = ({ comments }) => {
  // comments.map((comment) =>
  //  console.log(comment));
  return (
    <div className="comments-container">
      {comments.map((comment) => (
        <div className="comment" key={comment._id}>
          <div className="heading">
            <Avatar src={comment.owner?.avatar?.url} />
          <h4>{comment.owner.name}</h4>
          </div>
          <div className="comment-content">{comment.content}</div>
          <div className="comment-timestamp">{comment.createdAt}</div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
