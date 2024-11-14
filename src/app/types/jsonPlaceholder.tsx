export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export interface Comment {
    id: number;
    name: string;
    body: string;
    email: string;
    postId: number;
}
