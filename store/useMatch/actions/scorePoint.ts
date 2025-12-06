import { withHistory } from "../helpers/withHistory";
import MatchState from "../types/MatchState";

const scorePoint =
  () =>
  (state: MatchState): MatchState => {
    const scoringTeam = state.match.ballPossession!;

    const currentPoints = state.match.points[scoringTeam];
    return {
      ...state,
      match: {
        ...state.match,
        points: {
          ...state.match.points,
          [scoringTeam]: currentPoints + 1,
        },
      },
      history: [...state.history, withHistory(state)],
    };
  };

export default scorePoint;
