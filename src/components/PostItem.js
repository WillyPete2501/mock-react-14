import React from "react";

const PostItem = ({ post, setPostBody, handleClick }) => {

    const getBody = async (e) => {
        try {
            const data = await fetch(`https:jsonplaceholder.typicode.com/posts/${e.target.id}`);
            const json = await data.json();
            setPostBody(json);
            handleClick();
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div id={post.id} className="listItem" onClick={getBody}>
            <h1 id={post.id}>{post.title}</h1>
            <p id={post.id}>{post.id}</p>
        </div>
    )
}

export default PostItem

