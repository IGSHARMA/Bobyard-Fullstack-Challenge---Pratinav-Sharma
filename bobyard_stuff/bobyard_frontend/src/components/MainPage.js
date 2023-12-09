import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddCommentForm from './AddCommentForm';
import { fetchComments } from '../services/api';

const MainPage = () => {
    const [comments, setComments] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const getInitialComments = async () => {
            const initialComments = await fetchComments();
            setComments(initialComments);
        };

        getInitialComments();
    }, []);

    const handleCommentAdded = (newComment) => {
        setComments(prevComments => [...prevComments, newComment]);
    };

    return (
        <div>
            <button className="add-comment-button" onClick={() => setShowForm(!showForm)}>
                {showForm ? '-' : '+'}
            </button>

            {showForm && <AddCommentForm onCommentAdded={handleCommentAdded} />}
            <CommentList comments={comments} />
        </div>
    );
};

export default MainPage;

