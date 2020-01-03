import Player from './player'

export default class Lobby {
    constructor() {
        this.players = [];
    }
    join() {
        this.players.push(new Player());
    }
    leave() {}
}