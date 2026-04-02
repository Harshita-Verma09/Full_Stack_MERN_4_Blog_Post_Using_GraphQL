import React from "react";

function PostItem({ post }) {
    return (
        <div className="post-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button className="delete-btn">Delete</button>
        </div>
    );
}

export default PostItem;
