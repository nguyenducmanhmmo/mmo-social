import React from "react";
import "./post-info.styles.scss";

const PostInfo = ({ post: { likesCount, commentsCount, viewsCount } }) => (
  <div className="post-info">
    <div className="likes">
      <a href="#">
        <div className="icon">
          <i className={` far fa-heart`}></i>
        </div>
        <div className="count">{likesCount}</div>
      </a>
    </div>
    <div className="comments">
      <a href="#">
        <div className="icon">
          <i className="far fa-comment-alt"></i>
        </div>
        <div className="count">{commentsCount}</div>
      </a>
    </div>
    <div className="views">
      <div className="icon">
        <i className="fas fa-eye"></i>
      </div>
      <div className="count">{viewsCount}</div>
    </div>
  </div>
);

export default PostInfo;
