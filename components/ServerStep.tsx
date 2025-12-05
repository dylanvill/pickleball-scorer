import { Box, Button, Heading, RadioCard, Stack } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import ServerCard from "./ServerCard";
import useTeam from "../store/useTeam";
import { PlayerNumber } from "../store/useTeam/types/Player";
import { TeamKey } from "../store/useTeam/types/Team";

export interface OnBackClickedProps {
  onBackClicked: () => void;
}

interface Selection {
  teamKey: TeamKey;
  name: string;
  players: { playerNumber: PlayerNumber; name: string }[];
}

function ServerStep({ onBackClicked }: OnBackClickedProps) {
  const [server, setServer] = useState<null | string>(null);

  const { teams } = useTeam();

  const formatted = useMemo<Selection[]>(() => {
    return Object.entries(teams).map(([teamKey, team]) => ({
      teamKey: teamKey as TeamKey,
      name: team.name,
      players: Object.entries(team.players).map(([playerNumber, player]) => ({
        playerNumber: Number(playerNumber) as PlayerNumber,
        name: player.name,
      })),
    }));
  }, [teams]);

  const handleOnBackClicked = () => {
    setServer(null);
    onBackClicked();
  };

  return (
    <div>
      <RadioCard.Root
        value={server}
        onValueChange={(e) => setServer(e.value)}
        variant="outline"
        colorPalette="green">
        <Stack gap={8}>
          {formatted.map((team) => (
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
      <Button variant="solid" width="full" marginTop={6} disabled={!server}>
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

export default ServerStep;
