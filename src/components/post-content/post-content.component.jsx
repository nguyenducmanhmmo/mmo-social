import React from 'react'
import './post-content.styles.scss'

const PostContent = ({ post: {postContentImage} }) =>
(
    <div className="post-content">
        <img src={postContentImage} alt=""/>
    </div>
)

export default PostContent;