"use client";

import OnboardingTabs, {
  OnboardingTabsProps,
} from "../components/OnboardingTabs";
import PlayersTabContent from "../components/OnboardingTabs/PlayersTabContent";
import { useState } from "react";
import FirstServerTabContent from "../components/OnboardingTabs/FirstServerTabContent";

type ActiveTab = OnboardingTabsProps["activeTab"];

export default function Home() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("players");

  const handleStartGameClicked = (teamKey: string) => {
    console.log("Start game with", { teamKey });
  };

  return (
    <OnboardingTabs
      playersComponent={
        <PlayersTabContent onNextClicked={() => setActiveTab("firstServer")} />
      }
      firstServerComponent={
        <FirstServerTabContent
          onStartGameClicked={handleStartGameClicked}
          onBackClicked={() => setActiveTab("players")}
        />
      }
      activeTab={activeTab}
    />
  );
}
