import {Position, Size} from './utils';
import {canvas, ctx} from './base';
import './reset';
import Lobby from './lobby'
import playground from './playground';
import Obstacle from './obstacle';

class Game {
    constructor() {
        this.lobby = new Lobby();
        this.lobby.join();
        this.render = new Render(this.lobby);
        this.render.loop();
    }
}

class Render {
    constructor(lobby) {
        this.lobby = lobby;
    }
    loop() {
        ctx.clearRect(0, 0, playground.size.width, playground.size.height);

        this.lobby.players.forEach(element => {
            element.ball.move();
            element.ball.draw();
        });

        this.lobby.obstacles.forEach(element => {
            element.move();
            element.draw();
        });

        requestAnimationFrame(() => {
            this.loop();
            //let a = new Obstacle();
            //console.log(a.movementDirection);
        });
    }
}

new Game();