export class Poll {
    id: string;
    title: string;
    description: string;
    answer: pollanswer;
}

export interface pollanswer {
    id: string;
    content: string;
}

