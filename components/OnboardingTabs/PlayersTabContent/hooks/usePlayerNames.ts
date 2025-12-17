import { useMemo } from "react";
import useTeam from "@store/useTeam";
import { PlayerNumber } from "@store/useTeam/types/Player";
import { TeamKey } from "@store/useTeam/types/Team";

export interface usePlayerNamesProps {
  teamKey: TeamKey;
}

export interface usePlayerNamesReturn {
  player1: string;
  player2: string;
  teamName: string;
  handlePlayerNameChanged: (playerNumber: PlayerNumber, name: string) => void;
}

const usePlayerNames = ({
  teamKey,
}: usePlayerNamesProps): usePlayerNamesReturn => {
  const teams = useTeam((state) => state.teams);

  const setPlayerName = useTeam((state) => state.setPlayerName);

  const handlePlayerNameChanged = (
    playerNumber: PlayerNumber,
    name: string
  ) => {
    setPlayerName(teamKey, playerNumber, name);
  };

  const { player1, player2 } = useMemo(() => {
    return {
      player1: teams[teamKey].players[1].name,
      player2: teams[teamKey].players[2].name,
    };
  }, [teams, teamKey]);

  return {
    player1,
    player2,
    handlePlayerNameChanged,
    teamName: teams[teamKey].name,
  };
};

export default usePlayerNames;
