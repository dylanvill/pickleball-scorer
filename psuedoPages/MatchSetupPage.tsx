import { useState } from "react";
import useMatch from "@store/useMatch";
import { TeamKey } from "@store/useTeam/types/Team";
import OnboardingTabs, {
  OnboardingTabsProps,
} from "@components/OnboardingTabs";
import PlayersTabContent from "@components/OnboardingTabs/PlayersTabContent";
import FirstServerTabContent from "@components/OnboardingTabs/FirstServerTabContent";

type ActiveTab = OnboardingTabsProps["activeTab"];

function MatchSetupPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("players");
  const { startMatch } = useMatch();

  const handleStartGameClicked = (servingTeam: TeamKey) => {
    startMatch(servingTeam);
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

export default MatchSetupPage;
