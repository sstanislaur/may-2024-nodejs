"use client";

import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Post } from '../types/jsonPlaceholder';

export default function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
