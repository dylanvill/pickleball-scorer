import { useMemo } from "react";
import useTeam from "@store/useTeam";
import { TeamKey } from "@store/useTeam/types/Team";
import { PlayerNumber } from "@store/useTeam/types/Player";

export interface SelectionTeamPlayerInfo {
  playerNumber: PlayerNumber;
  name: string;
}
export interface SelectionTeam {
  teamKey: TeamKey;
  name: string;
  players: SelectionTeamPlayerInfo[];
}

export interface ServerSelectionData {
  selection: SelectionTeam[];
}

const useServerSelectionData = (): ServerSelectionData => {
  const teams = useTeam((state) => state.teams);

  const formattedSelection = useMemo<SelectionTeam[]>(() => {
    return Object.entries(teams).map(([teamKey, team]) => ({
      teamKey: teamKey as TeamKey,
      name: team.name,
      players: Object.entries(team.players).map(([playerNumber, player]) => ({
        playerNumber: Number(playerNumber) as PlayerNumber,
        name: player.name,
      })),
    }));
  }, [teams]);

  return { selection: formattedSelection };
};

export default useServerSelectionData;
