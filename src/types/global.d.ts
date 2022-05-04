export {};

declare global {
    type User = {
        name: string;
        id: string;
        rating: number;
        score: number|undefined;
        active: true|false|undefined;
    }
    type PreUser = {
        name: string;
        id: undefined;
        rating: number;
        score: number|undefined;
        active: true|false|undefined;
    }
    type Player = User;
    type PrePlayer = PreUser;
}