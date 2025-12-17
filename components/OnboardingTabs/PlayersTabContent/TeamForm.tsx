import { Heading, Input } from "@chakra-ui/react";
import { Field } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { TeamKey } from "@store/useTeam/types/Team";
import usePlayerNames from "./hooks/usePlayerNames";

export interface TeamFormProps {
  teamKey: TeamKey;
}

function TeamForm({ teamKey }: TeamFormProps) {
  const { player1, player2, handlePlayerNameChanged, teamName } =
    usePlayerNames({ teamKey });

  return (
    <Card.Root>
      <Card.Header>
        <Heading size="2xl" mb={1} textAlign="center">
          {teamName}
        </Heading>
      </Card.Header>
      <Card.Body>
        <Field.Root marginBottom={4}>
          <Field.Label>Player 1:</Field.Label>
          <Input
            value={player1}
            placeholder={`${teamKey}1 (optional)`}
            onChange={(e) => handlePlayerNameChanged(1, e.target.value)}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Player 2:</Field.Label>
          <Input
            value={player2}
            placeholder={`${teamKey}2 (optional)`}
            onChange={(e) => handlePlayerNameChanged(2, e.target.value)}
          />
        </Field.Root>
      </Card.Body>
    </Card.Root>
  );
}

export default TeamForm;
