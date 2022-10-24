import PostItem from './PostItem'

const Posts = ({posts, setPostBody, handleClick}) => {
    return posts.map((post) => (
        <PostItem post={post} setPostBody={setPostBody} handleClick={handleClick} key={post.id} />
    ))
}

export default Posts