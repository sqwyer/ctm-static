class Round {
    constructor(parent, players) {
        this.players = [];
        this.active = true;
        this.parent = parent;
        this.id = generateId();
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
    generateDOMElement() {
        console.log(this.pairings.map(self => {
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
        }));
        return generateTable(this.pairings.map(self => {
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
    }
    extractParent() {
        return this.parent;
    }
}
