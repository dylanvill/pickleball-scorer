import { create } from "zustand";
import MatchActions from "./types/MatchActions";
import MatchState from "./types/MatchState";
import startMatch from "./actions/startMatch";
import scorePoint from "./actions/scorePoint";
import missPoint from "./actions/missPoint";
import undo from "./actions/undo";
import initialState from "./helpers/initialState";

const useMatch = create<MatchState & MatchActions>((set) => ({
  ...initialState,
  startMatch: (startingServer) => set(startMatch(startingServer)),
  scorePoint: () => set(scorePoint()),
  missPoint: () => set(missPoint()),
  undo: () => set(undo()),
}));

export default useMatch;
