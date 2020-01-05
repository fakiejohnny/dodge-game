import Obstacle from './obstacle';
import { collisionRectCircle } from './collosions';

export default class ObstaclePlayground {
	constructor(lobby) {
		this.obstacles = [];
		this.lobby = lobby;
		
		this.timer = 0;
        this.number = 60;
        this.proMode = true;
		this.value = 0;
		if (this.proMode) {
			this.number = 7;
		}
	}
	loop() {

		this.obstacles.forEach(element => {
            element.move();
			element.draw();
			this.playerCollisionTest(element);
		});

		this.checkObstacleLife();
		
		this.timer += 1;
		if (this.timer >= 60) {
			this.timer = 0;
			//hier kommt rein was einmal pro Sekunde aufgerufen werden soll
			this.reduceTimeInterval();
		}

		this.value += 1; //this.value geht immer wieder hoch zu number
		if (this.value >= this.number) { //this.number = 59 58 57 ...
			this.value = 0;
			this.spawnObstacle();
		}
	}
	reduceTimeInterval() { //jede 1s
		if (this.number > 7) {
			this.number -= 0.6;
		}
	}
	playerCollisionTest(element) {
        let test = collisionRectCircle(element.position, element.size, this.lobby.players[0].ball.position, this.lobby.players[0].ball.radius);
        if (test) {
            element.canDie = true;
        }
	}
	checkObstacleLife() {
        for (let i = 0; i < this.obstacles.length; i++) {
			if (this.obstacles[i] && this.obstacles[i].canDie) {
                this.obstacles.splice(i,1);
                i -= 1;
            }
		}
    }
	spawnObstacle() {
        this.obstacles.push(new Obstacle());
	}
}
