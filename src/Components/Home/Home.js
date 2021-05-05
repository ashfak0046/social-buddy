import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Post from '../Post/Post';

const Home = () => {
    const [post,setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <div>
            <h1>This is Home</h1>
            <h3>{post.length}</h3>
            {
                post.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;