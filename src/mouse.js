import {Position} from './utils';

export default class Mouse {
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
        this.position.x = e.clientX;
        this.position.y = e.clientY;
    }
    down(e) {
        this.PressedDown = true;
    }
    up(e) {
        this.PressedDown = false;
    }
}
