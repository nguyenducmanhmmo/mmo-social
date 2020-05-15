import React from "react";
import "./post-wall.styles.scss";
import ShowNewPost from "../show-new-post/show-new-post.components";
import Post from "../post/post.component";
import { connect } from "react-redux";
import { getPosts } from "../../redux/posts/post.selectors";

const PostWall = ({ posts }) => (
  <div className="post-wall">
    <ShowNewPost />
    {posts.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  posts: getPosts(state),
});

export default connect(mapStateToProps)(PostWall);
