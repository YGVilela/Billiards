package physics.statics;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Optional;

import physics.dinamics.MatchState;

public class MatchSetup {
    HashSet<Ball> balls;
    HashSet<PocketRule> pocketRules;
    LinkedHashSet<String> players;
    Table table;
    PhysicsSetup physics;
    Optional<Integer> maxTicks;
    MatchState initialState;

    public MatchSetup() {
    }

    /** Todo: Implement other checks */
    public Boolean isStateCompatible(MatchState state) {
        Boolean validBallPosition = this.table.ballsOnSurface(state.getAllBalls());
        Boolean ticksInRange = this.maxTicks.isPresent() ? this.maxTicks.get() < state.getCurrentTicks() : true;

        return validBallPosition && ticksInRange;
    }

    public HashSet<Ball> getBalls() {
        return balls;
    }

    public void setBalls(HashSet<Ball> balls) {
        this.balls = balls;
    }

    public HashSet<PocketRule> getPocketRules() {
        return pocketRules;
    }

    public void setPocketRules(HashSet<PocketRule> pocketRules) {
        this.pocketRules = pocketRules;
    }

    public LinkedHashSet<String> getPlayers() {
        return players;
    }

    public void setPlayers(LinkedHashSet<String> players) {
        this.players = players;
    }

    public Table getTable() {
        return table;
    }

    public void setTable(Table table) {
        this.table = table;
    }

    public PhysicsSetup getPhysics() {
        return physics;
    }

    public void setPhysics(PhysicsSetup physics) {
        this.physics = physics;
    }

    public Optional<Integer> getMaxTicks() {
        return maxTicks;
    }

    public void setMaxTicks(Integer maxTicks) {
        this.maxTicks = Optional.of(maxTicks);
    }

    public MatchState getInitialState() {
        return initialState;
    }

    public void setInitialState(MatchState initialState) {
        this.initialState = initialState;
    }

}
