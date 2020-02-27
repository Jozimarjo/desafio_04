import React, { Component } from "react";
import fil from "../assets/teste.png";
import diego from "../assets/diego.jpg";

function Comment({ comment }) {
  return (
    <div className="post-header">
      <div className="post-top">
        <div className="post-img">
          <img className="img" src={comment.author.avatar} />
        </div>
        <div className="post-text2">
          <p>
            {comment.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
