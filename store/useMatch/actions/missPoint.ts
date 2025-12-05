import { MatchState } from "../types/MatchState";

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
