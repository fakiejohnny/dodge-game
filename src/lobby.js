import Player from './player';
import Obstacle from './obstacle';

export default class Lobby {
    constructor() {
        this.players = [];
        this.obstacles = [];
    }
    join() {
        this.players.push(new Player());
        this.obstacles.push(new Obstacle());
        this.obstacles.push(new Obstacle());
        this.obstacles.push(new Obstacle());
        this.obstacles.push(new Obstacle());
        this.obstacles.push(new Obstacle());
        this.obstacles.push(new Obstacle());
        this.obstacles.push(new Obstacle());
        this.obstacles.push(new Obstacle());
        this.obstacles.push(new Obstacle());
        this.obstacles.push(new Obstacle());
        this.obstacles.push(new Obstacle());
        this.obstacles.push(new Obstacle());
    }
    leave() {}
}