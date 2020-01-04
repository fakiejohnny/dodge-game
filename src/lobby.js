import Player from './player'

export default class Lobby {
    constructor() {
        this.players = [];
        this.obstacles = [];
    }
    join() {
        this.players.push(new Player());
    }
    leave() {}
}