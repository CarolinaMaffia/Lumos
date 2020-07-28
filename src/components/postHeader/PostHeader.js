import React from 'react';
import './PostHeader.scss';

const PostHeader = () => {
    return (
        <div className="post-header">
            <input type="file" className="input-file" accept="image/gif, image/jpeg, image/png" />
        </div>
    )
}

export default PostHeader;