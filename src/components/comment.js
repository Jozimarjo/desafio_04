import React, { Component } from "react";
import fil from "../assets/teste.png";
import diego from "../assets/diego.jpg";

function Comment({ comment }) {
  return (
    <div className="comment-header">
      <div className="post-comment-top">
        <div className="post-img">
          <img className="img" src={comment.author.avatar} />
        </div>
        <div className="post-content">
          <p>
            <strong>{comment.author.name} </strong>
            {comment.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
