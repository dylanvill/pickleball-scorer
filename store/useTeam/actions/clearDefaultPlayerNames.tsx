import TeamState from "../types/TeamState";

const clearDefaultPlayerNames =
  () =>
  (state: TeamState): TeamState => {
    const A1 =
      state.teams.A.players[1].name === "A1"
        ? ""
        : state.teams.A.players[1].name;
    const A2 =
      state.teams.A.players[2].name === "A2"
        ? ""
        : state.teams.A.players[2].name;
    const B1 =
      state.teams.B.players[1].name === "B1"
        ? ""
        : state.teams.B.players[1].name;
    const B2 =
      state.teams.B.players[2].name === "B2"
        ? ""
        : state.teams.B.players[2].name;

    return {
      ...state,
      teams: {
        A: {
          ...state.teams.A,
          players: {
            1: { name: A1 },
            2: { name: A2 },
          },
        },
        B: {
          ...state.teams.B,
          players: {
            1: { name: B1 },
            2: { name: B2 },
          },
        },
      },
    };
  };

export default clearDefaultPlayerNames;
