class Tourney {
    constructor(options) {
        this.rounds = [];
        this.players = [];
        this.options = options;
    }
    Round(id) {
        return new Round(this, this.getActivePlayers(), id || undefined);
    }
    Player(props) {
        return Object.assign(Object.assign({}, props), { id: generateId() });
    }
    getPlayer(id) {
        return this.players.find(self => self.id === id);
    }
    getActivePlayers() {
        return this.players.filter(self => self.active === true);
    }
    setPlayerScore(player, score) {
        this.players[this.players.indexOf(this.getPlayer(player))].score = score;
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
