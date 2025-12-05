import { PlayerNumber } from "./Player";
import { TeamKey } from "./Team";

interface TeamActions {
  /** Sets the player name for a given team and player number */
  setPlayerName: (
    team: TeamKey,
    playerNumber: PlayerNumber,
    name: string
  ) => void;
  /** Sets the player names to their default values */
  setDefaultPlayerNames: () => void;
}

export default TeamActions;
