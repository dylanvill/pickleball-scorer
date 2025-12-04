import { Box } from "@chakra-ui/react";
import OnboardingSteps from "../components/OnboardingSteps";
import TeamStep from "../components/TeamStep";

export default function Home() {
  return (
    <Box p={4} backgroundColor="bg.subtle" height="full" minHeight="100vh">
      <OnboardingSteps
        playersComponent={<TeamStep />}
        firstServerComponent={<div>First Server Component</div>}
      />
    </Box>
  );
}
