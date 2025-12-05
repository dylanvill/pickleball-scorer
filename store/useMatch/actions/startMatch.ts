import { TeamKey } from "../../useTeam/types/Team";
import { MatchState } from "../types/MatchState";

const startMatch =
  (startingServer: TeamKey) =>
  (state: MatchState): MatchState => {
    return {
      ...state,
      match: {
        ...state.match,
        isActive: true,
        currentServer: 2,
        ballPossession: startingServer,
        points: {
          A: 0,
          B: 0,
        },
      },
    };
  };

export default startMatch;
