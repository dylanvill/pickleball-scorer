import { Box, Button } from "@chakra-ui/react";
import TeamForm from "./TeamForm";

export interface TeamStepProps {
  onSubmit?: () => void;
}

function TeamStep({ onSubmit }: TeamStepProps) {
  return (
    <>
      <Box marginBottom={6}>
        <TeamForm name="A" />
      </Box>
      <TeamForm name="B" />
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
