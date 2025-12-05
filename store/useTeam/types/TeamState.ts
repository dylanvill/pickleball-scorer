import { Team, TeamKey } from "./Team";

interface TeamState {
  teams: Record<TeamKey, Team>;
}

export default TeamState;
