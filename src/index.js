import {Position, Size} from './utils';
import {canvas, ctx} from './base';
import './reset';

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

class Game {
    constructor() {
        console.log('game test');
    }
}

new Game();

resizeCanvas();
window.addEventListener("resize", resizeCanvas, false);