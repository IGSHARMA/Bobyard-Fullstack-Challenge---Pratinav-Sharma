import axios from 'axios';

export const fetchComments = async () => {
    try {
        const response = await axios.get('http://localhost:8000/comments/');
        return response.data;
    } catch (error) {
        console.error("Error fetching comments:", error);
        return [];
    }
};

export const addComment = async (commentData) => {
    try {
        const response = await axios.post('http://localhost:8000/comments/create/', commentData);
        return response.data;
    } catch (error) {
        console.error("Error adding comment:", error);
        throw error;
    }
};
