const team = {
    _players: [
        {
            firstName: "Kevin",
            lastName: "Durant",
            age: 33,
        },
        {
            firstName: "Lebron",
            lastName: "James",
            age: 37,
        },
        {
            firstName: "James",
            lastName: "Harden",
            age: 32,
        },
    ],
    _games: [
        {
            opponent: "Lakers",
            teamPoints: 56,
            opponentPoints: 78,
        },
        {
            opponent: "Celtics",
            teamPoints: 76,
            opponentPoints: 58,
        },
        {
            opponent: "Warriors",
            teamPoints: 88,
            opponentPoints: 78,
        },
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge,
        };
        this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints,
        };
        this.games.push(game);
    },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);
team.addGame("Titans", 100, 98);
console.log(team.games);
