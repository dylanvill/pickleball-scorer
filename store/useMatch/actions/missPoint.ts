import { withHistory } from "../helpers/withHistory";
import MatchState from "../types/MatchState";

const missPoint =
  () =>
  (state: MatchState): MatchState => {
    const currentTeam = state.match.ballPossession!;
    const currentServer = state.match.currentServer!;

    const isSecondServer = currentServer === 2;

    if (isSecondServer) {
      return {
        ...state,
        match: {
          ...state.match,
          currentServer: 1,
          ballPossession: currentTeam === "A" ? "B" : "A",
        },
        history: [...state.history, withHistory(state)],
      };
    } else {
      return {
        ...state,
        match: {
          ...state.match,
          currentServer: 2,
        },
        history: [...state.history, withHistory(state)],
      };
    }
  };

export default missPoint;
