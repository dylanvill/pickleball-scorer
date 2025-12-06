import { Button, RadioCard, Stack } from "@chakra-ui/react";
import { useState } from "react";
import ServerCard from "./ServerCard";
import useServerSelectionData from "./hooks/useServerSelectionData";
import { TeamKey } from "../../../store/useTeam/types/Team";

export interface FirstServerTabContentProps {
  onBackClicked: () => void;
  onStartGameClicked: (servingTeam: TeamKey) => void;
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
    onStartGameClicked(selectedServer as TeamKey);
  };

  return (
    <div>
      <RadioCard.Root
        value={String(selectedServer)}
        onValueChange={(e) => handleServerChanged(e.value)}
        variant="outline"
        colorPalette="green">
        <Stack gap={4}>
          {selection.map((team) => (
            <ServerCard
              key={team.teamKey}
              teamKey={team.teamKey}
              teamName={team.name}
              players={team.players}
            />
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
