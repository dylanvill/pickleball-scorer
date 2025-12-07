import MatchState from "../types/MatchState";

const initialState: MatchState = {
  match: {
    isActive: false,
    ballPossession: null,
    currentServer: null,
    points: {
      A: 0,
      B: 0,
    },
  },
  history: [],
};

export default initialState;