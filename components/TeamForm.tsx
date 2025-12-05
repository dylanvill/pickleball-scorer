import { Heading, Input } from "@chakra-ui/react";
import { Field } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";

export interface TeamFormProps {
  name: string;
}

function TeamForm({ name }: TeamFormProps) {
  const formattedTeamName = `Team ${name}`;

  const handlePlayerNameChanged = (
    e: React.ChangeEvent<HTMLInputElement>,
    playerNumber: number
  ) => {
    console.log(
      `Team ${name} - Player ${playerNumber} name changed to: ${e.target.value}`
    );
  };

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
            placeholder={`${name}1 (optional)`}
            onChange={(e) => handlePlayerNameChanged(e, 1)}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Player 2:</Field.Label>
          <Input
            placeholder={`${name}2 (optional)`}
            onChange={(e) => handlePlayerNameChanged(e, 2)}
          />
        </Field.Root>
      </Card.Body>
    </Card.Root>
  );
}

export default TeamForm;
