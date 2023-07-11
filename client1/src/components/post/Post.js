import React from "react";
import { useState, useEffect } from "react";
import Avatar from "../avatar/Avatar";
import "./Post.scss";
import { HiThumbUp, HiOutlineThumbUp } from "react-icons/hi";
import {useDispatch, useSelector} from 'react-redux';
import { likeAndUnlikePost } from "../../redux/slices/postsSlice";
import { useNavigate } from "react-router";
import { axiosClient } from "../../utils/axiosClient";
//import Comments from ".//../comments/Comments";
import CommentForm from '../commentPost/CommentForm';
import Comments from '../commentPost/Comments';


function Post({ post }) {
    
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const myProfile = useSelector(state => state.appConfigReducer.myProfile);
   // const user = myProfile?.user;
   // console.log(myProfile.avatar.url);
    async function handlePostLiked() {
        dispatch(likeAndUnlikePost({
            postId: post._id
        }))
    }
    
    async function toggleComments() {
        setIsOpen((isOpen) => !isOpen);
    }
    const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments from the backend
      fetch(`http://localhost:4000/comments?postId=${post._id}`)
      //.then((response)=>console.log(response))
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.log( error.message));
  }, [post._id]);

    const addComment = async (comment) => {
        // Send a POST request to the backend to create a new comment
        fetch('http://localhost:4000/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(comment),
          })
            .then((response) => response.json())
            .then((data) => setComments([...comments, data]))
            .catch((error) => console.error('Error:', error));
        };

    return (
        <div className="Post">
            <div className="heading" onClick={() => navigate(`/profile/${post.owner._id}`)}>
                <Avatar src={post.owner?.avatar?.url} />
                <h4>{post.owner?.name}</h4>
            </div>
            <p className="caption" style={{ margin: "1px 0px 0px 0px", padding: "0px 0px 1px 30px" }}>
                {post.caption}</p>
            {post?.image.url && (
                <div className="content">
                    <img src={post?.image?.url} alt="" />
                </div>
            )}
            <div className="footer">
                <div className="like" onClick={handlePostLiked}>
                    {post.isLiked ? <HiThumbUp style={{color: 'skyblue'}} className="icon" /> : <HiOutlineThumbUp className="icon" />}
                    <h4>{`${post.likesCount} likes`}</h4>
                </div>

                <div>
                    <button onClick={toggleComments} className="add-button">View Comments</button>
                    {isOpen && <Comments comments={comments} />}
                    {isOpen && <CommentForm postId={post._id} owner={myProfile} addComment={addComment} />}
                    

                </div>

                
                <h6 className="time-ago">{post?.timeAgo}</h6>
            </div>
        </div>
    );
}

export default Post;