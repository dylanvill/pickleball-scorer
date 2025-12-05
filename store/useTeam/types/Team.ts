import { Player } from "./Player";

export type TeamKey = "A" | "B";
export type TeamName = "Team A" | "Team B";

export interface Team {
  name: TeamName;
  players: [Player, Player];
}
