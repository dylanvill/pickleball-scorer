import { TeamKey } from "../../useTeam/types/Team";

export type ServerNumber = 1 | 2;

interface Match {
  isActive: boolean;
  ballPossession: TeamKey | null;
  currentServer: ServerNumber | null;
  points: Record<TeamKey, number>;
}

export default Match;