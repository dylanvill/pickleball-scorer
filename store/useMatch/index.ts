import { create } from "zustand";
import MatchActions from "./types/MatchActions";
import { MatchState } from "./types/MatchState";
import startMatch from "./actions/startMatch";
import scorePoint from "./actions/scorePoint";
import missPoint from "./actions/missPoint";

const initialState: MatchState = {
  match: {
    isActive: false,
    ballPosession: null,
    currentServer: null,
    points: {
      A: 0,
      B: 0,
    },
  },
};

const useMatch = create<MatchState & MatchActions>((set) => ({
  ...initialState,
  startMatch: (startingServer) => set(startMatch(startingServer)),
  scorePoint: () => set(scorePoint()),
  missPoint: () => set(missPoint()),
}));

export default useMatch;
