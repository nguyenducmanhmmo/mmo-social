import React from "react";
import "./user-info.styles.scss";

const UserInfo = ({post: {authorAvatarImage, postDate}}) => (
  <div className="user-info">
    <div className="user-avatar">
      <img
        src={authorAvatarImage}
        alt="author"
      />
    </div>

    <div className="user-data">
      <div className="username">
        <svg width="200" height="10">
          <rect width="100%" height="100%" style={{ fill: "#dbdbdb" }} />
        </svg>
      </div>

      <div className="post-date">{postDate}</div>
    </div>
  </div>
);

export default UserInfo;
