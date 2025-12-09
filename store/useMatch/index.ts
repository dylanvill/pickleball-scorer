import { create } from "zustand";
import MatchActions from "./types/MatchActions";
import MatchState from "./types/MatchState";
import startMatch from "./actions/startMatch";
import scorePoint from "./actions/scorePoint";
import missPoint from "./actions/missPoint";
import undo from "./actions/undo";
import initialState from "./helpers/initialState";
import endMatch from "./actions/endMatch";
import { persist } from "zustand/middleware";

const useMatch = create<MatchState & MatchActions>()(
  persist(
    (set) => ({
      ...initialState,
      startMatch: (startingServer) => set(startMatch(startingServer)),
      endMatch: () => set(endMatch()),
      scorePoint: () => set(scorePoint()),
      missPoint: () => set(missPoint()),
      undo: () => set(undo()),
    }),
    {
      name: "match-storage", // unique name for localStorage key
      partialize: (state) => ({
        match: state.match,
        history: state.history,
      }), // Only persist state, not actions
    }
  )
);

export default useMatch;
