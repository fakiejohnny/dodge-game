import { Position } from "./utils";

function collisionRectCircle(rp, rs, cp, cr) { //rect position, rect size, circle position, circle radius

    let test = new Position(cp.x, cp.y);

    if (cp.x < rp.x) {
        test.position.x = rp.x
    } else if (cp.x > rp.x + rs.width) {
        test.position.x = rp.x + rs.width
    }

    if (cp.y < rp.y) {
        test.position.y = rp.y
    } else if (cp.y > rp.y + rs.height) {
        test.position.y = rp.y + rs.height
    }

    let distance = this.calculateDistance(cp, test.position)

    if (distance <= cr) {
        return true;
    }
    return false;
};


function collisionCircleCircle(c1p, c1r, c2p, c2r) { //circle 1 position, circle 1 radius, circle 2 position, circle 2 radius
    
    if (this.calculateDistance(c1p, c2p) <= c1r + c2r) {
        return true;
    }
    return false;
};

export {collisionRectCircle, collisionCircleCircle};