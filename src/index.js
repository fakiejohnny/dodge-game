import {Position, Size} from './utils';
import {canvas, ctx} from './base';
import './reset';
import Lobby from './lobby'

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

class Game {
    constructor() {
        this.lobby = new Lobby();
    }
}

new Game();

resizeCanvas();
window.addEventListener("resize", resizeCanvas, false);