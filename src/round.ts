class Round {
    public id: string;
    public parent: Tourney;
    public players: Array<Player> = [];
    constructor(parent: Tourney, players: Array<Player>) {
        this.parent = parent;
        this.id = generateId();
        this.players = players;
    }

    public generateDOMElement() {
        // do stuff with dom here
    }

    public extractParent() {
        return this.parent;
    }
}