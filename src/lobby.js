import Player from './player';
import Obstacle from './obstacle';

export default class Lobby {
    constructor() {
        this.players = [];
        this.obstacles = [];
        this.obstacleSpawnLoop = new ObstacleSpawnLoop(this);
    }
    join() {
        this.players.push(new Player());
    }
    leave() {}
    loop() {
        this.players.forEach(element => {
            element.ball.move();
            element.ball.draw();
        });
        this.obstacles.forEach(element => {
            element.move();
            element.draw();
        });
        this.deleteObstacle();
        this.obstacleSpawnLoop.count();
    }
    deleteObstacle() {
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

class ObstacleSpawnLoop {
	constructor(lobby) {
        this.lobby = lobby;
		this.timer = 0;
        this.number = 60;
        
        this.proMode = false;

		this.value = 0;
		if (this.proMode === true) {
			this.number = 7;
		}
	}
	count() { //wird 60x die Sekunde aufgerufen
		this.timer += 1;
		if (this.timer >= 60) {
			this.timer = 0;
			//hier kommt rein was einmal pro Sekunde aufgerufen werden soll
			this.reduceTimeInterval();
		}

		this.value += 1; //this.value geht immer wieder hoch zu number
		if (this.value >= this.number) { //this.number = 59 58 57 ...
			this.value = 0;
			this.lobby.spawnObstacle();
		}
	}
	reduceTimeInterval() { //jede 1s
		if (this.number > 7) {
			this.number -= 0.6;
		}
	}
}