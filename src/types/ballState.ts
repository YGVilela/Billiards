import { Ball, Coordinate } from "./basics";

export interface IBallState {
  readonly ball: Ball;
  position: Coordinate;
  velocity: Coordinate;
  movementRotation: number;
  sideRotation: number;
  pocketed: boolean;
}
