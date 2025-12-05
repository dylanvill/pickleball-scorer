import { create } from "zustand";
import { Team, TeamKey } from "./types/Team";
import { PlayerNumber } from "./types/Player";
import TeamState from "./types/TeamState";
import TeamActions from "./types/TeamActions";

const initialState: TeamState = {
  teams: {
    A: {
      name: "Team A",
      players: {
        1: { name: "" },
        2: { name: "" },
      },
    },
    B: {
      name: "Team B",
      players: {
        1: { name: "" },
        2: { name: "" },
      },
    },
  },
};

const useTeam = create<TeamState & TeamActions>((set) => ({
  ...initialState,
  setPlayerName: (team: TeamKey, playerNumber: PlayerNumber, name: string) => {
    set((state: TeamState) => {
      const targetTeam = { ...state.teams[team] };

      const targetPlayer = targetTeam.players[playerNumber];
      const updatedPlayer = { ...targetPlayer, name: name };

      const updatedTeam: Team = {
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
    });
  },
}));

export default useTeam;
