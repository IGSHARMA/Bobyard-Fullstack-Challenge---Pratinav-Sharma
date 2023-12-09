import React, { useState, useEffect } from 'react';
import { fetchComments } from '../services/api';
import './CommentList.css';
import loadingImage from './bobyard_logo.png';
import heartIcon from './likes_button.jpeg'
import axios from 'axios';

const CommentsList = () => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // New state for loading
    // const [editCommentId, setEditCommentId] = useState(null); //state that I need to use to edit the comments 


    useEffect(() => {
        // This functions fetches the comments
        const getComments = async () => {
            const fetchedComments = await fetchComments();
            if (fetchedComments) {
                setComments(fetchedComments);
            }
        };

        // Call the function to fetch comments
        getComments().finally(() => {
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        });
    }, []);

    const handleDelete = async (commentId) => {
        try {
            await axios.delete(`http://localhost:8000/comments/${commentId}/`);
            // Update state to remove the comment from the list
            setComments(currentComments => currentComments.filter(comment => comment.id !== commentId));
        } catch (error) {
            console.error('Failed to delete comment:', error);
        }
    };

    if (isLoading) {
        return (
            <div className="loading-screen">
                <img src={loadingImage} alt="Loading..." className="loading-image" />
            </div>
        );
    }

    //use this return if edit and update comments are not working 
    return (
        <div>
            {comments && comments.map((comment, index) => (
                <div
                    key={comment.id}
                    className="comment-box"
                    style={{ animation: 'appearCloudLike 0.5s ease-out forwards', animationDelay: `${index * 0.1}s` }}
                >
                    <div className="comment-date">{new Date(comment.date).toLocaleString()}</div>
                    <div className="comment-author">By: {comment.author}</div>
                    <div className="comment-text">{comment.text}</div>
                    {comment.image && <img src={comment.image} alt="Comment" className="comment-image" />}
                    <div className="comment-likes">
                        <img src={heartIcon} alt="Likes" className="heart-icon" /> {comment.likes}
                    </div>
                    <div className="comment-controls">
                        <button onClick={() => handleDelete(comment.id)} className="delete-button">
                            Delete
                        </button>
                        {/* Edit button or other controls can also go here */}
                    </div>
                </div>
            ))}
        </div>
    );

};

export default CommentsList;
