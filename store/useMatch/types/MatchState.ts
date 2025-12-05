import Match from "./Match";

interface MatchState {
  match: Match;
  history: MatchHistoryEntry[];
}

export type MatchHistoryEntry = Omit<Match, "isActive" | "history">;

export default MatchState;
