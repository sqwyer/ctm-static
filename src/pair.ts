function pair(list: Array<Player>) {
    list.sort((a, b) => Number(b.rating) - Number(a.rating));
    let pairs = [];
    if (list.length % 2 != 0) {
        pairs.push([list[list.length-1], {player: null, rating: null, score: null, id: null}]);
        list.splice(list.length, 1);
    }
    let split = [list.splice(0, list.length/2), list];
    for(let i = 0; i < split[0].length; i++) {
        pairs.unshift([split[0][i], split[1][i]]);
    }
    return pairs;
}