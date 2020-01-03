import Mouse from './mouse';
import Ball from './ball';

export default class Player {
    constructor() {
        this.mouse = new Mouse();
        this.ball = new Ball(this.mouse);
    }
}
