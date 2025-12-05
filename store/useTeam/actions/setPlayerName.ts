import { PlayerNumber } from "../types/Player";
import { TeamKey } from "../types/Team";
import TeamState from "../types/TeamState";

const setPlayerName =
  (team: TeamKey, playerNumber: PlayerNumber, name: string) =>
  (state: TeamState): TeamState => {
    const targetTeam = { ...state.teams[team] };

    const targetPlayer = targetTeam.players[playerNumber];
    const updatedPlayer = { ...targetPlayer, name: name };

    const updatedTeam = {
      ...targetTeam,
      players: { ...targetTeam.players },
    };
    updatedTeam.players[playerNumber] = updatedPlayer;

    return {
      ...state,
      teams: {
        ...state.teams,
        [team]: updatedTeam,
      },
    };
  };

export default setPlayerName;
