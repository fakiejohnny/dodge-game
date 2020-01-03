import Player from './player'

export default class Lobby {
    constructor() {
        this.players = [];
        this.join();
    }
    join() {
        this.players.push(new Player('#24BCFF'));
    }
    leave() {}
}