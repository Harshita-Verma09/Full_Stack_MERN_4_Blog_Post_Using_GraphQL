

import React, { useState } from "react";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";

const CREATE_POST = gql`
  mutation ($title: String!, $content: String!) {
    createPost(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;

function PostForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [createPost] = useMutation(CREATE_POST, {
        refetchQueries: ["getPosts"],
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createPost({
            variables: { title, content },
        });

        setTitle("");
        setContent("");
    };

    return (
        <form style={formStyle} onSubmit={handleSubmit}>
            <h2 style={{ color: "white" }}>Create Post ✨</h2>

            <input
                placeholder="Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={inputStyle}
            />

            <textarea
                placeholder="Content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={inputStyle}
            />

            <button style={btnStyle}>Add Post 🚀</button>
        </form>
    );
}

const formStyle = {
    background: "rgba(255,255,255,0.1)",
    padding: "20px",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
};

const inputStyle = {
    display: "block",
    width: "100%",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
};

const btnStyle = {
    padding: "10px",
    background: "linear-gradient(135deg,#ff6ec4,#7873f5)",
    color: "white",
    border: "none",
    borderRadius: "10px",
};

export default PostForm;
