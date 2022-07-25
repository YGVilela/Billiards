package physics.dinamics;

import physics.statics.MatchSetup;
import java.awt.Point;

enum TickResponse {
    PAUSED, MAX_TICKED, STOPED, EXECUTED
}

class CueHit {
    Point point;
    Float strength;
}

public class Match {
    MatchSetup setup;
    MatchState state;

    public Match(MatchSetup setup) {
        this.state = setup.getInitialState();
        this.setup = setup;
    }

    public Match(MatchSetup setup, MatchState state) {
        this.state = state;
        this.setup = setup;
    }

    public TickResponse tick() {
        if (this.state.isPaused) {
            return TickResponse.PAUSED;
        }

        if (this.setup.getMaxTicks().isPresent() &&
                this.state.currentTicks == this.setup.getMaxTicks().get()) {
            return TickResponse.MAX_TICKED;
        }

        if (this.state.ballsStoped()) {
            // Apply pocket rules
            // How to determine which actions the next player can perform?
            return TickResponse.STOPED;
        }

        this.processBallInteractions();
        this.state.currentTicks++;
        this.state.currentPlayer = (this.state.currentPlayer + 1) % this.setup.getPlayers().size();

        return TickResponse.EXECUTED;
    }

    private void processBallInteractions() {
        throw new Error("Not implemented yet.");
    }

    public void hitCueBall(Integer ballIndex, CueHit hit) {
    }
}
