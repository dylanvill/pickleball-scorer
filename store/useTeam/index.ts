import { create } from "zustand";
import { TeamKey } from "./types/Team";
import { PlayerNumber } from "./types/Player";
import TeamState from "./types/TeamState";
import TeamActions from "./types/TeamActions";
import setPlayerName from "./actions/setPlayerName";
import setDefaultPlayerNames from "./actions/setDefaultPlayerNames";
import { persist } from "zustand/middleware";

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

const useTeam = create<TeamState & TeamActions>()(
  persist(
    (set) => ({
      ...initialState,
      setPlayerName: (
        team: TeamKey,
        playerNumber: PlayerNumber,
        name: string
      ) => {
        set(setPlayerName(team, playerNumber, name));
      },
      setDefaultPlayerNames: () => {
        set(setDefaultPlayerNames());
      },
    }),
    {
      name: "team-storage", // unique name for localStorage key
      partialize: (state) => ({
        teams: state.teams,
      }), // Only persist state, not actions
    }
  )
);

export default useTeam;
