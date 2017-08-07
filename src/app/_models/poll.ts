export class Poll {
    id: string;
    title: string;
    description: string;
    answer: pollanswer;
    user: string;
}

export interface pollanswer {
    id: string;
    content: string;
}

