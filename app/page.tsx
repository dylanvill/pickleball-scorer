"use client";

import { Box } from "@chakra-ui/react";
import OnboardingTabs, {
  OnboardingTabsProps,
} from "../components/OnboardingTabs";
import PlayersTabContent from "../components/OnboardingTabs/PlayersTabContent";
import { useState } from "react";
import FirstServerTabContent from "../components/OnboardingTabs/FirstServerTabContent";

type ActiveTab = OnboardingTabsProps["activeTab"];

export default function Home() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("players");

  const handleStartGameClicked = (teamKey: string, playerNumber: number) => {
    console.log("Start game with", { teamKey, playerNumber });
  };

  return (
    <Box p={4} backgroundColor="bg.subtle" height="full" minHeight="100vh">
      <OnboardingTabs
        playersComponent={
          <PlayersTabContent
            onNextClicked={() => setActiveTab("firstServer")}
          />
        }
        firstServerComponent={
          <FirstServerTabContent
            onStartGameClicked={handleStartGameClicked}
            onBackClicked={() => setActiveTab("players")}
          />
        }
        activeTab={activeTab}
      />
    </Box>
  );
}
