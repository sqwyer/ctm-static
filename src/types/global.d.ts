export {};

declare global {
    type User = {
        name: string;
        id: string;
        rating: number;
        score: number|undefined;
    }
}