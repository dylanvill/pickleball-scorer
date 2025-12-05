import { create } from "zustand";

type PlayerNumber = 1 | 2;
interface Player {
  number: PlayerNumber;
  name: string;
  defaultName: string;
}

interface Team {
  name: string;
  players: [Player, Player];
  score: number;
}

interface GameState {
  scoreA: number;
  scoreB: number;
  serverNumber: 1 | 2;
}

interface HistoryEntry {
  gameState: GameState;
  servingTeam: "A" | "B";
  timestamp: number;
}

export interface MatchState {
  // Teams
  teamA: Team;
  teamB: Team;

  // Game state
  servingTeam: "A" | "B";
  serverNumber: 1 | 2;

  // History for undo
  history: HistoryEntry[];

  // Game status
  gameActive: boolean;
}

interface MatchActions {
  // Player setup
  setPlayerName: (team: "A" | "B", playerIndex: 0 | 1, name: string) => void;

  // Game control
  startGame: (servingTeam: "A" | "B") => void;
  score: () => void;
  miss: () => void;
  undo: () => void;

  // Manual overrides
  setScore: (team: "A" | "B", score: number) => void;
  setServingTeam: (team: "A" | "B") => void;
  setServerNumber: (serverNumber: 1 | 2) => void;

  // Reset
  resetMatch: () => void;
}

const initialState: MatchState = {
  teamA: {
    name: "Team A",
    players: [
      { number: 1, name: "", defaultName: "A1" },
      { number: 2, name: "", defaultName: "A2" },
    ],
    score: 0,
  },
  teamB: {
    name: "Team B",
    players: [
      { number: 1, name: "", defaultName: "B1" },
      { number: 2, name: "", defaultName: "B2" },
    ],
    score: 0,
  },
  servingTeam: "A",
  serverNumber: 2, // Start with server #2 per official rules
  history: [],
  gameActive: false,
};

const useMatch = create<MatchState & MatchActions>((set) => ({
  ...initialState,

  setPlayerName: (team, playerIndex, name) => {
    set((state) => {
      
      // const targetTeam = team === "A" ? "teamA" : "teamB";
      // const updatedTeam = { ...state[targetTeam] };
      // updatedTeam.players = [...updatedTeam.players] as [Player, Player];
      // updatedTeam.players[playerIndex] = {
      //   ...updatedTeam.players[playerIndex],
      //   name: name
      // };
      
      // return {
      //   ...state,
      //   [targetTeam]: updatedTeam
      // };
    });
  },

  startGame: (servingTeam) => {
    // TODO: Implement
    console.log("startGame", servingTeam);
  },

  score: () => {
    // TODO: Implement
  },

  miss: () => {
    // TODO: Implement
  },

  undo: () => {
    // TODO: Implement
  },

  setScore: (team, score) => {
    // TODO: Implement
    console.log("setScore", team, score);
  },

  setServingTeam: (team) => {
    // TODO: Implement
    console.log("setServingTeam", team);
  },

  setServerNumber: (serverNumber) => {
    // TODO: Implement
    console.log("setServerNumber", serverNumber);
  },

  resetMatch: () => {
    set(initialState);
  },
}));

export default useMatch;
