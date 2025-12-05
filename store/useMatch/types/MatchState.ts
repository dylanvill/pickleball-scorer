import { TeamKey } from "../../useTeam/types/Team";

type ServerNumber = 1 | 2;

export interface MatchState {
  match: {
    isActive: boolean;
    ballPosession: TeamKey | null;
    currentServer: ServerNumber | null;
    points: Record<TeamKey, number>;
  };
}
