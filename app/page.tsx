import { Box, Button } from "@chakra-ui/react";
import TeamForm from "../components/TeamForm";

export default function Home() {
  return (
    <Box p={4} backgroundColor="bg.subtle" height="full" minHeight="100vh">
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
    </Box>
  );
}
