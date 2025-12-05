"use client";

import { Box } from "@chakra-ui/react";
import OnboardingTabs, {
  OnboardingTabsProps,
} from "../components/OnboardingTabs";
import PlayersTabContent from "../components/OnboardingTabs/PlayersTabContent";
import { useState } from "react";
import ServerStep from "../components/ServerStep";

type ActiveTab = OnboardingTabsProps["activeTab"];

export default function Home() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("players");

  return (
    <Box p={4} backgroundColor="bg.subtle" height="full" minHeight="100vh">
      <OnboardingTabs
        playersComponent={
          <PlayersTabContent
            onNextClicked={() => setActiveTab("firstServer")}
          />
        }
        firstServerComponent={
          <ServerStep onBackClicked={() => setActiveTab("players")} />
        }
        activeTab={activeTab}
      />
    </Box>
  );
}
