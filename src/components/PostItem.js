import React from "react";

const PostItem = ({post}) => {

    const addComponent = () => {
        console.log(post.map((i) => {
            
        }))
    }

    return(
        <div className="listItem" onClick={addComponent}>
            <h1>{post.title}</h1>
            <p>{post.id}</p>
        </div>
    )
}

export default PostItem

