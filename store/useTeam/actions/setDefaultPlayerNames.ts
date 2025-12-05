import TeamState from "../types/TeamState";

const setDefaultPlayerNames =
  () =>
  (state: TeamState): TeamState => {
    return {
      ...state,
      teams: {
        A: {
          ...state.teams.A,
          players: {
            1: { name: state.teams.A.players[1].name || "A1" },
            2: { name: state.teams.A.players[2].name || "A2" },
          },
        },
        B: {
          ...state.teams.B,
          players: {
            1: { name: state.teams.B.players[1].name || "B1" },
            2: { name: state.teams.B.players[2].name || "B2" },
          },
        },
      },
    };
  };

export default setDefaultPlayerNames;
