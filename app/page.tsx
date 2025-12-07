"use client";

import OnboardingTabs, {
  OnboardingTabsProps,
} from "../components/OnboardingTabs";
import PlayersTabContent from "../components/OnboardingTabs/PlayersTabContent";
import { useState } from "react";
import FirstServerTabContent from "../components/OnboardingTabs/FirstServerTabContent";
import useMatch from "../store/useMatch";
import { TeamKey } from "../store/useTeam/types/Team";
import { useRouter } from "next/navigation";

type ActiveTab = OnboardingTabsProps["activeTab"];

export default function Home() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("players");
  const { startMatch } = useMatch();
  const router = useRouter();

  const handleStartGameClicked = (servingTeam: TeamKey) => {
    startMatch(servingTeam);
    router.replace("/match");
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
