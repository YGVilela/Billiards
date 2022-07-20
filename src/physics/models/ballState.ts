import { IBallState } from "../../types/ballState";
import { Ball, Coordinate } from "../../types/basics";

export class BallState implements IBallState {
  readonly ball: Ball;
  position: Coordinate;
  velocity: Coordinate;
  movementRotation: number;
  sideRotation: number;
  pocketed: boolean;

  constructor(ball: Ball) {
    this.position = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
    this.movementRotation = 0;
    this.sideRotation = 0;
    this.pocketed = false;
    this.ball = ball;
  }

  //   pocket() {
  //     this.position.x = 0;
  //     this.position.y = 0;
  //     this.velocity.x = 0;
  //     this.velocity.y = 0;
  //     this.movementRotation = 0;
  //     this.sideRotation = 0;
  //     this.pocketed = true;
  //   }
}
