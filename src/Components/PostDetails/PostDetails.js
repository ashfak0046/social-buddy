import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetails = () => {
    const [postDetails,setPostDetails] = useState({});
    const [comments,setComments] = useState([])
    const {id} = useParams();
    useEffect(() =>{
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`
            fetch(url)
            .then(res => res.json())
            .then(data => setPostDetails(data))
    },)
    useEffect(() =>{
        const url =`https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])

    return (
        <div>
            <h5>ID: {id}</h5>
            <h2>{postDetails.title}</h2>
            <h4>{postDetails.body}</h4>
            <p>Number of comments: {comments.length}</p>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetails;