import { MatchSetup } from "../../types/match";
import { BallState } from "../models/ballState";
import { MatchState } from "../models/match";

export function isStateValid(
  matchConstants: MatchSetup,
  matchVariables: MatchState
): boolean {
  console.log(matchConstants, matchVariables);

  return true;
}

export function allBallsStoped(ballState: {
  [ballType: string]: BallState[];
}): boolean {
  console.log(ballState);

  return true;
}

export function computeInteractions(
  constants: MatchSetup,
  variables: MatchState
): {
  cueBall: BallState[];
  [ballType: string]: BallState[];
} {
  console.log(constants, variables);

  return variables.ballState;
}
