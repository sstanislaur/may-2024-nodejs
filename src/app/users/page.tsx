"use client";

import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { User } from '../types/jsonPlaceholder';

export default function Users() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(res.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
