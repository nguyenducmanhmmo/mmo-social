import React from 'react'
import './post.styles.scss'
import UserInfo from '../user-info/user-info.component';
import PostContent from '../post-content/post-content.component';
import PostInfo from '../post-info/post-info.component';
import Comments from '../comments/comments.component';
import CommentInput from '../comment-input/comment-input.component';

const Post = ({post}) =>
(
    <div className="post">
         <div className="post-wrapper">
         <div className="delete-button"><a href="#" title="Delete this from history" ><i className="far fa-window-close"></i></a></div>
         <UserInfo post={post}/>
         <PostContent post={post}/>
         <PostInfo post={post}/>
         <Comments post={post}/>
         <CommentInput post={post}/>

         </div>
    </div>

)

export default Post;