import { IBallState } from "./ballState";
import { Ball, Table } from "./basics";
import { PhysicsSetup } from "./physicsHandlers";
import { Player } from "./players";
import { PocketRule } from "./pocketRules";

export type MatchSetup = {
  balls: { cueBall: Ball[]; [ballType: string]: Ball[] };
  pocketRules: { cueBall: PocketRule; [ballType: string]: PocketRule };
  players: Player[];
  table: Table;
  physics: PhysicsSetup;
  maxTicks: number;
  initialState: IMatchState;
};

export interface IMatchState {
  ballState: { cueBall: IBallState[]; [ballType: string]: IBallState[] };
  currentPlayer: number;
  isPaused: boolean;
  currentTicks: number;
}

export interface IMatch {
  matchConstants: MatchSetup;
  matchVariables: IMatchState;
}

/** Should this be somewhere else? */
export type TickResponse = "PAUSED" | "MAX_TICKED" | "STOPED" | "EXECUTED";
