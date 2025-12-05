import { Heading, Input } from "@chakra-ui/react";
import { Field } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";

export interface TeamFormProps {
  name: string;
}

function TeamForm({ name }: TeamFormProps) {
  const formattedTeamName = `Team ${name}`;

  return (
    <Card.Root >
      <Card.Header>
        <Heading size="2xl" mb={1} textAlign="center">
          {formattedTeamName}
        </Heading>
      </Card.Header>
      <Card.Body>
        <Field.Root marginBottom={4}>
          <Field.Label>Player 1:</Field.Label>
          <Input placeholder={`${name}1 (optional)`} />
        </Field.Root>
        <Field.Root>
          <Field.Label>Player 2:</Field.Label>
          <Input placeholder={`${name}2 (optional)`} />
        </Field.Root>
      </Card.Body>
    </Card.Root>
  );
}

export default TeamForm;
