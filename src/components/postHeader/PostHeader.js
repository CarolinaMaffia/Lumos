import React, { useState } from 'react';import './PostHeader.scss';

const PostHeader = () => {
    const [showFile, setShowFile] = useState(0);

    const handleChange = (event) => {
        setShowFile(URL.createObjectURL(event.target.files[0]));
    }
    return (
        <div className="post-header">
            <input type="file" className="input-file" onChange={handleChange} accept="image/gif, image/jpeg, image/png" />
            <img src={showFile} alt="Header of the note" />
        </div>
    )
}

export default PostHeader;