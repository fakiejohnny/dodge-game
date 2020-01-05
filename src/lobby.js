import Player from './player';
import ObstaclePlayground from './obstaclePlayground';

export default class Lobby {
    constructor() {
        this.players = [];
        this.obstaclePlayground = new ObstaclePlayground(this);
    }
    join() {
        console.log('user join');
        this.players.push(new Player());
    }
    leave() {
        console.log('user leave');
    }
    loop() {
        this.players.forEach(element => {
            element.ball.move();
            element.ball.draw();
        });
        this.obstaclePlayground.loop();
    }
}
