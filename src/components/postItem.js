import React from "react";
import fil from "../assets/teste.png";
import diego from "../assets/diego.jpg";
import Comment from "./comment";
function PostItem({ post }) {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-top post-title">
          <img className="img" src={fil} />
          <span>
            {post.author.name}
            <br />
            <span className="date">{post.date}</span>
          </span>
        </div>
      </div>
      <p>{post.content}</p>
      <div className="break"></div>
      {post.comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </div>
  );
}

export default PostItem;
