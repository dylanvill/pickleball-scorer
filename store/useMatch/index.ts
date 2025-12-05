import { create } from "zustand";
import { TeamKey } from "../useTeam/types/Team";

type ServerNumber = 1 | 2;

export interface MatchState {
  match: {
    isActive: boolean | null;
    ballPosession: TeamKey | null;
    currentServer: ServerNumber | null;
    points: Record<TeamKey, number>;
  };
}

const useMatch = create((set) => ({}));

export default useMatch;
