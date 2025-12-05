import { Heading, Input } from "@chakra-ui/react";
import { Field } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { TeamKey } from "../store/useTeam/types/Team";
import { PlayerNumber } from "../store/useTeam/types/Player";
import useTeam from "../store/useTeam";
import { useMemo } from "react";

export interface TeamFormProps {
  teamKey: TeamKey;
}

function TeamForm({ teamKey }: TeamFormProps) {
  const teams = useTeam((state) => state.teams);

  const setPlayerName = useTeam((state) => state.setPlayerName);

  const handlePlayerNameChanged = (
    e: React.ChangeEvent<HTMLInputElement>,
    playerNumber: PlayerNumber
  ) => {
    setPlayerName(teamKey, playerNumber, e.target.value);
  };

  const { player1, player2 } = useMemo(() => {
    return {
      player1: teams[teamKey].players[1].name,
      player2: teams[teamKey].players[2].name,
    };
  }, [teams, teamKey]);

  const formattedTeamName = `Team ${teamKey}`;

  return (
    <Card.Root>
      <Card.Header>
        <Heading size="2xl" mb={1} textAlign="center">
          {formattedTeamName}
        </Heading>
      </Card.Header>
      <Card.Body>
        <Field.Root marginBottom={4}>
          <Field.Label>Player 1:</Field.Label>
          <Input
            value={player1}
            placeholder={`${teamKey}1 (optional)`}
            onChange={(e) => handlePlayerNameChanged(e, 1)}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Player 2:</Field.Label>
          <Input
            value={player2}
            placeholder={`${teamKey}2 (optional)`}
            onChange={(e) => handlePlayerNameChanged(e, 2)}
          />
        </Field.Root>
      </Card.Body>
    </Card.Root>
  );
}

export default TeamForm;
