import { MatchState } from "../types/MatchState";

const missPoint =
  () =>
  (state: MatchState): MatchState => {
    const currentTeam = state.match.ballPosession!;
    const currentServer = state.match.currentServer!;

    const isSecondServer = currentServer === 2;

    if (isSecondServer) {
      return {
        ...state,
        match: {
          ...state.match,
          currentServer: 1,
          ballPosession: currentTeam === "A" ? "B" : "A",
        },
      };
    } else {
      return {
        ...state,
        match: {
          ...state.match,
          currentServer: 2,
        },
      };
    }
  };

export default missPoint;
