import {Position, Size} from './utils';

class Mouse {
    constructor() {
        this.position = new Position(0, 0);
        this.pressedDown = false;
        document.addEventListener("mousemove", (e) => {
            this.setPosition(e);
        }, false);
        document.addEventListener("mousedown", (e) => {
            this.down(e);
        }, false);
        document.addEventListener("mouseup", (e) => {
            this.up(e);
        }, false);
    }
    setPosition(e) {
        console.log('setPosition');
        this.position.x = e.clientX;
        this.position.y = e.clientY;
    }
    down(e) {
        console.log('down');
        this.PressedDown = true;
    }
    up(e) {
        console.log('up');
        this.PressedDown = false;
    }
}

export default class Player {
    constructor(color) {
        this.color = color;
        this.mouse = new Mouse();
    }
}
