import { IBallState } from "./ballState";
import { Cloth, CueHit } from "./basics";

export type CueBallHandler = (ball: IBallState, hit: CueHit) => IBallState;

export type BallBallHandler = (
  ball1: IBallState,
  ball2: IBallState
) => { ball1: IBallState; ball2: IBallState };

export type BallClothHandler = (ball: IBallState, cloth: Cloth) => IBallState;

export type BallCushionHandler = (ball: IBallState) => IBallState;

export type PhysicsSetup = {
  ballBallHandler: string;
  ballClothHandler: string;
  cueBallHandler: string;
  ballCushionHandler: string;
};
