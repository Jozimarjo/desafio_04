import React from "react";
import fil from "../assets/teste.png";
import diego from "../assets/diego.jpg";
import Comment from "./comment";
function PostItem({ post }) {
  return (
    <div className="post">
      <div className="cont">
        <div className="post-header">
          <div className="post-top">
            <div className="post-img">
              <img className="img" src={post.author.avatar} />
            </div>
            <div className="post-title">
              <span>{post.author.name}</span>
              <span className="date">{post.date} </span>
            </div>
          </div>
          <span className="post-text">{post.content}</span>
        </div>
        <div className="break"></div>
        {post.comments.map(comment => (
          <Comment comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default PostItem;
