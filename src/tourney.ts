class Tourney {
    public rounds: Array<Round> = [];
    public players: Array<Player> = [];
    public options: object;

    constructor(options?: object) {
        this.options = options;
    }

    public Round(id?: string) {
        return new Round(this, this.getActivePlayers(), id||undefined);
    }

    public Player(props: PrePlayer) {
        return {
            ...props,
            id: generateId()
        }
    }

    public getPlayer(id: string) {
        return this.players.find(self => self.id === id);
    }

    public getActivePlayers() {
        return this.players.filter(self => self.active === true);
    }

    public getPlayerPool() {
        return this.players;
    }

    public addPlayer(player: Player) {
        if(this.getPlayer(player.id)) throw new Error("A user with this ID already exists.");
        else this.players.push(player);
    }
}