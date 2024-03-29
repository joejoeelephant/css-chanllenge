export type User = {
    "image": { 
        "png": string;
        "webp": string;
    },
    "username": string;
}

export type Reply = {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: User;
    replyingTo: string
}

export type Comment = {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: User;
    replies: Reply[]
}