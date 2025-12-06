import MatchState from "../types/MatchState";

const undo =
  () =>
  (state: MatchState): MatchState => {
    if (state.history.length === 0) return state;

    const previousState = state.history[state.history.length - 1];

    const newHistory = state.history.slice(0, -1);

    return {
      ...state,
      match: {
        ...state.match,
        ballPossession: previousState.ballPossession,
        currentServer: previousState.currentServer,
        points: previousState.points,
      },
      history: newHistory,
    };
  };

export default undo;
