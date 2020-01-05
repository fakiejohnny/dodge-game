import { Position, Size, getRandomArbitrary, getRandomInt, calculateAngel } from "./utils";
import playground from './playground';
import {canvas, ctx} from './base';

export default class Obstacle {
    constructor() {
        this.position = this.generateSpawnPosition();
        this.size = this.setSize();
        this.movementDirection = this.setMovementDirection(this.position);
        this.velocity = getRandomArbitrary(1,4);
        this.color = 'rgb(51,51,51)';
        this.ticks = 0;
        this.canDie = false;
        this.deathTime = 6000/this.velocity;
    }
    countDeath() {
		this.ticks += 1;
		if (this.ticks > this.deathTime) {
			this.canDie = true;
		}
	}
    generateSpawnPosition() {
        let t = 200;
        let number = getRandomInt(0, playground.size.width*2+playground.size.height*2);
        let pos = new Position(0, 0);
        if (number > playground.size.width) {
            pos.y = number - playground.size.width;
            pos.x = playground.size.width + t/2;
        
            if (number > playground.size.width + playground.size.height) {
                pos.y = playground.size.height + t/2;
                pos.x = number - (playground.size.width + playground.size.height);
        
                if (number > playground.size.width*2 + playground.size.height) {
                    pos.y = number - (playground.size.width*2 + playground.size.height);
                    pos.x = 0 - t;
                }
            }
        } else {
            pos.y = 0 - t;
            pos.x = number;
        }
        return pos;
    }
    setSize() {
		let a = getRandomInt(1,2);
		switch (a) {
			case 1 :
				return new Size(getRandomInt(40, 120), getRandomInt(12, 40));
			break;
			case 2 :
				return new Size(getRandomInt(12, 40), getRandomInt(40, 120));
		}
	}
	setMovementDirection(pos1) {
		let a = 50;
		let x = getRandomInt(0 + a, playground.size.width - a);
		let y = getRandomInt(0 + a, playground.size.height - a);
		let pos2 = new Position(x, y)
		return calculateAngel(pos1, pos2);
    }
    move() {
		this.position.x += this.velocity * Math.cos(this.movementDirection);
        this.position.y += this.velocity * Math.sin(this.movementDirection);
        this.countDeath();
	}
	draw() {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.rect(this.position.x, this.position.y, this.size.width, this.size.height);
		ctx.fill();
		ctx.closePath();
	}
}