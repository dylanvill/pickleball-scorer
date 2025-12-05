import { Button, Stack } from "@chakra-ui/react";
import TeamForm from "./TeamForm";

export interface TeamStepProps {
  onSubmit?: () => void;
}

function TeamStep({ onSubmit }: TeamStepProps) {
  return (
    <>
      <Stack>
        <TeamForm name="A" />
        <TeamForm name="B" />
      </Stack>
      <Button variant="solid" width="full" marginTop={6} onClick={onSubmit}>
        Next
      </Button>
      <Button variant="ghost" width="full" marginTop={2}>
        Skip
      </Button>
    </>
  );
}

export default TeamStep;
