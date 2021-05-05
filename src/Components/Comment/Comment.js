import React from 'react';

const Comment = ({comment}) => {
    const {name,email} = comment;
    return (
        <div>
            <h4>{name}</h4>
            <h5>{email}</h5>
        </div>
    );
};

export default Comment;