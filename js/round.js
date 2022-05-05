class Round {
    constructor(parent, players, id) {
        this.players = [];
        this.active = true;
        this.parent = parent;
        this.id = id || generateId();
        this.players = players;
        this.pair();
    }
    genPairs() {
        return pair(this.players);
    }
    setPairs(pairs) {
        this.pairings = pairs;
    }
    pair() {
        let pairs = pair(this.players);
        this.pairings = pairs;
        return pairs;
    }
    generateDOMElement(override) {
        let elem = generateTable(this.pairings.map(self => {
            let c = (f) => (f == null || f == undefined);
            if (c(self[0].score))
                self[0].score = 0;
            if (c(self[1].score))
                self[1].score = 0;
            if (c(self[0].name))
                self[0].name = "Waiting";
            if (c(self[1].name))
                self[1].name = "Waiting";
            return [
                "x.",
                self[0].score,
                self[0].name,
                self[1].score,
                self[1].name
            ];
        }), ["Board", "Black Score", "Black Player", "White Score", "White Player"]);
        elem.id = this.id;
        if (override && document.getElementById(this.id))
            document.getElementById(this.id).replaceWith(elem);
        return elem;
    }
    extractParent() {
        return this.parent;
    }
}
