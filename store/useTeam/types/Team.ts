import { Player } from "./Player";

export type TeamKey = "teamA" | "teamB";
export type TeamName = "Team A" | "Team B";

export interface Team {
  name: TeamName;
  players: [Player, Player];
}
