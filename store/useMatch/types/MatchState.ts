import { TeamKey } from "../../useTeam/types/Team";

type ServerNumber = 1 | 2;

interface MatchState {
  match: {
    isActive: boolean;
    ballPossession: TeamKey | null;
    currentServer: ServerNumber | null;
    points: Record<TeamKey, number>;
    history: Omit<MatchState["match"], "history" | "isActive">[];
  };
}

export type MatchHistoryEntry = Pick<MatchState["match"], "history">;

export default MatchState;
