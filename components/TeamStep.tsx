import { Box, Button } from "@chakra-ui/react";
import TeamForm from "./TeamForm";

function TeamStep() {
  return (
    <>
      <Box marginBottom={6}>
        <TeamForm name="A" />
      </Box>
      <TeamForm name="B" />
      <Button variant="solid" width="full" marginTop={6}>
        Next
      </Button>
      <Button variant="ghost" width="full" marginTop={2}>
        Skip
      </Button>
    </>
  );
}

export default TeamStep;
