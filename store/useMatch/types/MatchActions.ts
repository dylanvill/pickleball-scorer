import { TeamKey } from "../../useTeam/types/Team";

interface MatchActions {
  startMatch: (startingServer: TeamKey) => void;
  scorePoint: (scoringTeam: TeamKey) => void;
  missPoint: (team: TeamKey) => void;
  switchServer: () => void;
  sideOut: () => void;
}

export default MatchActions;
