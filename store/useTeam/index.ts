import { create } from "zustand";
import { Team, TeamKey } from "./types/Team";
import { PlayerNumber } from "./types/Player";
import TeamState from "./types/TeamState";
import TeamActions from "./types/TeamAction";

const initialState: TeamState = {
  A: {
    name: "Team A",
    players: [
      { id: 0, name: "" },
      { id: 1, name: "" },
    ],
  },
  B: {
    name: "Team B",
    players: [
      { id: 0, name: "" },
      { id: 1, name: "" },
    ],
  },
};

const useTeam = create<TeamState & TeamActions>((set) => ({
  ...initialState,
  setPlayerName: (team: TeamKey, playerNumber: PlayerNumber, name: string) => {
    set((state: TeamState) => {
      const targetTeam = { ...state[team] };

      const targetPlayer = targetTeam.players[playerNumber];
      const updatedPlayer = { ...targetPlayer, name: name };

      const updatedTeam: Team = {
        ...targetTeam,
        players: [...targetTeam.players],
      };
      updatedTeam.players[playerNumber] = updatedPlayer;

      return {
        ...state,
        [team]: updatedTeam,
      };
    });
  },
}));

export default useTeam;
