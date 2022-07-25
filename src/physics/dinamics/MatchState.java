package physics.dinamics;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.Set;

public class MatchState {
    HashMap<String, Set<BallState>> ballState;
    LinkedList<Player> players;
    Boolean isPaused;
    Integer currentTicks;
    Integer currentPlayer;

    public MatchState(HashMap<String, Set<BallState>> ballState) {
        this.ballState = ballState;
        this.players = new LinkedList<Player>();
        this.isPaused = false;
        this.currentPlayer = 0;
        this.currentTicks = 0;
    }

    public Boolean ballsStoped() {
        return this.ballState.values()
                .parallelStream()
                .flatMap(balls -> balls.stream().map(BallState::isStoped))
                .allMatch(stoped -> stoped);

    }

    public LinkedList<Player> getPlayers() {
        return players;
    }

    public void setPlayers(LinkedList<Player> players) {
        this.players = players;
    }

    public Boolean getIsPaused() {
        return isPaused;
    }

    public void setIsPaused(Boolean isPaused) {
        this.isPaused = isPaused;
    }

    public Integer getCurrentTicks() {
        return currentTicks;
    }

    public void setCurrentTicks(Integer currentTicks) {
        this.currentTicks = currentTicks;
    }

    public Integer getCurrentPlayer() {
        return currentPlayer;
    }

    public void setCurrentPlayer(Integer currentPlayer) {
        this.currentPlayer = currentPlayer;
    }

    public Set<BallState> getAllBalls() {
        return null;
    }

    public HashMap<String, Set<BallState>> getBallState() {
        return ballState;
    }

    public void setBallState(HashMap<String, Set<BallState>> ballState) {
        this.ballState = ballState;
    }

}
