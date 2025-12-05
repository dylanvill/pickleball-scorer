import { Box, Button, Heading, RadioCard, Stack } from "@chakra-ui/react";
import { useState } from "react";
import ServerCard from "./ServerCard";
import useServerSelectionData from "./hooks/useServerSelectionData";
import { TeamKey } from "../../../store/useTeam/types/Team";
import { PlayerNumber } from "../../../store/useTeam/types/Player";

export interface FirstServerTabContentProps {
  onBackClicked: () => void;
  onStartGameClicked: (teamKey: TeamKey, playerNumber: PlayerNumber) => void;
}

function FirstServerTabContent({
  onBackClicked,
  onStartGameClicked,
}: FirstServerTabContentProps) {
  const [selectedServer, setSelectedServer] = useState<string | null>(null);
  const { selection } = useServerSelectionData();

  const handleServerChanged = (server: string | null) => {
    setSelectedServer(server);
  };

  const handleOnBackClicked = () => {
    handleServerChanged(null);
    onBackClicked();
  };

  const handleStartClicked = () => {
    const [teamKey, playerNumber] = selectedServer!.split("-");

    onStartGameClicked(
      teamKey as TeamKey,
      Number(playerNumber) as PlayerNumber
    );
  };

  return (
    <div>
      <RadioCard.Root
        value={String(selectedServer)}
        onValueChange={(e) => handleServerChanged(e.value)}
        variant="outline"
        colorPalette="green">
        <Stack gap={8}>
          {selection.map((team) => (
            <Box key={team.name}>
              <Heading size="2xl" mb={1} textAlign="center">
                {team.name}
              </Heading>
              <Stack>
                {team.players.map((player) => (
                  <ServerCard
                    key={`${team.teamKey}-${player.playerNumber}`}
                    value={`${team.teamKey}-${player.playerNumber}`}
                    label={player.name}
                  />
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </RadioCard.Root>
      <Button
        variant="solid"
        width="full"
        marginTop={6}
        disabled={!selectedServer}
        onClick={handleStartClicked}>
        Start Game
      </Button>
      <Button
        variant="ghost"
        width="full"
        marginTop={2}
        onClick={handleOnBackClicked}>
        Back
      </Button>
    </div>
  );
}

export default FirstServerTabContent;
