"use client";

import { Box } from "@chakra-ui/react";
import OnboardingSteps, {
  OnboardingStepsProps,
} from "../components/OnboardingSteps";
import TeamStep from "../components/TeamStep";
import { useState } from "react";

type ActiveTab = OnboardingStepsProps["activeTab"];

export default function Home() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("players");

  return (
    <Box p={4} backgroundColor="bg.subtle" height="full" minHeight="100vh">
      <OnboardingSteps
        playersComponent={
          <TeamStep onSubmit={() => setActiveTab("firstServer")} />
        }
        firstServerComponent={<div>First Server Component</div>}
        activeTab={activeTab}
      />
    </Box>
  );
}
