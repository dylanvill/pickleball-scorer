import { useState } from "react";
import useMatch from "@store/useMatch";
import { TeamKey } from "@store/useTeam/types/Team";
import OnboardingTabs, {
  OnboardingTabsProps,
} from "@components/OnboardingTabs";
import PlayersTabContent from "@components/OnboardingTabs/PlayersTabContent";
import FirstServerTabContent from "@components/OnboardingTabs/FirstServerTabContent";
import useTeam from "../store/useTeam";

type ActiveTab = OnboardingTabsProps["activeTab"];

function MatchSetupPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("players");
  const { startMatch } = useMatch();
  const { clearDefaultPlayerNames } = useTeam();

  const handleStartGameClicked = (servingTeam: TeamKey) => {
    startMatch(servingTeam);
  };

  const handleBackClicked = () => {
    clearDefaultPlayerNames();
    setActiveTab("players");
  };

  return (
    <OnboardingTabs
      playersComponent={
        <PlayersTabContent onNextClicked={() => setActiveTab("firstServer")} />
      }
      firstServerComponent={
        <FirstServerTabContent
          onStartGameClicked={handleStartGameClicked}
          onBackClicked={handleBackClicked}
        />
      }
      activeTab={activeTab}
    />
  );
}

export default MatchSetupPage;
