import { create } from "zustand";

interface Player {
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
      { name: "", defaultName: "A1" },
      { name: "", defaultName: "A2" }
    ],
    score: 0
  },
  teamB: {
    name: "Team B", 
    players: [
      { name: "", defaultName: "B1" },
      { name: "", defaultName: "B2" }
    ],
    score: 0
  },
  servingTeam: "A",
  serverNumber: 2, // Start with server #2 per official rules
  history: [],
  gameActive: false
};

const useMatch = create<MatchState & MatchActions>((set) => ({
  ...initialState,
  
  setPlayerName: (team, playerIndex, name) => {
    // TODO: Implement
    console.log("setPlayerName", team, playerIndex, name);
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
  }
}));

export default useMatch;
