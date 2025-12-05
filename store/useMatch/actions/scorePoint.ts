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
    };
  };

export default scorePoint;
