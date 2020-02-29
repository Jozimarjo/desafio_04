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
      <p>content sera aqui</p>
      <div className="break"></div>
      {post.comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </div>
  );
}

export default PostItem;

{
  /* <div className="post-header">
<div className="post-top">
  <div className="post-img">
    <img className="img" src={post.author.avatar} />
  </div>
  <div className="post-title">
    <span>{post.author.name}</span>
    <span className="date">{post.date} </span>
  </div>
</div>
<span className="post-text">
  <strong>{post.author.name} </strong>
  {post.content}
</span>
</div> */
}
