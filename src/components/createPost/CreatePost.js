import React from 'react';
import './CreatePost.scss';

import TitleEntry from './../titleEntry';
import PostHeader from './../postHeader';

const CreatePost = () => {
    return (
        <div className="create-post">
            <TitleEntry />
            <PostHeader />
        </div>
    )
}

export default CreatePost;