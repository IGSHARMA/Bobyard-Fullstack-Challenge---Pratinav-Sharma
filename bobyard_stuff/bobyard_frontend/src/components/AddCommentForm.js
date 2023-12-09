import React, { useState } from 'react';
import axios from 'axios';
import './AddCommentForm.css'

const AddCommentForm = ({ onCommentAdded }) => {
    const [commentText, setCommentText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!commentText.trim()) return;

        try {
            const postData = {
                text: commentText,
                author: 'Admin',
            };

            const response = await axios.post('http://localhost:8000/comments/create/', postData);
            onCommentAdded(response.data);
            setCommentText('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };




    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..."
                required
            />
            <button type="submit">Add Comment</button>
        </form>
    );

};

export default AddCommentForm;
