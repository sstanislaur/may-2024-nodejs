"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Comment } from '../types/jsonPlaceholder';

export default function Comments() {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        const fetchComments = async () => {
            const res = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
            setComments(res.data);
        };
        fetchComments();
    }, []);

    return (
        <div>
            <h1>Comments</h1>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <strong>{comment.name}</strong>: {comment.body}
                    </li>
                ))}
            </ul>
        </div>
    );
}
