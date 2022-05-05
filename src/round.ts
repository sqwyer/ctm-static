class Round {
    public id: string;
    public parent: Tourney;
    public players: Array<Player> = [];
    public active: boolean = true;
    public pairings: Array<Array<Player>>;
    constructor(parent: Tourney, players: Array<Player>, id?: string) {
        this.parent = parent;
        this.id = id || generateId();
        this.players = players;
        this.pair();
    }

    public genPairs() {
        return pair(this.players);
    }

    public setPairs(pairs: Array<Array<Player>>) {
        this.pairings = pairs;
    }

    public pair() {
        let pairs = pair(this.players);
        this.pairings = pairs;
        return pairs;
    }

    public generateDOMElement(override?: boolean) {
        let elem = generateTable(
            this.pairings.map(self => {
                let c = (f: any) => (f==null||f==undefined);
                if(c(self[0].score)) self[0].score = 0;
                if(c(self[1].score)) self[1].score = 0;
                if(c(self[0].name)) self[0].name = "Waiting";
                if(c(self[1].name)) self[1].name = "Waiting";
                return [
                    "x.",
                    self[0].score,
                    self[0].name,
                    self[1].score,
                    self[1].name
                ];
            }),
            ["Board", "Black Score", "Black Player", "White Score", "White Player"]
        );

        elem.id = this.id;

        if(override && document.getElementById(this.id)) document.getElementById(this.id).replaceWith(elem);

        return elem;
    }

    public extractParent() {
        return this.parent;
    }
}