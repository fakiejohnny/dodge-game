import {Position, Size} from './utils';
import {canvas, ctx, playground} from './base';
import './reset';
import Lobby from './lobby'

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

        requestAnimationFrame(() => {
            this.loop();
        });
    }
}

new Game();