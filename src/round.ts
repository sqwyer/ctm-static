class Round {
    public id: string;
    public parent: Tourney;
    public players: Array<User> = [];
    constructor(parent: Tourney) {
        this.parent = parent;
        this.id = generateId();
    }
}