import MatchState from "../types/MatchState";

const undo =
  () =>
  (state: MatchState): MatchState => {
    // If no history, return current state
    if (state.history.length === 0) {
      return state;
    }

    // Get the last state from history
    const previousState = state.history[state.history.length - 1];
    
    // Remove the last item from history
    const newHistory = state.history.slice(0, -1);

    return {
      ...state,
      match: previousState,
      history: newHistory,
    };
  };

export default undo;
