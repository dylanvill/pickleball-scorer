import { TeamKey } from "../../useTeam/types/Team";

interface MatchActions {
  startMatch: (startingServer: TeamKey) => void;
  endMatch: () => void;
  scorePoint: () => void;
  missPoint: () => void;
  undo: () => void;
}

export default MatchActions;
