class Tourney {
    constructor(options) {
        this.rounds = [];
        this.players = [];
        this.options = options;
    }
    Round() {
        return new Round(this);
    }
    Player(props) {
        return Object.assign(Object.assign({}, props), { id: generateId() });
    }
    getPlayer(id) {
        return this.players.find(self => self.id === id);
    }
    getPlayerPool() {
        return this.players;
    }
    addPlayer(player) {
        if (this.getPlayer(player.id))
            throw new Error("A user with this ID already exists.");
        else
            this.players.push(player);
    }
}
