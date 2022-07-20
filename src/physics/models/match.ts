import { CueHit } from "../../types/basics";
import {
  IMatch,
  IMatchState,
  MatchSetup,
  TickResponse,
} from "../../types/match";
import {
  allBallsStoped,
  computeInteractions,
  isStateValid,
} from "../modules/modules";
import { BallState } from "./ballState";
import cueBallHandlers from "../handlers/cueBallHandlers";

export class MatchState implements IMatchState {
  ballState: { cueBall: BallState[]; [ballType: string]: BallState[] };
  currentPlayer: number;
  isPaused: boolean;
  currentTicks: number;

  constructor(
    cueBallsState: BallState[],
    otherBallsState: { [ballType: string]: BallState[] }
  ) {
    this.ballState = {
      cueBall: cueBallsState,
      ...otherBallsState,
    };
    this.isPaused = false;
    this.currentTicks = 0;
    this.currentPlayer = 0;
  }
}

export class Match implements IMatch {
  matchConstants: MatchSetup;
  matchVariables: MatchState;

  constructor(matchConstants: MatchSetup, matchState?: MatchState) {
    if (matchState == undefined) {
      matchState = matchConstants.initialState;
    }

    if (!isStateValid(matchConstants, matchState)) {
      throw new Error("Invalid match state.");
    }
    this.matchConstants = matchConstants;
    this.matchVariables = matchState;
  }

  public hitCueBall(ballIndex: number, hit: CueHit) {
    // Safety check
    const ballState = this.matchVariables.ballState.cueBall[ballIndex];
    if (ballState == undefined) {
      throw new Error("The ball state is not defined.");
    }

    // Update cue ball
    const handlerName = this.matchConstants.physics.cueBallHandler;
    const handler = cueBallHandlers[handlerName];
    if (handler == undefined) {
      throw new Error(`Cue-ball handler ${handlerName} is not implemented.`);
    }
    const finalState = handler(ballState, hit);
    this.matchVariables.ballState.cueBall[ballIndex] = finalState;

    // Reset ticks
    this.matchVariables.currentTicks = 0;
  }

  /** If the tick responded with:
   * - PAUSED: Player must resume match to continue
   * - MAX_TICKED: Player must reset ticks to continue
   * - STOPED: Player must hit cue ball(s) to continue
   * - EXECUTED: No action needed from the player. The game interface must be rendered again
   */
  public processTick(): TickResponse {
    if (this.matchVariables.isPaused) {
      return "PAUSED";
    }

    if (this.matchVariables.currentTicks == this.matchConstants.maxTicks) {
      return "MAX_TICKED";
    }

    if (allBallsStoped(this.matchVariables.ballState)) {
      return "STOPED";
    }

    // Compute interactions
    const newBallStates = computeInteractions(
      this.matchConstants,
      this.matchVariables
    );

    // Update match variables
    this.matchVariables.currentTicks++;
    this.matchVariables.ballState = newBallStates;
    this.matchVariables.currentPlayer =
      (this.matchVariables.currentPlayer + 1) %
      this.matchConstants.players.length;

    return "EXECUTED";
  }
}
