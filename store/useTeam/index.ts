import { create } from "zustand";
import { TeamKey } from "./types/Team";
import { PlayerNumber } from "./types/Player";
import TeamState from "./types/TeamState";
import TeamActions from "./types/TeamActions";
import setPlayerName from "./actions/setPlayerName";
import setDefaultPlayerNames from "./actions/setDefaultPlayerNames";

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
    set(setPlayerName(team, playerNumber, name));
  },
  setDefaultPlayerNames: () => {
    set(setDefaultPlayerNames());
  },
}));

export default useTeam;
