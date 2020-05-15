import React from "react";
import "./comments.styles.scss";

const Comments = ( {post: { comments }}) => (
  <div className="comments-container">
    <div className="comments-wrapper">
      {comments.map((comment, index) => (
        <div className="comment" key={index}>
          <div className="user-avatar">
            <img
              src={comment.commentorAvatar}
              alt="author avatar"
            ></img>
          </div>
          <div className="user-data">
            <div className="username">
              <svg width="100" height="10">
                <rect width="100%" height="100%" style={{ fill: "#dbdbdb" }} />
              </svg>
            </div>

            <div className="comment-text">{comment.commentorText}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Comments;
