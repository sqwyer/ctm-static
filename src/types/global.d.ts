export {};

declare global {
    type User = {
        name: string|null;
        id: string|null;
        rating: number|null;
        score: number|undefined|null;
        active: true|false|undefined|null;
    }
    type PreUser = {
        name: string|null;
        id: undefined|null;
        rating: number|null;
        score: number|undefined|null;
        active: true|false|undefined|null;
    }
    type Player = User;
    type PrePlayer = PreUser;
}