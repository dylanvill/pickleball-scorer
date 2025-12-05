import { Heading, RadioCard } from "@chakra-ui/react";
import { SelectionTeamPlayerInfo } from "./hooks/useServerSelectionData";

export interface ServerCardProps {
  teamKey: string;
  teamName: string;
  players: SelectionTeamPlayerInfo[];
}

function ServerCard({ teamKey, teamName, players }: ServerCardProps) {
  const formattedPlayers = players.flatMap((player) => player.name).join(" & ");

  return (
    <RadioCard.Item value={String(teamKey)} backgroundColor="white">
      <RadioCard.ItemHiddenInput />
      <RadioCard.ItemControl>
        <RadioCard.ItemContent>
          <RadioCard.ItemText>
            <Heading size="lg">{teamName}</Heading>
          </RadioCard.ItemText>
          <RadioCard.ItemDescription>
            {formattedPlayers}
          </RadioCard.ItemDescription>
        </RadioCard.ItemContent>
        <RadioCard.ItemIndicator />
      </RadioCard.ItemControl>
    </RadioCard.Item>
  );
}

export default ServerCard;
