import { useState, useEffect } from 'react'
import Posts from './components/Posts'
import Loading from './components/Loading'
import Title from './components/Title'
import PostBody from './components/PostBody'

const App = () => {

    const [posts, setPosts] = useState([]);
    const [postItem, setPostItem] = useState(false);
    const [postBody, setPostBody] = useState([]);


    useEffect(() => {
        const getPosts = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await data.json()

            setPosts(json)
        }

        getPosts()
    }, []);

    const handleClick = (e) => {
        setPostItem(true);
    };

    if (!postItem) {
        return (
            <>
                <Title />
                {posts.length > 0 ? <Posts posts={posts} id="list" setPostBody={setPostBody} handleClick={handleClick}/> : <Loading />}
            </>
        )
    }
    else if (postItem) {
        return (
            <div>
                <PostBody postBody={postBody}/>
            </div>
        )
    }



}

export default App