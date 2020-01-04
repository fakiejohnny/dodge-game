import {canvas, ctx} from './base';
import {Size} from './utils';

class Playground {
    constructor() {
        this.size = new Size(0, 0);
        this.resize();
        window.addEventListener("resize", () => {
            this.resize();
        }, false);
    }
    resize() {
        this.size.width = window.innerWidth;
        this.size.height = window.innerHeight;
        let scale = window.devicePixelRatio;
        canvas.width = this.size.width * scale;
        canvas.height = this.size.height * scale;
        ctx.scale(scale, scale);
    }
}
const playground = new Playground();

export default playground;