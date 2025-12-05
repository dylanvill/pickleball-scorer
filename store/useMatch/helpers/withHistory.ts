import MatchState, { MatchHistoryEntry } from "../types/MatchState";

export const withHistory = (state: MatchState): MatchHistoryEntry => {
  return {
    ballPossession: state.match.ballPossession,
    currentServer: state.match.currentServer,
    points: state.match.points,
  };
};
