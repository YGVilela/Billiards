package physics.dinamics;

import physics.statics.Ball;
import java.awt.Point;

public class BallState {
    private Ball ball;
    Point position;
    Point velocity;
    Float movementRotation;
    Float sideRotation;
    Boolean pocketed;

    BallState(Ball ball) {
        this.ball = ball;
    }

    public Ball getBall() {
        return ball;
    }

    public Boolean isStoped() {
        return false;
    }
}
