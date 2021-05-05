import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id,title,body} = props.post;
    const history = useHistory();
    const handleClick = id => {
        const url = `post/${id}`
        history.push(url);
    }
    return (
        <div style={{
            border:'1px solid grey',
            margin:'20px',
            padding:'20px',
        }}>
            <h3><strong>ID:{id}</strong> {title}</h3>
            <p>{body}</p>
            <button onClick={() => handleClick(id)}>Show Comments</button>

        </div>
    );
};

export default Post;